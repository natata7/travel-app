import "./Header.css";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function Header({ isLoggedIn, onLoggedOut }) {
  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__logo">
          Travel App
        </Link>
        {isLoggedIn && <Navigation handlerLogOut={onLoggedOut} />}
      </div>
    </header>
  );
}

export default Header;
