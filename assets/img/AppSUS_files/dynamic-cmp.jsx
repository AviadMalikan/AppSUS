import {NoteTxt} from '../cmps/note-txt.jsx';
import {NoteImg} from '../cmps/note-img.jsx';
import {NoteTodos} from '../cmps/note-todos.jsx';
import { NoteVideo } from './note-video.jsx';

export function DynamicCmp({type, note}) {


    function getNoteType(type){
        switch(type) {
            case "note-txt":
                return <NoteTxt note={note}/>

            case "note-img":
                return <NoteImg note={note}/>

            case "note-todos":
                return <NoteTodos note={note}/>

            case "note-vid":
                return <NoteVideo note={note}/>
        }
    }
    return (
        <section >
            {getNoteType(type)}
        </section>
    )
}