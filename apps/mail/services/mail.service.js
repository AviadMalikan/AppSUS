import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'


const MAIL_KEY = 'mailDB'
_createMails()

export const mailService = {
    query,
    get,
    remove,
    save,
}

function query(filter = '') {
    return storageService.query(MAIL_KEY)
}

function get(mailId) {
    return storageService.get(MAIL_KEY, mailId)
}

function remove(mailId) {
    return storageService.remove(MAIL_KEY, mailId)
}

function save(mail) {
    if (mail.id) {
        return storageService.put(MAIL_KEY, mails)
    } else {
        return storageService.post(MAIL_KEY, mails)
    }
}

function _createMails() {
    let mails = utilService.loadFromStorage(MAIL_KEY)
    if (!mails || !mails.length) {
        mails = [
            {
                id: 'e101',
                subject: 'Miss you!',
                body: 'Would love to catch up sometimes', isRead: false,
                sentAt: 1551133930594,
                to: 'momo@momo.com'
            },
            {
                id: 'e102',
                subject: 'Miss you!',
                body: 'Would love to catch up sometimes', isRead: false,
                sentAt: 1551133930594,
                to: 'momo@momo.com'
            },
        ]
    }
    utilService.saveToStorage(MAIL_KEY, mails)
}

const emails = [
    {
        id: 'e101',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes', isRead: false,
        sentAt: 1551133930594,
        to: 'momo@momo.com'
    },
    {
        id: 'e101',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes', isRead: false,
        sentAt: 1551133930594,
        to: 'momo@momo.com'
    },
]

const loggedUser = {
    email: 'user@appsus.com', fullname: 'Mahatma Appsus'
}