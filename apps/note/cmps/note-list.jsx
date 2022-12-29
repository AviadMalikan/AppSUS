import { DynamicCmp } from "./dynamic-cmp.jsx"
import { noteService } from '../services/note.service.js';
import { utilService } from "../../../services/util.service.js";

export function NoteList({ notes, onRemoveNote, onDuplicateNote}) {


    function onChangeNoteColor({ target }, noteId) {
        let { value } = target
        noteService.get(noteId)
            .then((note) => {
                note.style.backgroundColor = value
                noteService.save(note)
            })
    }


    return <section className="note-list">

        {notes.map(note => <div style={{ backgroundColor: note.style.backgroundColor }} className="note" key={note.id}>
            <DynamicCmp type={note.type} note={note} />

            <section className="note-edit-btns">
                <button className="fa color-btn btn">
                    <input value="#e9c46a" type="color" list="colors" name="colors" className="color-input" onChange={() => onChangeNoteColor(event, note.id)} />
                    <datalist id="colors">
                        <option value="#e76f51" />
                        <option value="#f4a261" />
                        <option value="#2a9d8f" />
                        <option value="#cfe1b9" />
                        <option value="#264653" />
                        <option value="#606c38" />
                        <option value="#ffb4a2" />
                        <option value="#cbc0d3" />
                        <option value="#fcbf49" />
                        <option value="#86bbd8" />
                    </datalist>
                </button>
                <button title="Delete" className="fa remove-btn btn" onClick={() => onRemoveNote(note.id)}></button>
                <button title="Duplicate" className="fa duplicate-btn btn" onClick={() => onDuplicateNote(note)} ></button>
            </section>
        </div>
        )
        }

    </section >
}
