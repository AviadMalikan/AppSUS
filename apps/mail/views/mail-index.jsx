const { useState, useEffect } = React

import { mailService } from "../services/mail.service.js";
import { MailList } from "../cmps/mail-list.jsx";
import { MailFilter } from "../cmps/mail-filter.jsx";
import { MailCompose } from "../cmps/mail-compose.jsx";

export function MailIndex() {
    const [mails, setMails] = useState([])
    const [filterBy, setFilterBy] = useState(mailService.getDefaultFilter)
    const [isComposeShow, setIsComposeShow] = useState(false)

    useEffect(() => {
        loadMails(filterBy)
    }, [])

    useEffect(() => {
        loadMails(filterBy)
    }, [filterBy])

    function loadMails() {
        mailService.query(filterBy)
            .then(mailsToUpload => {
                setMails(mailsToUpload)
            })
    }

    function onSetFilter(filterByFromFilter) {
        setFilterBy(filterByFromFilter)
    }

    function onRemoveMail(mailId) {
        mailService.remove(mailId)
            .then(() => {
                const updateMails = mails.filter(mail => mail.id !== mailId)
                setMails(updateMails)
            })
    }

    function onIsRead(mailId) {
        mailService.get(mailId)
            .then(mail => {
                mail.isRead = !mail.isRead
                mailService.save(mail)
            })
    }

    function onIsMsgCmp() {
        setIsComposeShow(prevIsMsgCmp => setIsComposeShow(!prevIsMsgCmp))
    }


    return <section className="main-layout">

        <MailFilter onSetFilter={onSetFilter} />
        <section className="main-content-container">

            {!isComposeShow && <button onClick={onIsMsgCmp} className="fa fa-add new-mail-btn"></button>}
            {isComposeShow && <MailCompose onIsMsgCmp={onIsMsgCmp} />}

            <MailList mails={mails}
                onRemoveMail={onRemoveMail}
                onIsRead={onIsRead} />
        </section>

    </section >
}

