import React from "react";
import { Container } from "react-bootstrap";
import ImageGallery from "../components/ImageGallery";
import { galleryImages } from "../data";
import { FaInfoCircle } from "react-icons/fa";

const Gallery: React.FC = () => {
  return (
    <div className="page__container">
      <Container>
        <div className="page__content">
          <div className="gallery__header">
            <h1 className="gallery__title">Image Gallery</h1>
            <p className="gallery__description">
              Below you'll find a collection of images that you can use in your
              recruitment messages. These include clan banners, gameplay
              screenshots, and event highlights. Click on an image to copy its
              URL to your clipboard.
            </p>
          </div>

          <div className="gallery__instructions">
            <p>
              <FaInfoCircle /> Click on any image to copy its URL to your
              clipboard. You can then paste this URL in your Steam messages or
              forum posts.
            </p>
          </div>

          <ImageGallery images={galleryImages} />
        </div>
      </Container>
    </div>
  );
};

export default Gallery;
