import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

export const Navbar = () => {
    return (
        <header className="nav">
            <nav className="nav-top">
                <a href="/"><img className="logo" src={logo} alt="logo-game-store" /></a>
                <ul className="nav-top__links">
                    <li><a href="/login">Ingresar</a></li>
                    <li><a href="/register">Registrarse</a></li>
                </ul>
            </nav>
            <ul className="nav-down">
                <li><a href="">Nuevo</a></li>
                <li><a href="">Mas vendidos</a></li>
                <li><a href="">Ranking</a></li>
                <li><a href="">Consolas</a></li>
                <li><a href="">Free to play</a></li>
            </ul>
        </header>
    )
}
