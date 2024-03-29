const { Route, NavLink } = ReactRouterDOM

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

        <NavLink to="/mail" onClick={() => onChangeFilter('inbox')}
            className="fa fa-inbox">
        </NavLink>
        <NavLink to="/mail"  onClick={() => onChangeFilter('sent')}
                className="fa fa-send">
        </NavLink>
        <NavLink to="/mail"  onClick={() => onChangeFilter('favorite')}
                className="fa fa-favorite">
        </NavLink>

    </section>
}