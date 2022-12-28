import { utilService } from '../../../services/util.service.js'


export function MailList({ mails }) {

    function getTime(timeStamp) {
        return utilService.getDayName(timeStamp)
    }

    return <section className="mails-container">
        <table>
            <tbody >
                {
                    mails.map(mail => {
                        return <tr key={mail.id} className="mail-card">
                            <td>⭐</td>
                            <td> {mail.subject}</td>
                            <td> {mail.body}</td>
                            <td> at. {getTime(mail.sentAt)}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </section >
}
