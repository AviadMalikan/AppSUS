const { useState, useEffect } = React
const { useNavigate, Fragment } = ReactRouterDOM


import { mailService } from "../services/mail.service.js";


export function MailCompose({ onIsMsgCmp }) {
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

    function onSubmitEmail(ev) {
        ev.preventDefault()
        mailService.save(newEmail)
            .then(mail => {
                console.log('mail: ', mail)
                navigate('/mail')
            })
            .catch(console.log)
    }

    return <section className="main-compose">
        <form onSubmit={onSubmitEmail}>
            <div className="header-form">
                <span>New Massage</span>
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
                <input type="text"
                    id="body"
                    name="body"
                    placeholder="body"
                    value={newEmail.body}
                    onChange={handleEvent}
                />
            </article>
            <button>Send!</button>
        </form>


    </section>
}