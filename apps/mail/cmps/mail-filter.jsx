const { useState, useEffect } = React

export function MailFilter({ onSetFilter }) {
    const [filterByToEdit, setFilterByToEdit] = useState('')


    function handleChange({ target }) {
        let { value } = target
        onSetFilter(prevTitle => ({ ...prevTitle, txt: value }))
    }


    return <section className="filter-container">
        <form >
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