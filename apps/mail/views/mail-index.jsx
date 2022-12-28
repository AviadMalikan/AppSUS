const { useState, useEffect } = React

import { mailService } from "../services/mail.service.js";
import { MailList } from "../cmps/mail-list.jsx";
import { MailFilter } from "../cmps/mail-filter.jsx";

export function MailIndex() {
    const [mails, setMails] = useState([])
    const [filterBy, setFilterBy] = useState('')

    useEffect(() => {
        loadMails()
    }, [])

    function loadMails() {
        mailService.query(filterBy)
            .then(setMails)
    }

    function onSetFilter(filterByFromFilter) {
        // setFilterBy(filterByFromFilter)
        console.log('hello from filter')

    }

    return <section>

        <MailFilter />
        <MailList mails={mails} onSetFilter={onSetFilter} />

    </section>
}

