const { useState, useEffect } = React
const { useParams, useNavigate } = ReactRouterDOM

import { mailService } from "../services/mail.service.js";
import { MailCompose } from "../cmps/mail-compose.jsx";


export function MailDetail() {
    const [mail, setMail] = useState('')
    const [isComposeShow, setIsComposeShow] = useState(false)

    const params = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        loadMail()
    }, [])



    function loadMail() {
        mailService.get(params.mailId)
            .then(setMail)
    }

    function onIsMsgCmp() {
        setIsComposeShow(prevIsMsgCmp => setIsComposeShow(!prevIsMsgCmp))
    }

    function getTimeFormat(timeStamp) {
        const date = new Date(timeStamp)
        const timeFormat = date.getHours() + ":"
            + date.getMinutes() + ", "
            + date.toDateString();

        return timeFormat
    }


    if (!mail) return <h1>Loading...</h1>
        return <section>
            <button onClick={() => navigate("/mail")}>←</button>
            <h2>{mail.subject}</h2>

            <h5>{getTimeFormat(mail.sentAt)}</h5>
            <h5>sent to: {mail.to}</h5>
            {isComposeShow &&
                <MailCompose
                    onIsMsgCmp={onIsMsgCmp} />}

            <h3>{mail.body}</h3>

            <button onClick={onIsMsgCmp}>Replay</button>
        </section>
}