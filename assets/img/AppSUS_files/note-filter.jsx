import { noteService } from "../services/note.service.js"

const { useState, useEffect } = React
const { Link } = ReactRouterDOM

export function NoteFilter({ onSetFilter }) {

    const [filterByToEdit, setFilterByToEdit] = useState(noteService.getDefaultFilter())

    useEffect(() => {
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])


    function onSubmitFilter(ev) {
        ev.preventDefault()
        onSetFilter(filterByToEdit)
    }

    function handleChange({ target }) {
        let { value, name: field } = target
        setFilterByToEdit((prevFilter) => {
            return { ...prevFilter, [field]: value }
        })
    }

    return <section className="note-filter">

        <form className="filter-form" onSubmit={onSubmitFilter}>
            <input type="text"
                id="txt"
                name="txt"
                placeholder="Search by text"
                onChange={handleChange} />

            <select onChange={handleChange} name="type" id="rate">
                <option value="">All</option>
                <option value="note-txt">Text</option>
                <option value="note-img">Image</option>
                <option value="note-todos">Todo-list</option>
                <option value="note-vid">Video</option>
            </select>

        </form>
    </section>


}