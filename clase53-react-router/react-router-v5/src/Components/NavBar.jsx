import React, { Component } from 'react'
import logoReact from '../assets/react.svg'
import './NavBar.css'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
  render() {
    return (
      <nav className='navbar'>
        <ul>
          <li><Link to="/" >Inicio</Link></li>
          <li><Link to="/stateless">Componente sin estado</Link></li>
          <li><Link to="/anime">Anime Detail</Link></li>
          <li><Link to="/counter">Contador</Link></li>
          <li><Link to="/form">Formulario</Link></li>
          <li><Link to="/simple-statefull">Componente con estado simple</Link></li>
          <li><a href="https://youtube.com" target="_blank">Ir a YT en otra pestaña</a></li>

        </ul>
        <img src={logoReact} alt="logo react" />
      </nav>
    )
  }
}

