export function NoteTxt({note}) {
    console.log(' heello')
    return <div contentEditable="true" className="note-txt">
        {note.info.txt}
    </div>
}