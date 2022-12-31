const { useState, useEffect } = React
const { useNavigate, Fragment } = ReactRouterDOM

import { mailService } from "../services/mail.service.js";


export function MailCompose({ onIsComposeBig, isBigCompose, onIsMsgCmp, onSubmitEmail, mail }) {
    const [newEmail, setNewEmail] = useState(mailService.getEmptyMail)

    const navigate = useNavigate()

    useEffect(() => {
    }, [newEmail])


    function handleEvent({ target }) {
        let { value, name: field } = target
        setNewEmail(prevEmail => {
            return { ...prevEmail, [field]: value }
        })
    }


    return <section className={isBigCompose ? 'main-compose-big' : 'main-compose'}>
        <form onSubmit={(ev) => {
            onIsMsgCmp()
            onSubmitEmail(ev, newEmail)
        }}>
            <section className="inputs-container">
                <div className="header-form">
                    <span>New Massage</span>
                    <div className="header-utils">
                        <span className={`fa ${isBigCompose ? 'fa-minus ' : 'fa-open-window'} hover`}
                            onClick={onIsComposeBig}></span>
                        <span className="fa fa-x hover" onClick={onIsMsgCmp}></span>
                    </div>
                </div>

                <article>
                    <input type="email"
                        id="email"
                        name="to"
                        placeholder="To"
                        value={newEmail.to}
                        onChange={handleEvent}
                    />
                </article>

                <article>
                    <input type="text"
                        id="subject"
                        name="subject"
                        placeholder="subject"
                        value={newEmail.subject}
                        onChange={handleEvent}
                    />
                </article>

                <article className="text-area">
                    <textarea type="text"
                        id="body"
                        name="body"
                        placeholder="Body"
                        value={newEmail.body}
                        onChange={handleEvent}
                    />
                </article>
            </section>

            <button>Send!</button>
        </form >

    </section >
}