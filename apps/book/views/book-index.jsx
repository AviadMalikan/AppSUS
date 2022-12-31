const { useState, useEffect } = React
const { Link } = ReactRouterDOM


import { BookFilter } from "../cmps/book-filter.jsx"
import { BookList } from "../cmps/book-list.jsx"

// import { showSuccessMsg, showErrorMsg } from "../services/event-bus.service.js"
import { BookService } from "../services/book.service.js"

export function BookIndex() {
    const [filterBy, setFilterBy] = useState(BookService.getDefaultFilter())
    const [books, setBooks] = useState()

    useEffect(() => {
        loadBooks()
    }, [filterBy])

    function loadBooks() {
        BookService.query(filterBy)
            .then(booksToDIsplay => {
                setBooks(booksToDIsplay)
            })
    }


    function onRemoveBook(bookId) {
        BookService.remove(bookId)
            .then(() => {
                const updatedBooks = books.filter(book => book.id !== bookId)
                setBooks(updatedBooks)
                // showSuccessMsg('Book Removed!')
            })
            .catch((err) => {
                console.log('Had issues removing', err)
                // showErrorMsg('Could not remove book, try again please!')
            })
    }

    function onSetFilter(filterBy) {
        setFilterBy(filterBy)
    }

    return <section className="books-index">

        <div>
            {!books && <h1>Loading Books...</h1>}
            <BookFilter onSetFilter={onSetFilter} />

            <div className="add-links">
                <Link to="/book/edit">Add Book</Link>
                {/* <Link to="/book/add">Add Book From Google</Link> */}
            </div>

            {books && < BookList books={books} onRemoveBook={onRemoveBook} />}
        </div>

    </section>

}