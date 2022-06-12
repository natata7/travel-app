import { Link } from "react-router-dom";
import BriefCase from "../icons/briefcase";
import User from "../icons/user";

interface IHandlerLogOutProps {
  handlerLogOut: (arg0: boolean) => void;
}

function Navigation({ handlerLogOut }: IHandlerLogOutProps) {
  const onClickhandler = (): void => {
    handlerLogOut(false);
  };
  return (
    <nav className="header__nav">
      <ul className="nav-header__list">
        <li className="nav-header__item" title="Bookings">
          <Link to="/bookings" className="nav-header__inner">
            <span className="visually-hidden">Bookings</span>
            <BriefCase />
          </Link>
        </li>
        <li className="nav-header__item" title="Profile">
          <div className="nav-header__inner profile-nav" tabIndex={Number(0)}>
            <span className="visually-hidden">Profile</span>
            <User />
            <ul className="profile-nav__list">
              <li className="profile-nav__item profile-nav__username">
                John Doe
              </li>
              <li className="profile-nav__item">
                <button
                  className="profile-nav__sign-out button"
                  onClick={onClickhandler}
                >
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
