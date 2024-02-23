import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__title">Derechos de autor</div>
            <img className="logo" src={logo} alt="logo" />
        </footer>
    )
}
