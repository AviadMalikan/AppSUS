const { useState, useEffect } = React

import { mailService } from "../services/mail.service.js";
import { MailList } from "../cmps/mail-list.jsx";
import { MailFilter } from "../cmps/mail-filter.jsx";

export function MailIndex() {
    const [mails, setMails] = useState([])

    useEffect(() => {
        loadMails()
    }, [])

    function loadMails() {
        mailService.query()
            .then(setMails)
    }


    return <section>

        <MailFilter />
        <MailList mails={mails} />

    </section>
}

