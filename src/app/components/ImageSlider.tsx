"use client";
import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import styles from "./ImageSlider.module.css";

export default function ImageSlider({ imageUrls }) {
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
      <button onClick={showPreviousImage}>
        <ArrowBigLeft />
      </button>
      <img
        src={imageUrls[imageIndex]}
        alt={imageUrls[imageIndex]}
        className={styles.image}
      />
      <button onClick={showNextImage} className={styles.nextButton}>
        <ArrowBigRight />
      </button>
    </div>
  );
}
