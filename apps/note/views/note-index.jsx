const { useState, useEffect } = React
const { Outlet, Link, NavLink } = ReactRouterDOM

import { noteService } from '../services/note.service.js';
import { NoteList } from '../cmps/note-list.jsx';
import { NoteFilter } from '../cmps/note-filter.jsx';

export function NoteIndex() {
    const [filterBy, setFilterBy] = useState(noteService.getDefaultFilter())
    const [notes, setNotes] = useState(null)

    useEffect(() => {
        loadNotes()
    }, [filterBy])

    function loadNotes() {
        noteService.query(filterBy)
            .then(notesToDisplay => {
                setNotes(notesToDisplay)
            })
    }

    function onRemoveNote(noteId) {
        console.log('noteId = ', noteId)
        noteService.remove(noteId)
            .then(() => {
                const updatedNotes = notes.filter(note => note.id !== noteId)
                setNotes(updatedNotes)
                // showSuccessMsg('Note Removed!')
            })
            .catch((err) => {
                console.log('Had issues removing', err)
                // showErrorMsg('Could not remove note, try again please!')
            })
    }

    function onSetFilter(filterBy) {
        setFilterBy(filterBy)
    }

    return <section className="note-index">

       {/* <Link to="/note/add">Add Note</Link> */}
        <div className="nested-route">
            <Outlet />
        </div>
        {!notes && <h1>Loading Notes...</h1>}
        <NoteFilter onSetFilter={onSetFilter} />


        {notes && <NoteList notes={notes} onRemoveNote={onRemoveNote}/>}


    </section>


}
