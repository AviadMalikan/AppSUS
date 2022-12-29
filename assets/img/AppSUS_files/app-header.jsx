const { Link, NavLink } = ReactRouterDOM
const { useState } = React

export function AppHeader() {
    const [isNavOpen, setIsNavOpen] = useState(false)

    function closeOrOpenNav() {
        setIsNavOpen(!isNavOpen)
    }

    return <div className="app-header-container">

    <header className="app-header main-layout full">

        <Link to="/">
            <h3>LOGO this is logo!</h3>
        </Link>
        <button className="fa fa-hamburger" onClick={closeOrOpenNav}></button>
        {isNavOpen && <nav className="nav-menu" onClick={closeOrOpenNav}>
            <NavLink to="/" className="fa fa-home"></NavLink>
            <NavLink to="/about" className="fa fa-about"></NavLink>
            <NavLink to="/mail" className="fa fa-mail "></NavLink>
            <NavLink to="/note" className="fa fa-notes"></NavLink>
        </nav>}

    </header >
    </div>
}
