import { DynamicCmp } from "./dynamic-cmp.jsx"

export function NoteList({ notes, onRemoveNote }) {


    return <section className="note-list">

        {notes.map(note => <div className="note" key={note.id}>
            <DynamicCmp type={note.type} note={note}/>

            <button className="fa remove-btn btn" onClick={() => onRemoveNote(note.id)}></button> 

        </div>
        )}

    </section>
}
