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
        let Divide = 30
        if (width > 1300) Divide = 10
        else if (width > 900) Divide = 20
        return width / Divide
    }

    function onTextShown() {
        setIsTextShown(prevTextShown => !prevTextShown)
    }


    return <Fragment>

        {!isTextShown && <tr className={`mail-card flex ${mail.isRead ? 'msg-read' : ''}`} >

            <td></td>
            <td className="title hover" onClick={onTextShown}>
                <LongTxt txt={mail.subject} userLength={25} />
            </td>

            <td className="sub-title hover" onClick={onTextShown}>
                <LongTxt txt={mail.body} userLength={getLength()} />
            </td>
            <td>
                <div className="utils-container">

                    <span className="time">{getTime(mail.sentAt)}</span>

                    <span onClick={() => onIsRead(mail.id)}
                        className={`hover fa ${mail.isRead ? 'fa-seen' : 'fa-unseen'}`}></span>

                    <span className="hover fa fa-favorite">fav</span>

                    <span className=""><Link to={`/mail/${mail.id}`}>open</Link></span>

                    <span onClick={() => onRemoveMail(mail.id)} className="hover fa fa-trash"></span>

                </div>
            </td>

            {/* <td className="time">{getTime(mail.sentAt)} </td>
            <td onClick={() => { }}>
                <span onClick={() => onIsRead(mail.id)}
                    className={`hover fa ${mail.isRead ? 'fa-seen' : 'fa-unseen'}`}></span>
            </td>
            <td>
                <Link to={`/mail/${mail.id}`}>open</Link>
            </td>
            <td >
                <span onClick={() => onRemoveMail(mail.id)} className="hover fa fa-trash"></span>
            </td> */}

        </tr>}

        {isTextShown && <tr className="mail-card-open" >
            <td className="header">
                <div className="header">
                    <h2 onClick={onTextShown} className="hover"> {mail.subject}</h2>
                    <div className="utils-container">

                        <span onClick={() => onRemoveMail(mail.id)} className="hover fa fa-trash"></span>
                        <Link to={`/mail/${mail.id}`}><span className="hover fa fa-open-window"> open </span></Link>
                    </div>
                </div>
            </td>
            <td><h5>{`< from ${mail.from} >`}</h5></td>
            <td><h3 >{mail.body}</h3></td>
        </tr>}

    </Fragment >


}
