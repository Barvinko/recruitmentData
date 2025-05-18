import React, { useState } from "react";
import { FaCopy } from "react-icons/fa";
import type { GalleryImage } from "../types";

interface ImageGalleryProps {
  images: GalleryImage[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleCopyImage = async (id: number, url: string) => {
    setErrorMessage(null);

    // Проверка поддержки Clipboard API
    if (!navigator.clipboard || typeof ClipboardItem === "undefined") {
      setErrorMessage("Your browser does not support image copy.");
      return;
    }

    try {
      const response = await fetch(url);
      const blob = await response.blob();

      const item = new ClipboardItem({ [blob.type]: blob });
      await navigator.clipboard.write([item]);

      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (error) {
      console.error("Failed to copy image:", error);
      setErrorMessage("Failed to copy image to clipboard.");
    }
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
              onClick={() => handleCopyImage(image.id, image.src)}
              aria-label="Copy image to clipboard"
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
          ✅ Image copied to clipboard!
        </div>
      )}

      {errorMessage && (
        <div className="image-gallery__copy-error">⚠️ {errorMessage}</div>
      )}
    </div>
  );
};

export default ImageGallery;
