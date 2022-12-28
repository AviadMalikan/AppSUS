import { utilService } from '../../../services/util.service.js'
import { asyncStorageService } from '../../../services/async-storage.service.js'


const MAIL_KEY = 'mailDB'
_createMails()

export const mailService = {
    query,
    get,
    remove,
    save,
    getDefaultFilter,
}

function query(filterBy = getDefaultFilter()) {
    return asyncStorageService.query(MAIL_KEY)
        .then((mails) => {
            if (filterBy.txt) {
                const regex = new RegExp(filterBy.txt, 'i')
                mails = mails.filter(mail => regex.test(mail.body))
            }
            // if (filterBy.isRead) {
            //     mails = mails.filter(mail => mail.isRead)
            // }
            return mails
        })
}

function get(mailId) {
    return asyncStorageService.get(MAIL_KEY, mailId)
}

function remove(mailId) {
    return asyncStorageService.remove(MAIL_KEY, mailId)
}

function getDefaultFilter() {
    return { txt: '', isRead: '' }
}

function save(mail) {
    if (mail.id) {
        return asyncStorageService.put(MAIL_KEY, mails)
    } else {
        return asyncStorageService.post(MAIL_KEY, mails)
    }
}

function _createMails() {
    let mails = utilService.loadFromStorage(MAIL_KEY)
    if (!mails || !mails.length) {
        mails = [
            {
                id: 'e101',
                subject: 'Miss you!',
                body: 'Would love to catch up sometimes',
                isRead: false,
                sentAt: 1551133930594,
                to: 'momo@momo.com'
            },
            {
                id: 'e102',
                subject: 'Your Shopping Cart Is Waiting For You!',
                body: ` The Biggest F’N Sale Is LIVE! Get 50% Off Everything In Your Order NOW!
                Your Shopping Cart Is Waiting For You
                CHECK OUT NOW`,
                isRead: false,
                sentAt: 1551133930594,
                to: 'momo@momo.com'
            },
            {
                id: 'e103',
                subject: 'Email verification required',
                body: `Thanks for signing up to The Movie Database (TMDB). Before we can continue, we need to validate your email address.`,
                isRead: true,
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