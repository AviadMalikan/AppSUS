import { noteService } from "../services/note.service.js"

const { useState, useEffect } = React
// const { useNavigate, useParams, Link } = ReactRouterDOM

export function NoteAdd({ onSaveNote }) {
    const [newNote, setNewNote] = useState(noteService.getEmptyNote('note-txt'))
    const [newType, setType] = useState('note-txt')

    function setNoteType(ev, type) {
        ev.preventDefault()
        setType((prevType) => prevType = type)
        setNewNote((prevNote) => {
            return { ...prevNote, type: type}
        })
    }

    function getPlaceholder() {
        const {type} = newNote
        if (type === 'note-txt') return 'Enter text' 
        if (type === 'note-img') return 'Enter image url' 
        if (type === 'note-vid') return 'Enter video url' 
        if (type === 'note-todos') return 'eneter tototoddos' 
    }

    function getInputName() {
        const {type} = newNote
        if (type === 'note-txt') return 'txt'
        if (type === 'note-img' || type === 'note-vid') return 'url' 
        if (type === 'note-todos') return 'todos' 
    }

    function handleChange({ target }) {
        let { value, name: field } = target
        setNewNote((prevNote) => ({
            ...prevNote, info: {
                ...prevNote.info, [field]: value
            }
        }))
    }


    return <div className="note-add">
        <section className="add-input">
            <form onSubmit={() => onSaveNote(event, newNote)} className="form">
                <input
                    type="text"
                    id="txt"
                    name={getInputName()}
                    placeholder={getPlaceholder()}
                    value={newNote.txt}
                    onChange={handleChange}
                />

                <section className="type-btns">
                    <button type="button" onClick={() => setNoteType(event, 'note-txt')} className="add-note-btn btn fa txt-keep-btn"> </button>
                    <button type="button" onClick={() => setNoteType(event, 'note-img')} className="add-note-btn btn fa img-keep-btn"> </button>
                    <button type="button" onClick={() => setNoteType(event, 'note-todos')} className="add-note-btn btn fa todos-keep-btn"> </button>
                    <button type="button" onClick={() => setNoteType(event, 'note-vid')} className="add-note-btn btn fa vid-keep-btn"> </button>
                </section>

            </form>


        </section>

        {/* <Link to="/note">back</Link> */}
    </div>
}