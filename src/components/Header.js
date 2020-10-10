import React from "react";
import headerLogo from "../images/logo.svg";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="header">
      <img className="logo" src={headerLogo} alt="Around logo" />
      <nav className="nav header__info header__info_status_logged-in">
        <p className="header__email">{props.loggedIn ? props.email : ""}</p>
        <Link
          to={props.link.to}
          className="header__link"
          onClick={props.onLogout ? props.onLogout : null}
        >
          {props.link.description}
        </Link>
      </nav>
    </header>
  );
}

export default Header;
