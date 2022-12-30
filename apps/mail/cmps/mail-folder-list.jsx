

export function MailFolderList({ onSetFilter }) {

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

        <button onClick={() => onChangeFilter('inbox')}
            className="fa fa-inbox"></button>
        <button onClick={() => onChangeFilter('all')}
            className="">All</button>
        <button onClick={() => onChangeFilter('sent')}
            className="fa fa-send"></button>
        <button onClick={() => onChangeFilter('favorite')}
            className="fa fa-favorite">⭐</button>

    </section>
}