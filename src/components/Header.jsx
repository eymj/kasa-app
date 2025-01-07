import "./Header.css";
import { NavLink } from "react-router";
import kasaLogo from "../assets/logo.png";

function Header() {
  return (
    <header>
      <div className="header-topbar">
        <div className="header-logo">
          <img src={kasaLogo} alt="" />
        </div>
        <nav>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active-link" : "inactive-link"
            }
          >
            Accueil
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "active-link" : "inactive-link"
            }
          >
            A Propos
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
