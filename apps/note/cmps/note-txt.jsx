export function NoteTxt({ note }) {
  return <div
    // contentEditable="true"
    className="note-txt">
    {note.info.txt}
  </div>
}