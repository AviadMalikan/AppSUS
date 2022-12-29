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
            <img src="./assets/img/logoo.png" alt="logo" className="logo-img"/>
            </Link>
            <button onClick={closeOrOpenNav}> <img src="./assets/img/menu.png" className="menu-img" alt="menu" /></button>
            {isNavOpen && <nav className="nav-menu" onClick={closeOrOpenNav}>
                <NavLink to="/"> <img src="./assets/img/home.png" alt="home" /></NavLink>
                <NavLink to="/about"> <img src="./assets/img/about.png" alt="about" /></NavLink>
                <NavLink to="/mail"> <img src="./assets/img/gmail.png" alt="mail" /></NavLink>
                <NavLink to="/note"> <img src="./assets/img/keep.png" alt="keep" /></NavLink>
            </nav>}

        </header >
    </div>
}
