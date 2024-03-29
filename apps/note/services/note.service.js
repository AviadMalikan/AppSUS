import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/storage.service.js'
import { asyncStorageService } from '../../../services/async-storage.service.js'


const NOTE_KEY = 'notesDB'
_createNotes()

export const noteService = {
    query,
    get,
    getDefaultFilter,
    getEmptyNote,
    remove,
    save,
    createTodo
}

function createTodo(txt) {
    return {
        txt,
        isDone: false
    }
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
    return { txt: '', type: '' }
}


// function getEmptyNote(type) {
//     switch (type) {
//         case 'note-txt':
//             return {
//                 type: "note-txt",
//                 info: {
//                 txt: ''
//                 },
//                 style: {
                
//                 }
//             }

//         case 'note-img':
//             return {
//                 type: "note-img",
//                 info: {
//                     url: '',
//                     title: ''
//                 },
//                 style: {
                
//                 }
//             }

//         case 'note-vid':
//             return {
//                 type: "note-vid",
//                 info: {
//                     url: '',
//                     title: ''
//                 },
//                 style: {
                
//                 }
//             }
//     }
// }

function getEmptyNote(type) {
    return {
        type,
        isPinned: false,
        info: {
            
        },
        style: {
            backgroundColor: ''
        },
    }
}

function get(noteId) {
    return asyncStorageService.get(NOTE_KEY, noteId)
}

function remove(noteId) {
    return asyncStorageService.remove(NOTE_KEY, noteId)
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
                id: "n102",
                type: "note-img",
                isPinned: false,
                info: {
                    url: "https://miro.medium.com/max/1400/1*wygpuRlFHFxNtihw9WQv7Q.png",
                    title: "Life"
                },
                style: {
                  backgroundColor: "#f4a261"
                }
            },
            {
                id: "n103",
                type: "note-todos",
                isPinned: false,
                info: {
                    lable: "Get my stuff together", todos: [
                        { txt: "Driving liscence", isDone: true },
                        { txt: "Coding power", isDone: false }]
                },
                style: {
                    backgroundColor: "#cbc0d3"
                }
            },
            {
                id: "n108",
                type: "note-todos",
                isPinned: true,
                info: {
                    lable: "DONT FORGET", todos: [
                        { txt: "Visit Grandma", isDone: false },
                        { txt: "Shop groceries", isDone: true },
                        { txt: "Fold laundry", isDone: false }]
                },
                style: {
                    backgroundColor: "#2a9d8f"

                }
            },
            {
                id: "n105",
                type: "note-img",
                isPinned: false,
                info: {
                    url: "https://www.datocms-assets.com/45470/1631110818-logo-react-js.png?fm=webp",
                    title: "Over Reacting"
                },
                style: {
               
                }
            },
            {
                id: "n111",
                type: "note-txt",
                isPinned: false,
                info: {
                    txt: `“Whether we like it or not, we are always taking an active role in what’s occurring to and within us. We are always interpreting the meaning of every moment and every occurrence. We are always choosing the values by which we live and the metrics by which we measure everything that happens to us. Often the same event can be good or bad depending on the metric we choose to use”
                    ― Mark Manson. “The Subtle Art of Not Giving a F*ck“.`
                },
                style: {
                backgroundColor: "#e76f51"
                }
            },
            {
                id: "n110",
                type: "note-txt",
                isPinned: false,
                info: {
                    txt: "You code and you code and you code... and what you get? APPSUlutely nothing",
                },
                style: {
               
                }
            },
            {
                id: "n104",
                type: "note-vid",
                isPinned: false,
                info: {
                    url: "https://www.youtube.com/watch?v=Vn8phH0k5HI",
                    title: "Catch and Release"
                },
                style: {
                    backgroundColor: "#fcbf49"
                }
            },
            {
                id: "n101",
                type: "note-txt",
                isPinned: false,
                info: {
                    txt: "Fullstack Me Baby!"
                },
                style: {
                    backgroundColor: "#86bbd8"
                }
            },
            {
                id: "n112",
                type: "note-img",
                isPinned: true,
                info: {
                    url: "../img/miley.jpg",
                    title: "My Shih-tzu Miley"
                },
                style: {
                    backgroundColor: "#cfe1b9"
                }
            },
        ]
    }

    storageService.saveToStorage(NOTE_KEY, notes)
}