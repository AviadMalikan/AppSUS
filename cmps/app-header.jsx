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
                <NavLink to="/"> <img src="./assets/img/home.png" alt="home" /></NavLink>
                <NavLink to="/about"> <img src="./assets/img/about.png" alt="about" /></NavLink>
                <NavLink to="/mail"> <img src="./assets/img/gmail.png" alt="mail" /></NavLink>
                <NavLink to="/note"> <img src="./assets/img/keep.png" alt="keep" /></NavLink>
            </nav>}

        </header >
    </div>
}
