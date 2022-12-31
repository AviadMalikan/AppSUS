import { DynamicCmp } from "./dynamic-cmp.jsx"
import { NoteEdit } from "./note-edit.jsx"


export function NoteList({ notes, onRemoveNote, onDuplicateNote, onPinNote, onChangeNoteColor, onIsDone, onSendNoteAsEmail }) {

    return <section className="note-list">


        {notes.map(note => note.isPinned && <div style={{ backgroundColor: note.style.backgroundColor }} className="note" key={note.id}>
     

            <DynamicCmp type={note.type} note={note} onIsDone={onIsDone}/> 
            <NoteEdit note={note} onRemoveNote={onRemoveNote} onDuplicateNote={onDuplicateNote} onPinNote={onPinNote} onChangeNoteColor={onChangeNoteColor} onSendNoteAsEmail={onSendNoteAsEmail}/>
            
        </div>
        )}
        <hr />

        {notes.map(note => !note.isPinned && <div style={{ backgroundColor: note.style.backgroundColor }} className="note" key={note.id}>
     

            <DynamicCmp type={note.type} note={note} onIsDone={onIsDone}/>
            <NoteEdit note={note} onRemoveNote={onRemoveNote} onDuplicateNote={onDuplicateNote} onPinNote={onPinNote} onChangeNoteColor={onChangeNoteColor} onSendNoteAsEmail={onSendNoteAsEmail}/>
         
        </div>
        )
        }

    </section >
}
