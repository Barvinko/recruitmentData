import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";

// Header component that will be present on all pages
const Header: React.FC = () => {
  return (
    <header className="header">
      <Container className="header__container">
        <NavLink to="/" className="header__logo">
          Bannerlord Recruiting
        </NavLink>
        <nav className="header__nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "header__link header__link--active" : "header__link"
            }
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/examples"
            className={({ isActive }) =>
              isActive ? "header__link header__link--active" : "header__link"
            }
          >
            Recruiting Examples
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive ? "header__link header__link--active" : "header__link"
            }
          >
            Image Gallery
          </NavLink>
          <NavLink
            to="/places"
            className={({ isActive }) =>
              isActive ? "header__link header__link--active" : "header__link"
            }
          >
            Recruiting Places
          </NavLink>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
