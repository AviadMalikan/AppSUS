const { Link, NavLink } = ReactRouterDOM


export function Home() {

    return <section className="home">

        <div className="main-logo">
            <img src="./assets/img/app-logo/main-logo.png" alt="logo" className="main-logo-img" />
        </div>

        <div className="apps">
            <NavLink className="app-link" to="/about"> <img src="./assets/img/about.png" alt="about" /></NavLink>
            <NavLink className="app-link" to="/mail"> <img src="./assets/img/gmail.png" alt="mail" /></NavLink>
            <NavLink className="app-link" to="/note"> <img src="./assets/img/keep.png" alt="keep" /></NavLink>
        </div>
    </section>
}