import { Link } from "react-router-dom";
import BriefCase from "../icons/briefcase";
import User from "../icons/user";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/profile/auth";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store/store";

function Navigation() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const handlerLogOut = () => {
    dispatch(logout())
    .unwrap()
      .then(() => {
        navigate("/sign-in", { replace: true });
      })
      .catch(() => {
        //
      });
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
                  onClick={handlerLogOut}
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
