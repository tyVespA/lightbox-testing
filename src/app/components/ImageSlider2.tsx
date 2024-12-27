"use client";
import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import styles from "./ImageSlider2.module.css";

export default function ImageSlider2({ imageUrls }) {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex((index) => {
      if (index == imageUrls.length - 1) return 0;
      return index + 1;
    });
  }

  function showPreviousImage() {
    setImageIndex((index) => {
      if (index == 0) return imageUrls.length - 1;
      return index - 1;
    });
  }
  return (
    <div className={styles.imageSliderContainer}>
      <div className={styles.imagesContainer}>
        <button onClick={showPreviousImage}>
          <ArrowBigLeft />
        </button>
        {imageUrls.map((url, index) => (
          <img
            src={url}
            alt={url}
            key={index}
            className={styles.image}
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
        <button onClick={showNextImage} className={styles.nextButton}>
          <ArrowBigRight />
        </button>
      </div>
      {/* <img
        src={imageUrls[imageIndex]}
        alt={imageUrls[imageIndex]}
        className={styles.image}
      /> */}
    </div>
  );
}
