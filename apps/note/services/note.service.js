import { utilService} from '../../../services/util.service.js'
import { storageService } from '../../../services/storage.service.js'
import { asyncStorageService } from '../../../services/async-storage.service.js'


const NOTE_KEY = 'notesDB'
_createNotes()

export const noteService = {
    query,
//     get,
//     remove,
//     save,
}


function query() {
    return asyncStorageService.query(NOTE_KEY)
    .then((notes) => {
        console.log('notes = ', notes)
        return notes
    })
}

function get(noteId) {
    return storageService.get(NOTE_KEY, noteId)
}







    function _createNotes() {
    
        let notes = storageService.loadFromStorage(NOTE_KEY)
    
        if (!notes || !notes.length) {
            notes = [
                {
                    id: "n101",
                    type: "note-txt",
                    isPinned: true,
                    info: {
                        txt: "Fullstack Me Baby!"
                    }
                },
                {
                    id: "n103",
                    type: "note-todos",
                    info: {
                        lable: "Get my stuff together", todos: [
                            { txt: "Driving liscence", doneAt: null },
                            { txt: "Coding power", doneAt: 187111111 }]
                    }
                },
                {
                    id: "n102",
                    type: "note-img",
                    info: {
                        url: "../../assets/img/fiat.jpg",
                        title: "Bobi and Me"
                    },
                    style: {
                        backgroundColor: "#00d"
                    }
                }
            ]
        }
    
        storageService.saveToStorage(NOTE_KEY, notes)
    }