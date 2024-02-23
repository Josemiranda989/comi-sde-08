import React from 'react'
import PropTypes from 'prop-types'
import './GameCard.css'

export const GameCard = ({ title, thumbnailURL, gameURL }) => {

    return (
        <article className="game">
            <h3 className="game__title">
                <a href={gameURL}>
                    {title || "Without name"}
                </a>
            </h3>
            <img
                className="game__img"
                src={thumbnailURL}
                alt="juego"
            />
        </article>
    )
}

GameCard.propType = {
    title: PropTypes.string,
    thumbnailURL: PropTypes.string.isRequired,
    gameURL: PropTypes.string.isRequired,
}

GameCard.defaultProps = {
    thumbnailURL: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png"
}