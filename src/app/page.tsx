import Image from "next/image";
import styles from "./page.module.css";
import ImageSlider from "./components/ImageSlider";
import ImageSlider2 from "./components/ImageSlider2";
import AutoSlider from "./components/AutoSlider";

import dk from "../../public/dk.webp";
import link from "../../public/link.webp";
import mario from "../../public/mario.webp";

const IMAGES = [dk.src, link.src, mario.src];

export default function Home() {
  return (
    <div>
      <section>
        <h2>Slider 1</h2>
        <ImageSlider imageUrls={IMAGES} />
      </section>
      <section>
        <h2>Slider 2</h2>
        <ImageSlider2 imageUrls={IMAGES} />
      </section>
      <section>
        <h2>Auto Slider</h2>
        <AutoSlider />
      </section>
      <section>
        <h2>Auto Slider 2</h2>
      </section>
    </div>
  );
}
