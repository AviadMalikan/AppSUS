const { useState, useEffect } = React

import { mailService } from "../services/mail.service.js";


export function MailFilter({ onSetFilter }) {
    const [filterByToEdit, setFilterByToEdit] = useState('')


    function handleChange({ target }) {
        let { value } = target
        onSetFilter(prevTitle => ({ ...prevTitle, txt: value }))
    }


    return <section className="filter-container">

        <form >
            {/* <label htmlFor="title">Search: </label> */}
            <input type="text"
                id="title"
                name="txt"
                placeholder="Search in email"
                value={filterByToEdit.txt}
                onChange={handleChange}
            />
        </form>

    </section>
}