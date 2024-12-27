import styles from "./AutoSlider.module.css";
import Alliance from "../../../public/logos/Alliance.png";
import Apex from "../../../public/logos/Apex.png";
import BetBoom from "../../../public/logos/BetBoom.png";
import Fart_Studios from "../../../public/logos/Fart_Studios.png";
import Heroic from "../../../public/logos/Heroic.png";
import Hokori from "../../../public/logos/Hokori.png";
import Natus_Vincere_Junior from "../../../public/logos/Natus_Vincere_Junior.png";
import OG_RB from "../../../public/logos/OG_RB.png";
import Shopify_Rebellion from "../../../public/logos/Shopify_Rebellion.png";
import Team_Liquid from "../../../public/logos/Team_Liquid.png";
import Team_Secret from "../../../public/logos/Team_Secret.png";
import Team_Spirit from "../../../public/logos/Team_Spirit.png";
import Tundra_Esports from "../../../public/logos/Tundra_Esports.png";
import VirtusPro from "../../../public/logos/VirtusPro.png";

export default function AutoSlider() {
  return (
    <div className={styles.sliderContainer}>
      <div
        className={styles.slider}
        style={{ "--width": "100px", "--height": "100px", "--quantity": "10" }}
      >
        <div className={styles.list}>
          <div className={styles.item} style={{ "--position": "1" }}>
            <img src={Heroic.src} alt="" />
          </div>
          <div className={styles.item} style={{ "--position": "2" }}>
            <img src={Hokori.src} alt="" />
          </div>
          <div className={styles.item} style={{ "--position": "3" }}>
            <img src={Team_Liquid.src} alt="" />
          </div>
          <div className={styles.item} style={{ "--position": "4" }}>
            <img src={Natus_Vincere_Junior.src} alt="" />
          </div>
          <div className={styles.item} style={{ "--position": "5" }}>
            <img src={OG_RB.src} alt="" />
          </div>
          <div className={styles.item} style={{ "--position": "6" }}>
            <img src={VirtusPro.src} alt="" />
          </div>
          <div className={styles.item} style={{ "--position": "7" }}>
            <img src={Apex.src} alt="" />
          </div>
          <div className={styles.item} style={{ "--position": "8" }}>
            <img src={BetBoom.src} alt="" />
          </div>
          <div className={styles.item} style={{ "--position": "9" }}>
            <img src={Team_Liquid.src} alt="" />
          </div>
          <div className={styles.item} style={{ "--position": "10" }}>
            <img src={Fart_Studios.src} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
