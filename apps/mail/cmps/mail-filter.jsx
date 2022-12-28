const { useState, useEffect } = React

import { mailService } from "../services/mail.service.js";


export function MailFilter({ onSetFilter }) {
    const [filterByToEdit, setFilterByToEdit] = useState('')


    function handleChange({ target }) {
        let { value } = target
        console.log('value: ', value)
        onSetFilter(prevTitle => prevTitle = value)
    }


    return <section className="filter-container">

        <form >
            <label htmlFor="title">mail subject</label>
            <input type="text"
                id="title"
                name="txt"
                placeholder="By Title"
                value={filterByToEdit}
                onChange={handleChange}
            />
        </form>

    </section>
}