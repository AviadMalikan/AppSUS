export function NoteVideo({ note }) {
    console.log('note = ', note)
    return <div className="note">


        <iframe src={note.info.url} height="200" width="300" title="Iframe Example"></iframe>

    </div>
}