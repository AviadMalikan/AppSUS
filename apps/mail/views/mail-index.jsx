const { useState, useEffect } = React

import { mailService } from "../services/mail.service.js";
import { MailList } from "../cmps/mail-list.jsx";
import { MailFilter } from "../cmps/mail-filter.jsx";

export function MailIndex() {
    const [mails, setMails] = useState([])
    const [filterBy, setFilterBy] = useState(mailService.getDefaultFilter)


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

    return <section>

        <MailFilter onSetFilter={onSetFilter} />
        <MailList mails={mails} />

    </section>
}

