export function NoteImg({note}) {
    return <div style={{backgroundColor: note.style.backgroundColor}} className="note-img">
        <h4>{note.info.title}</h4>
        <img className="img" src={note.info.url} alt="" />
    </div>
}