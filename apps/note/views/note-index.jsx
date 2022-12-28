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
                console.log('notes = ', notes)
            })
    }


    function onSetFilter(filterBy) {
        setFilterBy(filterBy)
    }

    return <section className="note-index">

        {!notes && <h1>Loading Notes...</h1>}
        <NoteFilter onSetFilter={onSetFilter} />

       <Link to="/note/add">Add Note</Link>

        {notes && <NoteList notes={notes} />}

        <div className="nested-route">
            <Outlet />
        </div>

    </section>


}
