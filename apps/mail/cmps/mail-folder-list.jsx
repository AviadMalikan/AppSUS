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
        
        <NavLink to="/mail" >
            <span onClick={() => onChangeFilter('inbox')}
                className="fa fa-inbox"></span>
        </NavLink>
        <NavLink to="/mail" >
            <span onClick={() => onChangeFilter('sent')}
                className="fa fa-send"></span>
        </NavLink>
        <NavLink to="/mail" >
            <span onClick={() => onChangeFilter('favorite')}
                className="fa fa-favorite"></span>
        </NavLink>

    </section>
}