import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaClipboardList, FaImages, FaMapMarkedAlt } from "react-icons/fa";

const Home: React.FC = () => {
  return (
    <div className="page__container">
      <Container>
        <div className="page__content">
          <div className="home__content">
            <img
              src="./src/assets/images/logo.png"
              alt="Bannerlord Clan Logo"
              className="home__logo"
            />
            <h1 className="home__title">Bannerlord Recruiting Tutorial</h1>
            <p className="home__subtitle">
              A comprehensive guide for Steam recruitment into our Bannerlord
              clan
            </p>

            <div className="home__description">
              <p>
                Welcome to our clan recruitment tutorial! This guide has been
                created to help you effectively recruit new members for our
                Mount & Blade II: Bannerlord clan through Steam. You'll find
                examples of recruitment messages, useful images to share, and
                information about the best places to find potential members.
              </p>
              <p>
                Recruiting new members is crucial for the growth and success of
                our clan. With this tutorial, you'll learn the best practices
                for approaching potential recruits and convincing them to join
                our community. Remember, the goal is to be friendly,
                informative, and not pushy - we want players who genuinely want
                to be part of our clan.
              </p>
            </div>

            <div className="home__cta-container">
              <Link to="/examples" className="home__cta-btn">
                Recruitment Examples
                <FaClipboardList className="home__cta-btn-icon" />
              </Link>
              <Link to="/gallery" className="home__cta-btn">
                Image Gallery
                <FaImages className="home__cta-btn-icon" />
              </Link>
              <Link to="/places" className="home__cta-btn">
                Recruitment Places
                <FaMapMarkedAlt className="home__cta-btn-icon" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
