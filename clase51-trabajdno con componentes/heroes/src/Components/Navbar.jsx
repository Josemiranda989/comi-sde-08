import React from 'react'
import Styles from './Navbar.module.css'

export const Navbar = () => {
    return (
        <nav className={`${Styles.navBar} ${Styles.borderRed}`}>
            <h1> HERO APP </h1>
        </nav>
    )
}
