"use client";
import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import styles from "./ImageSlider.module.css";

export default function ImageSlider({ imageUrls }) {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    if (imageIndex == imageUrls.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  }

  function showPreviousImage() {
    if (imageIndex == 0) {
      setImageIndex(imageUrls.length - 1);
    } else {
      setImageIndex(imageIndex - 1);
    }
  }
  return (
    <div className={styles.imageSliderContainer}>
      <button onClick={showPreviousImage}>
        <ArrowBigLeft />
      </button>
      <img src={imageUrls[imageIndex]} alt="" className={styles.image} />
      <button onClick={showNextImage}>
        <ArrowBigRight />
      </button>
    </div>
  );
}
