const { useState, useEffect } = React
const { Outlet, Link, NavLink } = ReactRouterDOM

import { noteService } from '../services/note.service.js';
import { NoteList } from '../cmps/note-list.jsx';
import { NoteFilter } from '../cmps/note-filter.jsx';
import { NoteAdd } from '../cmps/note-add.jsx';

export function NoteIndex() {
    const [filterBy, setFilterBy] = useState(noteService.getDefaultFilter())
    const [notes, setNotes] = useState(null)

    useEffect(() => {
        loadNotes()
    }, [filterBy])

    function loadNotes() {
        noteService.query(filterBy)
            .then(notesToDisplay => {
                console.log('notes = ', notes)
                setNotes(notesToDisplay)
            })
    }

    function onRemoveNote(noteId) {
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

    return <section  className="note-index main-layout">

        <NoteAdd notes={notes} setNotes={setNotes}/>

        {!notes && <h1>Loading Notes...</h1>}
        <NoteFilter onSetFilter={onSetFilter} />


        {notes && <NoteList notes={notes} onRemoveNote={onRemoveNote} loadNotes={loadNotes}/>}


    </section>


}
