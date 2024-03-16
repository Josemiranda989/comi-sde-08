import PropTypes from "prop-types";

const Card = ({ game }) => {
  //   console.log(game);
  const { title, genre, awards, img_url } = game;
  return (
    <article className="w-80 bg-slate-600 text-center transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
      <h3 className="font-bold">{title}</h3>
      <small>Genero: {genre}</small>
      <p>Premios: {awards}</p>
      <img src={`http://localhost:3000/images/${img_url}`} alt="imagen-juego" />
    </article>
  );
};

Card.propTypes = {
  game: PropTypes.object,
};

export default Card;
