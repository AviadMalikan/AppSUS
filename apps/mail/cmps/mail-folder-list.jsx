


export function MailFolderList({ onSetFilter }) {


    function handleChange({ target }) {
        let { value } = target
        onSetFilter(prevTitle => ({ ...prevTitle, txt: value }))
    }

    function onChangeFilter(val) {
        let valTo
        let valFrom

        switch (val) {
            case 'inbox':
                valTo = 'user@appsus.com'
                valFrom = ''
                break
            case 'all':
                valTo = ''
                valFrom = ''
                break
            case 'sent':
                valTo = ''
                valFrom = 'user@appsus.com'
                break
        }

        onSetFilter(prevFilter => ({ ...prevFilter, to: valTo, from: valFrom }))
    }

    return <section className="mail-folders-containers">

        <button onClick={() => onChangeFilter('inbox')}>Inbox</button>
        <button onClick={() => onChangeFilter('all')}>All</button>
        <button onClick={() => onChangeFilter('sent')}>Sent</button>
        <button onClick={() => onChangeFilter('favorite')}>Favorite</button>

    </section>
}