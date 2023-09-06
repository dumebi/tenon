import React, { useEffect, useMemo, useState } from "react";
import styles from "./Hero.module.css";
import heroImage from "../../assets/hero-img.png";
import Button from "../UI/Button";
import { Link } from "react-router-dom";
import company1 from "../../assets/image 1.png";
import company2 from "../../assets/image 2.png";
import company3 from "../../assets/image 3.png";
import company4 from "../../assets/image 4.png";
import company5 from "../../assets/image 5.png";
import company6 from "../../assets/image 6.png";

function Hero() {
  const phrases = useMemo(
    () => ["Warehousing", "Supply chain", "Freight forwarding"],
    []
  );
  const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isHidden, setIsHidden] = useState(false);

  // Array of all the images of rusted companies in africa
  const companies = [
    { img: company4 },
    { img: company1 },
    { img: company5 },
    { img: company6 },
    { img: company3 },
    { img: company2 },
  ];

  //side effect to change the phrase change in the hero section
  useEffect(() => {
    const interval = setInterval(() => {
      setIsHidden(true);

      setTimeout(() => {
        setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setCurrentPhrase(phrases[phraseIndex]);
        setIsHidden(false);
      }, 500);
    }, 800);

    return () => clearInterval(interval);
  }, [phraseIndex, phrases]);

  return (
    <div className={styles.hero}>
      <div className={styles.hero_container}>
        <div className={styles.hero_container_info}>
          <div className={styles.hero_container_info_inner}>
            <div>
              <h1>
                World class{" "}
                <span
                  className={`${styles.textAnimation} ${
                    isHidden ? styles.hidden : ""
                  }`}
                  key={phraseIndex}
                >
                  {currentPhrase}
                </span>{" "}
                solutions for you
              </h1>
            </div>
            <div>
              <p>
                With a relentless focus on efficiency, reliability, and
                innovation, we specialize in optimizing warehouses and logistics
                operations to drive unparalleled success for businesses of all
                sizes.{" "}
              </p>
            </div>

            <Link to="/services">
              <div>
                <Button>Explore services</Button>
              </div>
            </Link>
          </div>
        </div>

        <div className={styles.hero_image}>
          <div className={styles.hero_image_wrapper}>
            <img src={heroImage} alt="hero_image" />
          </div>
        </div>
      </div>

      <div className={styles.hero_container_companies}>
        <h2>Trusted by top companies in Africa</h2>

        <div className={styles.hero_container_info_companies}>
          {companies.map((companies, index) => (
            <div key={index} className={styles.comapnies_images}>
              <div className={styles.comapnies_images_wrapper}>
                <img src={companies.img} alt="companies" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
