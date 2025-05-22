import React from "react";
import type { RecruitmentPlace as RecruitmentPlaceType } from "../types";

interface RecruitmentPlaceProps {
  place: RecruitmentPlaceType;
}

const RecruitmentPlace: React.FC<RecruitmentPlaceProps> = ({ place }) => {
  return (
    <div className="recruitment-place">
      <div className="recruitment-place__container">
        <div className="recruitment-place__header">
          <h3 className="recruitment-place__title">{place.title}</h3>
        </div>
        <div className="recruitment-place__content">
          <div className="recruitment-place__description">
            <p>{place.description}</p>
          </div>

          <div className="recruitment-place__gallery">
            <div className="recruitment-place__gallery-container">
              {place.images.map((image) => (
                <div key={image.id} className="recruitment-place__gallery-item">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="recruitment-place__gallery-image"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="recruitment-place__tips">
            <h4 className="recruitment-place__tips-title">Extra</h4>
            <ul className="recruitment-place__tips-list">
              {place.tips.map((tip, index) => (
                <li key={index} className="recruitment-place__tips-item">
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentPlace;
