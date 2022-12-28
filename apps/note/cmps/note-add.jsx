import { noteService } from "../services/note.service.js"

const { useState, useEffect } = React
const { useNavigate, useParams, Link } = ReactRouterDOM

export function NoteAdd() {
    const [newNote, setNewNote] = useState(noteService.getEmptyNote('note-txt'))
    const [dynPlaceholder, setPlaceholder] = useState('Enter text')
    const [dynInputName, setInputName] = useState('txt')
    const navigate = useNavigate()

    useEffect(() => {
        noteService.getEmptyNote(newNote.type)
    }, [newNote])

    function onSaveNote(ev) {
        ev.preventDefault()
        noteService.save(newNote).then(() => {
            // showSuccessMsg('Book saved!')
            navigate('/note')
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

        if (type === 'note-txt') {
            setPlaceholder('Enter text')
            setInputName('txt')
        }
        if (type === 'note-img') {
            setPlaceholder('Enter img url')
            setInputName('url')
        }
        if (type === 'note-todos') {
            setPlaceholder('Enter comma seperated text')
            setInputName('todos')
        }
        if (type === 'note-vid') setPlaceholder('Enter video url')
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
                {/* <label htmlFor="txt">Text:</label> */}
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
            </section>

        </section>

        {/* <Link to="/note">back</Link> */}
    </div>
}