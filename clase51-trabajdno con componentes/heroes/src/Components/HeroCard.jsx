import React from 'react'
import './HeroCard.css'
import PropTypes from 'prop-types';

export const HeroCard = ({ nombre/*  = "Xavier" */, image, editorial, children }) => {
    return (
        <div className='card'>
            <h3>{nombre || 'Sin nombre'}</h3>
            <img src={image} alt="superhero-img" />
            <p>{editorial}</p>

            {children}
        </div>
    )
}

HeroCard.propTypes = {
    nombre: PropTypes.string,
    image: PropTypes.string.isRequired
}

HeroCard.defaultProps = {
    nombre: "N/N"
}


/* 
export const HeroCard = (props) => {
    return (
        <div className='card'>
            <h3>{props.nombre}</h3>
            <img src={props.image} alt="superhero-img" />
            <p>{props.editorial}</p>

            {props.children}
        </div>
    )
}
*/