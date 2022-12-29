const { Fragment } = React

import { LongTxt } from '../../../cmps/long-txt.jsx'
import { utilService } from '../../../services/util.service.js'

export function MailPreview({ mail }) {

    function getTime(timeStamp) {
        return utilService.getDayName(timeStamp)
    }

    function getLength() {
        let width = document.body.clientWidth
        if (width > 1200) return 200
        else if (width > 900) return 70
        else return 50
    }

    function showMail(mail) {
        console.log('mail: ', mail)
        return 'ola'
    }



    return <Fragment>

        <tr key={mail.id}
            className={`mail-card flex ${mail.isRead ? 'msg-read' : ''}`} >
                
            <td onClick={() => showMail(mail)}>CLICK TO SEE</td>
            <td><span className="hover">⭐</span></td>
            <td className="title"> {mail.subject}</td>
            <td className="content">
                <LongTxt txt={mail.body} length={getLength()} />
            </td>
            <td className="time"> at.
                {getTime(mail.sentAt)}
            </td>
            <td onClick={() => { }}>
                <span onClick={() => onIsRead(mail.id)}
                    className={`hover fa ${mail.isRead ? 'fa-seen' : 'fa-unseen'}`}></span>
            </td>
            <td>
                <span onClick={() => onRemoveMail(mail.id)} className="hover fa fa-trash"></span>
            </td>
    
        </tr>

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