import { DynamicCmp } from "./dynamic-cmp.jsx"

export function NoteList({ notes }) {


    return <section className="note-list">

        {notes.map(note => <div className="note main-layout" key={note.id}>
            <DynamicCmp type={note.type} note={note}/>
        </div>
        )}
    </section>
}
