const { useState, useEffect } = React

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
        console.log('loading');
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
            })
            .catch((err) => {
                console.log('Had issues removing', err)
            })
    }

    function onSaveNote(ev, newNote) {
        ev.preventDefault()
        console.log('newNote = ', newNote)
        noteService.save(newNote).then((note) => {
            setNotes((prevNotes) => [...prevNotes, note])
        })
            .catch((err) => {
                console.log('err = ', err)
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

    function onIsDone(note, todo) {
        if (todo.isDone) todo.isDone = false
        else todo.isDone = true
        noteService.save(note).then(() => {loadNotes()})
    }

    function onSendNoteAsEmail(note) {
        console.log('note = ', note)
    }

    function onSetFilter(filterBy) {
        setFilterBy(filterBy) 
    }

    return <section className="note-index main-layout">

        <NoteAdd notes={notes} onSaveNote={onSaveNote} />

        {!notes && <h1>Loading Notes...</h1>}
        <NoteFilter onSetFilter={onSetFilter} />


        {notes && <NoteList notes={notes} onRemoveNote={onRemoveNote} onDuplicateNote={onDuplicateNote} onPinNote={onPinNote} onChangeNoteColor={onChangeNoteColor} onIsDone={onIsDone} onSendNoteAsEmail={onSendNoteAsEmail}/>}


    </section>


}
