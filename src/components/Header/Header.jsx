import "./Header.css";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function Header({isLoggedin, setIsLoggedin}) {
  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__logo">
          Travel App
        </Link>
        {isLoggedin && <Navigation handlerLogOut={setIsLoggedin} />}
      </div>
    </header>
  );
}

export default Header;
