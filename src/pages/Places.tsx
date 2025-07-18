import React from "react";
import { Container } from "react-bootstrap";
import RecruitmentPlace from "../components/RecruitmentPlace";
import { recruitmentPlaces } from "../data";

const Places: React.FC = () => {
  return (
    <div className="page__container">
      <Container>
        <div className="page__content">
          <div className="places__header">
            <h1 className="places__title">Места</h1>
            <p className="places__description">
              В этом разделе представлена ​​информация о местах для вербовки.
            </p>
          </div>

          {recruitmentPlaces.map((place) => (
            <RecruitmentPlace key={place.id} place={place} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Places;
