
import { MailPreview } from './mail-preview.jsx'

export function MailList({ mails, onRemoveMail, onIsRead }) {


    return <section className="mails-container">
        <table>
            <tbody >
                {mails.map(mail => <MailPreview key={mail.id}
                    mail={mail}
                    onRemoveMail={onRemoveMail}
                    onIsRead={onIsRead} />)}
            </tbody>
        </table>
    </section >
}

