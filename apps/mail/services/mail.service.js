import { utilService } from '../../../services/util.service.js'
import { asyncStorageService } from '../../../services/async-storage.service.js'


const MAIL_KEY = 'mailDB'
_createMails()
const loggedUser = {
    email: 'user@appsus.com',
    fullName: 'Mahatma Appsus'
}

export const mailService = {
    query,
    get,
    remove,
    save,
    getDefaultFilter,
    getEmptyMail,
}

function query(filterBy = getDefaultFilter()) {

    return asyncStorageService.query(MAIL_KEY)
        .then((mails) => {
            if (filterBy.txt) {
                const regex = new RegExp(filterBy.txt, 'i')
                mails = mails.filter(mail => regex.test(mail.body))
            }
            if (filterBy.to) {
                mails = mails.filter(mail => mail.to === filterBy.to)
            }
            if (filterBy.from) {
                mails = mails.filter(mail => mail.from === filterBy.from)
            }
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
    return {
        txt: '', isRead: '',
        to: loggedUser.email,
        from: '',
    }
}

function getEmptyMail() {
    return {
        subject: '', body: '', to: '',
        sentAt: getCurrentTime(),
        from: loggedUser.email,
    }
}


function save(mail) {
    if (mail.id) {
        return asyncStorageService.put(MAIL_KEY, mail)
    } else {
        return asyncStorageService.post(MAIL_KEY, mail)
    }
}

function getCurrentTime() {
    return Date.now()
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
                from: 'noga@momo.com',
                to: 'user@appsus.com'
            },
            {
                id: 'e102',
                subject: 'Your Shopping Cart Is Waiting For You!',
                body: ` The Biggest F’N Sale Is LIVE! Get 50% Off Everything In Your Order NOW!
                Your Shopping Cart Is Waiting For You
                CHECK OUT NOW`,
                isRead: false,
                sentAt: 1551133930594,
                from: 'YaronBiton@Gmail.com',
                to: 'user@appsus.com'
            },
            {
                id: 'e103',
                subject: 'Email verification required',
                body: `Thanks for signing up to The Movie Database (TMDB). Before we can continue, we need to validate your email address.`,
                isRead: true,
                sentAt: 1551133930594,
                from: 'momo@momo.com',
                to: 'user@appsus.com'
            },
            {
                id: 'e104',
                subject: 'Email verification required',
                body: `Thanks for signing up to The Movie Database (TMDB). Before we can continue, we need to validate your email address.`,
                isRead: false,
                sentAt: 1551133930594,
                from: 'momo@momo.com',
                to: 'user@appsus.com'
            },
            {
                id: 'e105',
                subject: 'Great Proj!',
                body: `Looking good very good, i would love to work with you i need that you develop for me a google food service site.`,
                isRead: false,
                sentAt: 1551133902024,
                from: 'google.maneger@momo.com',
                to: 'user@appsus.com'
            },
            {
                id: 'e106',
                subject: `CHECK-IN FROM THE COMFORT OF YOUR HOME`,
                body: `Thank you for your reservation. We appreciate that you have chosen Pytloun Boutique Hotel Prague**** for your stay in our beautiful city!`,
                isRead: false,
                sentAt: 1551133902024,
                from: 'booking@booking.com',
                to: 'user@appsus.com'
            },
            {
                id: 'e107',
                subject: `IMPORTANT INFORMATION REGARDING YOUR FLIGHT`,
                body: `Dear Customer,During your upcoming flight, we will provide you with an entertainment system with a variety of options via the Dream Stream App.`,
                isRead: true,
                sentAt: 1551133902024,
                from: 'elal-serviceg@elal.com',
                to: 'user@appsus.com'
            },
            {
                id: 'e108',
                subject: `Update regarding seat change on your flight`,
                body: `Dear Customer,
                Due to aircraft change on your flight , your seat has been changed.
                We apologize for the inconvenience.
                We look forward to welcoming you aboard.	
                EL AL Customer and Service Center.`,
                isRead: true,
                sentAt: 1551133902024,
                from: 'elal-serviceg@elal.com',
                to: 'user@appsus.com'
            },
            {
                id: 'e109',
                subject: `Your Amazon.com order #233-1234567-1234567`,
                body: `Hello Aviad,Thank you for shopping with us. We’ll send a confirmation when your item ships.
                Details:
                Order #113-9321815-0184219
                Arriving:
                January 16
                We hope to see you again soon.`,
                isRead: true,
                sentAt: 1551133902024,
                from: 'Amazon@amazon.com',
                to: 'user@appsus.com'
            },
            {
                id: 'e110',
                subject: `long time no see`,
                body: `your eye test is ready call to get the result.`,
                isRead: true,
                sentAt: 1551133903030,
                from: 'seemore@seemore.com',
                to: 'user@appsus.com'
            },
            {
                id: 'e111',
                subject: `long time no see`,
                body: `your eye test is ready call to get the result.`,
                isRead: true,
                sentAt: 1551133903030,
                from: 'seemore@seemore.com',
                to: 'user@appsus.com'
            },

        ]
    }
    utilService.saveToStorage(MAIL_KEY, mails)
}


// const emails = [
//     {
//         id: 'e101',
//         subject: 'Miss you!',
//         body: 'Would love to catch up sometimes', isRead: false,
//         sentAt: 1551133930594,
//         to: 'momo@momo.com'
//     },
//     {
//         id: 'e101',
//         subject: 'Miss you!',
//         body: 'Would love to catch up sometimes', isRead: false,
//         sentAt: 1551133930594,
//         to: 'momo@momo.com'
//     },
// ]

