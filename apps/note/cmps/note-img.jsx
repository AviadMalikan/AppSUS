import { noteService } from '../services/note.service.js';

export function NoteImg({note}) {

    function onSaveNoteLable(newTxt) {
        note.info.title = newTxt
        noteService.save(note)
      }

    return <div className="note-img" > 
        <h4 contentEditable="true" onInput={e => onSaveNoteLable(e.currentTarget.textContent)} suppressContentEditableWarning={true}>{note.info.title ? note.info.title : 'Add Title'}</h4>
        <img className="img" src={note.info.url} alt="" />
    </div>
}