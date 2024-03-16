import PropTypes from "prop-types";

const UserCard = ({ user }) => {
  // console.log(user);
  const { fullName, email, country, avatar } = user;
  return (
    <article className="w-96 bg-slate-600 text-center transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
      <h3 className="font-bold">{fullName}</h3>
      <small className="hidden md:block">email: {email}</small>
      <p className="hidden md:block">pais: {country.name}</p>
      <img
        className="object-cover w-4/5 mx-auto"
        src={`http://localhost:3000/images/avatars/${avatar}`}
        alt="imagen-juego"
      />
    </article>
  );
};

UserCard.propTypes = {
  user: PropTypes.object,
};

export default UserCard;
