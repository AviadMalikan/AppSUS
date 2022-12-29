const { Fragment, useState } = React
const { Link } = ReactRouterDOM

import { LongTxt } from '../../../cmps/long-txt.jsx'
import { utilService } from '../../../services/util.service.js'

export function MailPreview({ mail, onRemoveMail, onIsRead }) {
    const [isTextShown, setIsTextShown] = useState(false)

    function getTime(timeStamp) {
        return utilService.getDayName(timeStamp)
    }

    function getLength() {
        let width = document.body.clientWidth
        // console.log('width: ', width)
        let Divide = 30
        if (width > 1300) Divide = 10
        return width / Divide
    }

    function showMail(mail) {
        console.log('mail: ', mail)
    }

    function onTextShown() {
        setIsTextShown(prevTextShown => !prevTextShown)
    }

    return <Fragment>

        {!isTextShown && <tr onClick={onTextShown}
            className={`mail-card flex ${mail.isRead ? 'msg-read' : ''}`} >

            {/* <td onClick={() => showMail(mail)}>CLICK TO SEE</td> */}
            <td><span className="hover">⭐</span></td>
            <td className="title"> {mail.subject}</td>
            <td className="sub-title">
                <LongTxt txt={mail.body} userLength={getLength()} />
            </td>
            <td className="time">
                {getTime(mail.sentAt)}
            </td>
            <td onClick={() => { }}>
                <span onClick={() => onIsRead(mail.id)}
                    className={`hover fa ${mail.isRead ? 'fa-seen' : 'fa-unseen'}`}></span>
            </td>
            <td>
                <Link to={`/mail/${mail.id}`}>
                    open
                </Link>
            </td>
            <td >
                <span onClick={() => onRemoveMail(mail.id)} className="hover fa fa-trash"></span>
            </td>
        </tr>}

        {isTextShown && <tr onClick={onTextShown}
            className="mail-card-open" >
            <td><h2>{mail.subject}</h2></td>
            <td><h5>{mail.from}</h5></td>
            <td><span>from: {mail.body}</span></td>
        </tr>}

    </Fragment>


}
//     return <Fragment>
//         <td onClick={() => showMail(mail)}>CLICK TO SEE</td>
//         <td><span className="hover">⭐</span></td>
//         <td className="title"> {mail.subject}</td>
//         <td className="content">
//             <LongTxt txt={mail.body} length={getLength()} />
//         </td>
//         <td className="time"> at.
//             {getTime(mail.sentAt)}</td>
//     </Fragment>
// }