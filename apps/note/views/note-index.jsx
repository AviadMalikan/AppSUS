const { useState, useEffect } = React
const { Link } = ReactRouterDOM

import {noteService} from '../services/note.service.js';
import { NoteList } from '../cmps/note-list.jsx';

export function NoteIndex() {
    const [notes, setNotes] = useState(null)

    useEffect(() => {
        loadNotes()
    }, [])

    function loadNotes() {
        noteService.query()
            .then(notesToDisplay => {
                setNotes(notesToDisplay)
                console.log('notes from dom = ', notesToDisplay)
            })
    }


    return <section className="note-index">
        
        {!notes && <h1>Loading Notes...</h1>}

        {notes && <NoteList notes={notes} />}



    </section> 


}
