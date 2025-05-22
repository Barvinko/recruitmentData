import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaClipboardList, FaImages, FaMapMarkedAlt } from "react-icons/fa";
import Logo from "../assets/images/logo.png"; // Adjust the path as necessary

const Home: React.FC = () => {
  return (
    <div className="page__container">
      <Container>
        <div className="page__content">
          <div className="home__content">
            <img src={Logo} alt="Grif" className="home__logo" />
            <h1 className="home__title">M&B Recruiting Tutorial</h1>
            <p className="home__subtitle">Руководство по набору в клан.</p>

            <div className="home__description">
              <p>
                Добро пожаловать в наш путеводитель по набору в клан! Это
                руководство было создано, чтобы помочь вам эффективно набирать
                новых членов для нашего клана Mount & Blade II: Bannerlord через
                Steam. Вы найдете примеры сообщений о наборе с возможностью их
                копировать, как и изображения демонстрирующее досуг нашего
                клана, а так же указание информацию о местах для поиска
                потенциальных членов.
              </p>
              <p>
                <b>
                  Если есть ценная информация(примеры, скриншоты, новые места)
                  напишите мне, я дополню руководство.
                </b>
              </p>
            </div>

            <div className="home__cta-container">
              <Link to="/examples" className="home__cta-btn">
                Примеры
                <FaClipboardList className="home__cta-btn-icon" />
              </Link>
              <Link to="/gallery" className="home__cta-btn">
                Галерея
                <FaImages className="home__cta-btn-icon" />
              </Link>
              <Link to="/places" className="home__cta-btn">
                Места
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
