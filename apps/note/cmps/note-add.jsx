import { noteService } from "../services/note.service.js"

const { useState, useEffect } = React
const { useNavigate, useParams, Link } = ReactRouterDOM

export function NoteAdd({ setNotes, notes }) {
    const [newNote, setNewNote] = useState(noteService.getEmptyNote('note-txt'))
    const [dynPlaceholder, setPlaceholder] = useState('Enter text')
    const [dynInputName, setInputName] = useState('txt')
    const navigate = useNavigate()

    useEffect(() => {
        noteService.getEmptyNote(newNote.type)
    }, [newNote])

    function onSaveNote(ev) {
        ev.preventDefault()
        console.log('notes before = ', notes)
        noteService.save(newNote).then(() => {
            // showSuccessMsg('Book saved!')
        })
            .catch((err) => {
                console.log('err = ', err)
                // showErrorMsg('Cancled')
            })

    }

    function setNoteType(type) {
        setNewNote((prevNote) => {
            console.log('now');
            return { ...prevNote, type: type }
        })

        let placeholder = ''
        let inputName = ''

        if (type === 'note-txt') {
            placeholder = 'Enter text'
            inputName = 'txt'
        }
        if (type === 'note-img') {
            placeholder = 'Enter img url'
            inputName = 'url'
        }
        if (type === 'note-todos') {
            placeholder = 'Enter comma seperated text'
            inputName = 'todos'
        }
        if (type === 'note-vid') {
            placeholder = 'Enter video url'
            inputName = 'url'
        }

        setPlaceholder(placeholder)
        setInputName(inputName)
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
            <form onSubmit={onSaveNote}>
                <input type="text"
                    name={dynInputName}
                    id="txt"
                    placeholder={dynPlaceholder}
                    value={newNote.txt}
                    onChange={handleChange}
                />
            </form>

            <section className="type-btns">
                <button onClick={() => setNoteType('note-txt')} className="add-note-btn btn fa txt-keep-btn"> </button>
                <button onClick={() => setNoteType('note-img')} className="add-note-btn btn fa img-keep-btn"> </button>
                <button onClick={() => setNoteType('note-todos')} className="add-note-btn btn fa todos-keep-btn"> </button>
                <button onClick={() => setNoteType('note-vid')} className="add-note-btn btn fa vid-keep-btn"> </button>
            </section>

        </section>

        {/* <Link to="/note">back</Link> */}
    </div>
}