const { Fragment } = React
import { LongTxt } from '../../../cmps/long-txt.jsx'
import { utilService } from '../../../services/util.service.js'

export function MailPreview({ mail }) {
    console.log('mail: ', mail)

    function getTime(timeStamp) {
        return utilService.getDayName(timeStamp)
    }

    function getLength() {
        let width = document.body.clientWidth
        if (width > 1200) return 200
        else if (width > 900) return 70
        else return 50
    }

    return <Fragment>

        <td>⭐</td>
        <td className="title"> {mail.subject}</td>
        <td className="content">
            <LongTxt txt={mail.body} length={getLength()} />
        </td>
        <td> at. {getTime(mail.sentAt)}</td>

    </Fragment>
}