const { useState, Fragment } = React

import { MailPreview } from './mail-preview.jsx'

export function MailList({ mails, onRemoveMail }) {


    function onSetLongTxtShown() {
    }

    return <section className="mails-container">
        <table>
            <tbody >
                {mails.map(mail => {

                    return <tr key={mail.id}
                        className={`mail-card flex ${mail.isRead ? 'msg-read' : ''}`} >
                        <MailPreview mail={mail} onSetLongTxtShown={onSetLongTxtShown} />
                        <td>
                            <span onClick={() => onRemoveMail(mail.id)} className="hover fa fa-trash"></span>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
    </section >
}
