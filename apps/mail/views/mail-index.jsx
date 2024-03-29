const { useState, useEffect, Fragment } = React

import { mailService } from "../services/mail.service.js";
import { MailList } from "../cmps/mail-list.jsx";
import { MailFilter } from "../cmps/mail-filter.jsx";
import { MailCompose } from "../cmps/mail-compose.jsx";
import { MailFolderList } from "../cmps/mail-folder-list.jsx";

export function MailIndex() {
    const [mails, setMails] = useState([])
    const [filterBy, setFilterBy] = useState(mailService.getDefaultFilter)
    const [isComposeShow, setIsComposeShow] = useState(false)
    const [isBigCompose, setIsBigCompose] = useState(false)

    useEffect(() => {
        loadMails()
    }, [])

    useEffect(() => {
        loadMails()
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

    function onSubmitEmail(ev, newEmail) {
        ev.preventDefault()
        mailService.save(newEmail)
            .then(mail => {
                setMails(prevMails => [...mails, mail])
            })
            .catch(console.log)
    }

    function onIsMsgCmp() {
        setIsComposeShow(prevIsMsgCmp => setIsComposeShow(!prevIsMsgCmp))
    }

    function onIsComposeBig() {
        setIsBigCompose(prevIsBigCompose => !prevIsBigCompose)
    }

    return <Fragment>
        {(isBigCompose && isComposeShow) && <div className="main-screen hover" onClick={onIsMsgCmp}></div>}
        <MailFilter onSetFilter={onSetFilter} />

        {!isComposeShow && <button onClick={onIsMsgCmp} className="fa fa-add new-mail-btn"></button>}
        {isComposeShow &&
            <MailCompose
                onSubmitEmail={onSubmitEmail}
                onIsMsgCmp={onIsMsgCmp}
                onIsComposeBig={onIsComposeBig}
                isBigCompose={isBigCompose} />}

        <section className="main-content-container flex">

            <MailFolderList onSetFilter={onSetFilter} />

            <MailList mails={mails}
                onRemoveMail={onRemoveMail}
                onIsRead={onIsRead} />
        </section>

    </Fragment >
}

