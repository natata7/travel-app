import "./Header.css";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

interface IHeaderProps {
  isLoggedin: boolean;
  setIsLoggedin: (arg0: boolean) => void;
}

function Header({isLoggedin, setIsLoggedin}: IHeaderProps) {
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
