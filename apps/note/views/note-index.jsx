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

    function onSaveNote(ev, newNote) {
        ev.preventDefault()
        noteService.save(newNote).then((note) => {
            setNotes((prevNotes) => [...prevNotes, note])
            // showSuccessMsg('Book saved!')
        })
            .catch((err) => {
                console.log('err = ', err)
                // showErrorMsg('Cancled')
            })
    }


    function onDuplicateNote(note) {
        note.id = ''
        noteService.save(note).then((note) => {
            setNotes((prevNotes) => [...prevNotes, note])
        })
    }


    function onChangeNoteColor({ target }, note) {
        let { value } = target
        note.style.backgroundColor = value
        noteService.save(note).then(() => {loadNotes()})
    }

    function onPinNote(note) {
        console.log('note = ', note)
       if (note.isPinned) note.isPinned = false
       else note.isPinned = true
        noteService.save(note).then(() => {loadNotes()})
    }


    function onSetFilter(filterBy) {
        setFilterBy(filterBy)
        
    }

    return <section className="note-index main-layout">

        <NoteAdd notes={notes} onSaveNote={onSaveNote} />

        {!notes && <h1>Loading Notes...</h1>}
        <NoteFilter onSetFilter={onSetFilter} />


        {notes && <NoteList notes={notes} onRemoveNote={onRemoveNote} onDuplicateNote={onDuplicateNote} onPinNote={onPinNote} onChangeNoteColor={onChangeNoteColor} />}


    </section>


}
