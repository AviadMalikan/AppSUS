import { MailPreview } from './mail-preview.jsx'

export function MailList({ mails }) {

    return <section className="mails-container">
        <table>
            <tbody >
                {mails.map(mail => {
                    return <tr key={mail.id} className="mail-card flex">
                        <MailPreview mail={mail}
                        />
                    </tr>
                })}
            </tbody>
        </table>
    </section >
}
