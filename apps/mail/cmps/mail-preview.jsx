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
            <td className="utils-td">
                <span className="time">{getTime(mail.sentAt)}</span>
                <div className="utils-container">


                    <span onClick={() => onIsRead(mail.id)}
                        className={`hover fa ${mail.isRead ? 'fa-seen' : 'fa-unseen'}`}></span>

                    <span className="hover fa fa-favorite"></span>

                    <span className="">
                        <Link to={`/mail/${mail.id}`}><span className="hover fa fa-open-window"/></Link>
                    </span>

                    <span onClick={() => onRemoveMail(mail.id)} className="hover fa fa-trash"></span>

                </div>
            </td>

        </tr>}

        {isTextShown && <tr className="mail-card-open" >
            <td className="header">
                <div className="header-container">
                    <div className="header">
                        <h2 onClick={onTextShown} className="hover"> {mail.subject}</h2>
                        <td><h5>{`< from ${mail.from} >`}</h5></td>
                    </div>
                    <div className="utils-container">

                        <span className="hover fa fa-favorite"></span>
                        <Link to={`/mail/${mail.id}`}><span className="hover fa fa-open-window"></span></Link>
                        <span onClick={() => onRemoveMail(mail.id)} className="hover fa fa-trash"></span>
                    </div>
                </div>
            </td>
            <td><h3 >{mail.body}</h3></td>
        </tr>}

    </Fragment >


}
