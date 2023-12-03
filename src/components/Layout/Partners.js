import React from "react";
import styles from "./Partners.module.css";
import partner1 from "../../assets/partners/image 1.png";
import partner2 from "../../assets/partners/image 2.png";
import partner3 from "../../assets/partners/image 3.png";
import partner4 from "../../assets/partners/image 4.png";
import partner5 from "../../assets/partners/image 5.png";
import partner6 from "../../assets/partners/image 6.png";
import partner7 from "../../assets/partners/image 7.png";
import partner8 from "../../assets/partners/image 8.png";

function Partners() {
  const partners = [
    { img: partner4 },
    { img: partner1 },
    { img: partner5 },
    { img: partner6 },
    { img: partner3 },
    { img: partner2 },
    { img: partner7 },
    { img: partner8 },
  ];
  return (
    <div className={styles.partners}>
      <div className={styles.partners_header}>
        <h1>Our Partners:</h1>
      </div>
      <div className={styles.partners_list}>
        {partners.map((data, index) => (
          <div key={index} className={styles.partners_image}>
            <div className={styles.partners_image_wrapper}>
              <img src={data.img} alt="partners" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partners;
