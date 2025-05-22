import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";

// Header component that will be present on all pages
const Header: React.FC = () => {
  return (
    <header className="header">
      <Container className="header__container">
        <NavLink to="/" className="header__logo">
          M&B Recruiting
        </NavLink>
        <nav className="header__nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "header__link header__link--active" : "header__link"
            }
            end
          >
            Главная
          </NavLink>
          <NavLink
            to="/examples"
            className={({ isActive }) =>
              isActive ? "header__link header__link--active" : "header__link"
            }
          >
            Примеры
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive ? "header__link header__link--active" : "header__link"
            }
          >
            Галерея
          </NavLink>
          <NavLink
            to="/places"
            className={({ isActive }) =>
              isActive ? "header__link header__link--active" : "header__link"
            }
          >
            Места
          </NavLink>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
