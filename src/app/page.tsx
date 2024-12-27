import Image from "next/image";
import styles from "./page.module.css";
import ImageSlider from "./components/ImageSlider";

import dk from "../../public/dk.webp";
import link from "../../public/link.webp";
import mario from "../../public/mario.webp";

const IMAGES = [dk.src, link.src, mario.src];

export default function Home() {
  return (
    <div>
      <ImageSlider imageUrls={IMAGES} />
    </div>
  );
}
