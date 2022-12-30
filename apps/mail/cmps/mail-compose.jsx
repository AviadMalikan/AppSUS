const { useState, useEffect } = React
const { useNavigate, Fragment } = ReactRouterDOM

import { mailService } from "../services/mail.service.js";


export function MailCompose({ onIsMsgCmp, onSubmitEmail }) {
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


    return <section className="main-compose">
        <form onSubmit={(ev) => {
            onIsMsgCmp()
            onSubmitEmail(ev, newEmail)
        }}>
            <section className="inputs-container">
                <div className="header-form">
                    <span>New Massage</span>
                    <span className="fa fa-open-window" onClick={onIsMsgCmp}></span>
                    <span className="hover" onClick={onIsMsgCmp}>X</span>
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
        </form>

    </section>
}