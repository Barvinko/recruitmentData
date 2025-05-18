import React, { useState } from "react";
import { FaCopy } from "react-icons/fa";
import type { GalleryImage } from "../types";

interface ImageGalleryProps {
  images: GalleryImage[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const handleCopy = (id: number, url: string) => {
    // Create a temporary textarea to copy the image URL
    const textarea = document.createElement("textarea");
    textarea.value = url;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="image-gallery">
      <div className="image-gallery__container">
        {images.map((image) => (
          <div key={image.id} className="image-gallery__item">
            <img
              src={image.src}
              alt={image.alt}
              className="image-gallery__image"
            />
            <button
              className="image-gallery__copy-btn"
              onClick={() => handleCopy(image.id, image.src)}
              aria-label="Copy image URL"
            >
              <FaCopy />
            </button>
            <div className="image-gallery__overlay">
              <h4 className="image-gallery__title">{image.alt}</h4>
              {image.description && (
                <p className="image-gallery__description">
                  {image.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
      {copiedId !== null && (
        <div className="image-gallery__copy-success">
          Image URL copied to clipboard!
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
