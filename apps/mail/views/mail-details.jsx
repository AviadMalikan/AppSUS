const { useState, useEffect, Fragment } = React
const { useParams, useNavigate, } = ReactRouterDOM

import { mailService } from "../services/mail.service.js";
import { MailCompose } from "../cmps/mail-compose.jsx";
import { utilService } from '../../../services/util.service.js'


export function MailDetail() {
    const [mail, setMail] = useState('')
    const [isComposeShow, setIsComposeShow] = useState(false)
    const [isBigCompose, setIsBigCompose] = useState(false)

    const params = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        loadMail()
    }, [])

    useEffect(() => {
        setMailRead()
    }, [mail])

    function loadMail() {
        mailService.get(params.mailId)
            .then(setMail)
    }

    function onIsMsgCmp() {
        setIsComposeShow(prevIsMsgCmp => setIsComposeShow(!prevIsMsgCmp))
    }
    function onIsComposeBig() {
        setIsBigCompose(prevIsBigCompose => !prevIsBigCompose)
    }

    function setMailRead() {
        mailService.get(params.mailId)
            .then((mail) => {
                mail.isRead = true
                return mail
            })
            .then(mailService.save)
    }

    function onRemoveMail(mailId) {
        mailService.remove(mailId)
        mailService.query().then(console.log)
        navigate('/mail')
    }


    if (!mail) return <h1>Loading</h1>
    return <section className="mail-container">
        {(isBigCompose && isComposeShow) && <div className="main-screen hover" onClick={onIsMsgCmp}></div>}

        <article className="header-container">
            <span className="fa fa-arrow-left hover" onClick={() => navigate("/mail")}></span>
            <div className="utils-container">
                <span className="hover fa fa-favorite"></span>
                <span onClick={() => onRemoveMail(mail.id)} className="hover fa fa-trash"></span>
                <span onClick={onIsMsgCmp} className="fa fa-replay hover"></span>
            </div>
        </article>
        <div className="title">
            <div className="details">
                <h2>{mail.subject}</h2>
                <h5>{`<from ${mail.from}>`}</h5>
            </div>

            <h5>{utilService.getTimeFormat(mail.sentAt)}</h5>
        </div>

        {isComposeShow &&
            <MailCompose 
            onIsComposeBig={onIsComposeBig}
            isBigCompose={isBigCompose}
            onIsMsgCmp={onIsMsgCmp} mail={mail} />}

        <h3 className="body">{mail.body}</h3>

    </section>
}