const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter

import { AppHeader } from "./cmps/app-header.jsx"
import { About } from "./views/about.jsx"
import { Home } from "./views/home.jsx"
import { MailIndex } from "./apps/mail/views/mail-index.jsx"
import { NoteIndex } from "./apps/note/views/note-index.jsx"
import { NoteAdd } from "./apps/note/cmps/note-add.jsx"



export function App() {
    return <Router>
        <section className="app">
            <AppHeader />
            <section className="main-layout full">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/mail" element={<MailIndex />} />
                <Route path="/note" element={<NoteIndex />}>
                    <Route path="/note/add" element={<NoteAdd />} />
                </Route>

            </Routes>
            </section>
        </section>
    </Router>
}
