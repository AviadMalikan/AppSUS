const { useState, useEffect } = React

import { mailService } from "../services/mail.service.js";
import { MailList } from "../cmps/mail-list.jsx";
import { MailFilter } from "../cmps/mail-filter.jsx";
import { MailCompose } from "../cmps/mail-compose.jsx";

export function MailIndex() {
    const [mails, setMails] = useState([])
    const [filterBy, setFilterBy] = useState(mailService.getDefaultFilter)
    const [isMsgCmp, setIsMsgCmp] = useState(false)

    useEffect(() => {
        loadMails(filterBy)
    }, [])

    useEffect(() => {
        loadMails(filterBy)
    }, [filterBy])

    function loadMails() {
        mailService.query(filterBy)
            .then(mailsToUpload => {
                console.log('mailsToUpload: ', mailsToUpload)

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

    function onIsMsgCmp() {
        setIsMsgCmp(prevIsMsgCmp => setIsMsgCmp(!prevIsMsgCmp))
    }


    return <section className="main-content-container">

        <MailFilter onSetFilter={onSetFilter} />
        <section>
            
            <button onClick={onIsMsgCmp}>New Mail</button>
            {isMsgCmp && <MailCompose onIsMsgCmp={onIsMsgCmp} />}

            <MailList mails={mails}
                onRemoveMail={onRemoveMail} />
        </section>

    </section>
}

