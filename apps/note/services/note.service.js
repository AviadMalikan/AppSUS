import { utilService} from '../../../services/util.service.js'
import { storageService } from '../../../services/storage.service.js'
import { asyncStorageService } from '../../../services/async-storage.service.js'


const NOTE_KEY = 'notesDB'
_createNotes()

export const noteService = {
    query,
    get,
    getDefaultFilter,
    // getEmptyNote,
//     remove,
    save
}


function query(filterBy = getDefaultFilter()) {
    return asyncStorageService.query(NOTE_KEY)
    .then((notes) => {
        if (filterBy.type) {
            notes = notes.filter(note => note.type === filterBy.type)
        }
        if (filterBy.txt) {
            const regex = new RegExp(filterBy.txt, 'i')
            notes = notes.filter(note => regex.test(note.info.txt || note.info.lable || note.info.title))
          }

        return notes
    })
}

function getDefaultFilter() {
    return {txt: '', type: ''}
}

function getEmptyTextNote(txt = '') {
return {
    type: "note-txt",
    info: {
        txt
    }
}
}

// function getEmptyImageNote(url = '', title = '') {
//    return {
//         type: "note-img",
//         info: {
//             url,
//             title
//         }
//     }
// }

// function getEmptyTodosNote(lable = '', txt) {
//     return {
//         type: "note-todos",
//         info: {
//             lable, todos:
//             [
//                 { txt: "Driving liscence", doneAt: null },
//                 { txt: "Coding power", doneAt: 187111111 }
//             ]
//         }
//     }
// }

function get(noteId) {
    return asyncStorageService.get(NOTE_KEY, noteId)
}

function save(note) {
    if (note.id) {
      return asyncStorageService.put(NOTE_KEY, note)
    } else {
      return asyncStorageService.post(NOTE_KEY, note)
    }
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