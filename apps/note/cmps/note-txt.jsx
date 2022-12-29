import { noteService } from '../services/note.service.js';

export function NoteTxt({ note }) {
  
  function onSaveTxtNote(newTxt) {
    note.info.txt = newTxt
    noteService.save(note)
  }


  return <div className="note-txt" contentEditable="true" onInput={e => onSaveTxtNote(e.currentTarget.textContent)} suppressContentEditableWarning={true} >
    {note.info.txt}
  </div>
}