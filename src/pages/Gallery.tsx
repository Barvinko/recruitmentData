import React from "react";
import { Container } from "react-bootstrap";
import ImageGallery from "../components/ImageGallery";
import { galleryImages } from "../data";
import { FaCopy } from "react-icons/fa";

const Gallery: React.FC = () => {
  return (
    <div className="page__container">
      <Container>
        <div className="page__content">
          <div className="gallery__header">
            <h1 className="gallery__title">Галерея</h1>
            <p className="gallery__description">
              Ниже вы найдете коллекцию изображений, которые вы можете
              использовать в своих сообщениях о наборе. Они включают скриншоты
              игрового процесса публичных мероприятий и единоличные
              противостояния. Нажмите на изображение на «
              <FaCopy className="recruitment-example__copy-btn-icon" />» чтобы
              скопировать картинку в буфер обмена.
            </p>
          </div>

          <ImageGallery images={galleryImages} />
        </div>
      </Container>
    </div>
  );
};

export default Gallery;
