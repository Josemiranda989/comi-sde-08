import logoReact from "../assets/react.svg";

const Navbar = () => {
  return (
    <nav className="flex justify-around bg-cyan-800 py-2">
      <img src={logoReact} alt="logoReact" />
      <ul className="flex gap-2 text-xl">
        <li>
          <a href="/games">Games</a>
        </li>
        <li>
          <a href="/games/1">Detail</a>
        </li>
        <li>
          <a href="/users">Users</a>
        </li>
        <li>
          <a href="/users/profile">Profile</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
