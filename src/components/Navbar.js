import React, { useState } from 'react'
import './Style.css'
import { Link } from 'react-router-dom'



export default function Navbar() {
    const links = [{ name: 'Home', to: '/' }, { name: 'Services', to: '/services' }, { name: 'Contact', to: '/contact' }];

    const [menu, setMenu] = useState(false)

    const showMenu = () => {
        setMenu(!menu)
    }

    const closeMobileMenu = () => {
        setMenu(false)
    }

    return (
        <>
            <header className="header">

                <a href="/" className="logo"> SearchPerk <i className="fab fa-searchengin"></i> </a>

                <nav className="navbar" >
                    <Link to="/">home</Link>
                    <Link to="/services">services</Link>
                    <Link to="/contact">contact</Link>
                </nav>

                <div className="menu-icon" onClick={showMenu}>
                    <i className={menu ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={menu ? 'nav-menu active' : 'nav-menu'} >
                    {links.map(item => (<Link to={item.to} className="nav-links" onClick={closeMobileMenu}>{item.name}</Link>))}
                </ul>
                <div className="scroll-indicator"></div>
            </header>


        </>
    )
}
