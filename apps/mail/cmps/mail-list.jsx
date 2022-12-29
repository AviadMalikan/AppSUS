const { useState, Fragment } = React

import { MailPreview } from './mail-preview.jsx'

export function MailList({ mails, onRemoveMail, onIsRead }) {



    return <section className="mails-container">
        <table>
            <tbody >
                {mails.map(mail => <MailPreview mail={mail} />)}
            </tbody>
        </table>
    </section >
}
//     return <section className="mails-container">
//         <table>
//             <tbody >
//                 {mails.map(mail => {
//                     return <tr key={mail.id}
//                         className={`mail-card flex ${mail.isRead ? 'msg-read' : ''}`} >
//                         <MailPreview mail={mail} />
//                         <td onClick={() => { }}>
//                             <span onClick={() => onIsRead(mail.id)}
//                                 className={`hover fa ${mail.isRead ? 'fa-seen' : 'fa-unseen'}`}></span>
//                         </td>
//                         <td>
//                             <span onClick={() => onRemoveMail(mail.id)} className="hover fa fa-trash"></span>
//                         </td>
//                     </tr>
//                 })}
//             </tbody>
//         </table>
//     </section >
// }
