import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { ContactContact } from "./components/ContactContact.js"
import "./index.css"

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <ContactContact />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
)
