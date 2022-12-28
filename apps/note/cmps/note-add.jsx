import { noteService } from "../services/note.service.js"

const { useState, useEffect } = React
const { Outlet, Link, NavLink } = ReactRouterDOM

export function NoteAdd() {
    // const [newNote, setNewNote] = useState(noteService.getEmptyNote())

    function onSaveBook(ev) {
        ev.preventDefault()
        BooksService.save(bookToEdit).then((book) => {
            showSuccessMsg('Book saved!')
            navigate('/book')
        })
            .catch((err) => {
                showErrorMsg('Cancled')
            })
    }



    return <div className="note-add">

        <Link to="/note">back</Link>

        {/* <form onSubmit={onSaveNote}>
            <label htmlFor="title">Title:</label>
            <input type="text"
                name="title"
                id="title"
                placeholder="Enter title..."
                value={bookToEdit.title}
                onChange={handleChange}
            />



            </form> */}

        adding adddd
        </div>
}