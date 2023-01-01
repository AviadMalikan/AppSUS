const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter

import { AppHeader } from "./cmps/app-header.jsx"
import { About } from "./views/about.jsx"
import { Home } from "./views/home.jsx"
import { MailIndex } from "./apps/mail/views/mail-index.jsx"
import { MailDetail } from "./apps/mail/views/mail-details.jsx"
import { NoteIndex } from "./apps/note/views/note-index.jsx"
import { BookIndex } from "./apps/book/views/book-index.jsx"
import { BookEdit } from "./apps/book/views/book-edit.jsx"
import { BookDetails } from "./apps/book/views/book-details.jsx"
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
                    <Route path="/mail/:mailId" element={<MailDetail />} />

                    <Route path="/note" element={<NoteIndex />} />
                    
                    <Route path="/book" element={<BookIndex />} />
                    <Route element={<BookEdit />} path="/book/edit" />
                    <Route element={<BookEdit />} path="/book/edit/:bookId" />
                    <Route element={<BookDetails />} path="/book/:bookId" />
                </Routes>
            </section>
        </section>
    </Router>
}
