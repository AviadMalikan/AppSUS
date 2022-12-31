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
                id: 'e111',
                subject: `long time no see`,
                body: `your eye test is ready call to get the result.`,
                isRead: true,
                sentAt: 1551133903030,
                from: 'seemore@seemore.com',
                to: 'user@appsus.com'
            },
            {
                id: 'e112',
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
                id: 'e113',
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
                id: 'e114',
                subject: `Welcome to TMDB!`,
                body: `aviad_malikan, welcome to TMDB!
                Thanks for registering an account on The Movie Database (TMDB). We're excited to see you join the community! As a member of TMDB, you get access to things like maintaining your watchlist, creating custom lists, rate your recently watched movies and TV shows as well as contribute reviews and discussions.
                
                The best thing about TMDB is our incredible community. All of the data that's been added to our database has been contributed by users like you. If you have any interest in helping we recommend taking a read through our contribution bible.
                
                Take some time to look around and if you have any questions, feel free to stop by the forums.
                `,
                isRead: true,
                sentAt: 1551133902024,
                from: 'no-reply@themoviedb.org',
                to: 'user@appsus.com'
            },
            {
                id: 'e115',
                subject: `Welcome to deviantART!`,
                body: `,
 
                You have just joined the world's largest community of artists and art appreciators. We're glad to have you! Before you get started, please verify your email so that we know you're a real human`,
                isRead: true,
                sentAt: 1551133902024,
                from: 'no-reply@daviArt.org',
                to: 'user@appsus.com'
            },
            {
                id: 'e116',
                subject: `We’ve updated our Terms of Use`,
                body: ` 
                Hi aviad_malikan,
                We wanted to let you know that we’re making a few updates to our Terms of Use to make them clearer. We’re making it easier to understand what is allowed on Instagram and how our service works. These terms will be effective on December 20, 2020, and continuing to use the app will mean you accept them.`,
                isRead: true,
                sentAt: 1551133902024,
                from: 'no-reply@mail.instagram.com',
                to: 'user@appsus.com'
            },
            {
                id: 'e117',
                subject: `We’ve updated our Terms of Use`,
                body: `Hey Instagram i dont care`,
                isRead: true,
                sentAt: 1551133902024,
                from: 'user@appsus.com',
                to: 'no-reply@mail.instagram.com'
            },
            {
                id: 'e118',
                subject: `Ola TO you`,
                body: ` 
                Hi lihi this is ,
                We wanted to let you know that we’re making a few updates to our Terms of Use to make them clearer. We’re making it easier to understand what is allowed on Instagram and how our service works. These terms will be effective on December 20, 2020, and continuing to use the app will mean you accept them.`,
                isRead: true,
                sentAt: 1551133902024,
                from: 'user@appsus.com',
                to: 'no-reply@mail.instagram.com'
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

