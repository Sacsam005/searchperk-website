import React from 'react'
import './Style.css'
import { Link } from 'react-router-dom'



export default function Navbar() {
    return (
        <>
            <header className="header">

                <a href="/" className="logo"> SearchPerk <i className="fab fa-searchengin"></i> </a>

                <nav className="navbar">
                    <Link to="/">home</Link>
                    <Link to="/services">services</Link>
                    <Link to="/contact">contact</Link>
                </nav>
                <div id="menu-btn" className="fas fa-bars"></div>
                <div id="theme-btn" className="far fa-moon"></div>

                <div className="scroll-indicator"></div>
            </header>


        </>
    )
}
