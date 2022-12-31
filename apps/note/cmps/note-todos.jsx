import { noteService } from '../services/note.service.js';

export function NoteTodos({ note, onIsDone, donne }) {
   const todos = note.info.todos
   function onSaveTodosNote(lable) {
    note.info.lable = lable
    noteService.save(note)
  }


    return <div className="note-todos" style={{ backgroundColor: note.style.backgroundColor }}>
        <h4 contentEditable="true" onInput={e => onSaveTodosNote(e.currentTarget.textContent)} suppressContentEditableWarning={true}>{note.info.lable ? note.info.lable : 'Add Title'}</h4>
        <ul>
            {todos.map((todo, idx) => <li className={(todo.isDone ? 'done' : '')} onClick={() => onIsDone(note, todo)} key={idx}>
                {todo.txt}
            </li>
            )}
        </ul>

    </div>
}