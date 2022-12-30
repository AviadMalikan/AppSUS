export function NoteTodos({ note, onIsDone, donne }) {
   const todos = note.info.todos

    return <div className="note-todos" style={{ backgroundColor: note.style.backgroundColor }}>
        <h4>{note.info.lable}</h4>
        <ul>
            {todos.map((todo, idx) => <li className={(todo.isDone ? 'done' : '')} onClick={() => onIsDone(note, todo)} key={idx}>
                {todo.txt}
            </li>
            )}
        </ul>

    </div>
}