import React, { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.css";
import Flickity from "flickity";
import "flickity/css/flickity.css";
import Card from "../UI/Card";
// import manImg from "../../assets/smilling-man.png";
// import Button from "../UI/Button";
import Partners from "../Layout/Partners";
import "../../App.css";
import { Arrays } from "../../utils/Arrays";

function HomeBody() {
  // const [activeShippingRate, setActiveShippingRate] = useState("container");
  // const [activeOptionRate, setActiveOptionRate] = useState(0);
  const [openQuestion, setOpenQuestion] = useState(null);

  const flickityRef = useRef(null);

  useEffect(() => {
    // Initialize Flickity when the component mounts
    flickityRef.current = new Flickity(".carousel", {
      cellAlign: "center",
      contain: false,
      wrapAround: true,
      autoPlay: 2000,
      prevNextButtons: false,
      pageDots: false,
    });

    // Clean up and destroy Flickity when the component unmounts
    return () => flickityRef.current.destroy();
  }, []);

  // const handleParagraphClick = (paragraphId) => {
  //   setActiveShippingRate(paragraphId);
  // };

  // const handleRateOptionIndex = (index) => {
  //   setActiveOptionRate(index);
  // };

  // Function to handle question clicks
  const handleQuestionClick = (index) => {
    if (openQuestion === index) {
      setOpenQuestion(null);
    } else {
      setOpenQuestion(index);
    }
  };

  return (
    <div>
      {/*  */}
      <div className={`${styles.hero} ${styles.body}`}>
        <div className={styles.body_about_parent}>
          <div className={styles.body_about}>
            <div>
              <h1>Going beyond ordinary for your business</h1>
              <p>
                With a relentless focus on efficiency, reliability, and
                innovation, we specialize in optimizing warehouses and logistics
                operations to drive unparalleled success for businesses of all
                sizes.{" "}
              </p>
            </div>
          </div>
          <div className={styles.body_about_cards}>
            {Arrays.tenon_about.map((data, index) => (
              <Card className={styles.card} key={index}>
                <div className={styles.svg_wrapper}>
                  <img src={data.svg} alt={data.header} />
                </div>
                <p>{data.header}</p>
                <p>{data.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
      {/* features */}
      <div className={styles.body_features}>
        <div className={styles.body_features_inner}>
          <div className={styles.body_features_header}>
            <h1>Features made just for you</h1>
            <p>
              With a relentless focus on efficiency, reliability, and
              innovation, we specialize in optimizing warehouses and logistics
              operations to drive unparalleled success for businesses of all
              sizes.{" "}
            </p>
          </div>
          <div className={styles.body_features_main}>
            {Arrays.tenon_features.map((data, index) => (
              <div className={styles.body_features_main_wrapper} key={index}>
                <Card className={styles.body_features_main_first_card}>
                  <div className={styles.svg_wrapper}>
                    <img src={data.card_info.svg} alt="icon" />
                  </div>
                  <p>{data.card_info.header}</p>
                  <p>{data.card_info.text}</p>
                  <p>Learn more</p>
                </Card>
                {data.detailedInfo && (
                  <Card className={styles.body_features_main_second_card}>
                    <div className={styles.svg_wrapper}>
                      <img src={data.svg} alt="icon" />
                    </div>
                    <p>{data.header}</p>
                    <div
                      className={styles.body_features_main_second_card_inner}
                    >
                      <div
                        className={styles.body_features_main_second_card_text}
                      >
                        <p>{data.detailedInfo.header}</p>
                        <p>{data.detailedInfo.text}</p>
                      </div>

                      <div
                        className={
                          styles.body_features_main_second_card_inner_second
                        }
                      >
                        <svg
                          width="2"
                          height="82"
                          viewBox="0 0 2 82"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <line
                            x1="1.04883"
                            y1="0.220703"
                            x2="1.04883"
                            y2="81.2207"
                            stroke="#DCDEE6"
                          />
                        </svg>
                        <div
                          className={styles.body_features_main_second_card_text}
                        >
                          <p>{data.detailedInfo.header_two}</p>
                          <p>{data.detailedInfo.text_two}</p>
                        </div>
                      </div>
                    </div>
                    <p>Learn more</p>
                  </Card>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Shipping rates */}
      {/* <div className={styles.body_features}>
        <div className={styles.body_features_inner}>
          <div className={styles.body_features_header}>
            <h1>Shipping rates</h1>
            <div className={styles.shipping_header}>
              <p
                className={
                  activeShippingRate === "container" ? `${styles.clicked}` : ""
                }
                onClick={() => handleParagraphClick("container")}
              >
                Container
              </p>

              <p
                className={
                  activeShippingRate === "breakbulk" ? `${styles.clicked}` : ""
                }
                onClick={() => handleParagraphClick("breakbulk")}
              >
                Break bulk
              </p>
            </div>
          </div>

          <div className={styles.rateOptionsFilter}>
            <div className={styles.rateContainer}>
              {activeShippingRate === "container" && (
                <div className={styles.rateFilter}>
                  <label>Size</label>
                  <select>
                    <option value="3">Placeholder</option>
                  </select>
                </div>
              )}

              <div className={styles.rateFilter}>
                <label>Type</label>
                <select>
                  <option value="3">Placeholder</option>
                </select>
              </div>
            </div>

            <div className={styles.rateOptions}>
              {Arrays.rateOptions.map((data, index) => (
                <div
                  className={
                    activeOptionRate === index
                      ? `${styles.rateOptionsWrapper}`
                      : `${styles.clickedRateOptionsWrapper}`
                  }
                  onClick={() => handleRateOptionIndex(index)}
                  key={index}
                >
                  <p>{data}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.rates_card_wrapper}>
            {Arrays.rateOptions.map((data) => (
              <Card className={styles.ratesCard} key={data}>
                <div className={styles.rates_card_header}>
                  <p>CompanyName</p>
                  <p>JPNGO - EPGPSW</p>
                </div>
                <div>
                  <h1>$3000</h1>
                </div>

                <div className={styles.rates_card_info}>
                  <div>
                    <p>Sailing date</p>
                    <h2>N/A</h2>
                  </div>
                  <div>
                    <p>Transit time</p>
                    <h2>30 days</h2>
                  </div>
                  <div>
                    <p>Free days</p>
                    <h2>10 days</h2>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className={styles.btn}>
            <Button>See more</Button>
          </div>
        </div>
      </div> */}
      {/* partners */}
      <Partners />

      {/* data driven section */}

      <div className={`${styles.hero} ${styles.body2}`}>
        <div className={styles.body_about_parent}>
          <div className={styles.body_about}>
            <div>
              <h1>We are a data driven organization</h1>
              <p>
                With a relentless focus on efficiency, reliability, and
                innovation, we specialize in optimizing warehouses and logistics
                operations to drive unparalleled success for businesses of all
                sizes.
              </p>
            </div>
          </div>
          <div className={styles.body_about_cards}>
            <Card className={styles.data_card}>
              <h1>30 billion</h1>
              <p>Total cargo handled</p>
            </Card>
            <Card className={styles.data_card}>
              <h1>$59,000,000</h1>
              <p>Value of cargo handled</p>
            </Card>
            <Card className={styles.data_card}>
              <h2>Total man hours -</h2>
              <h3>LTI - </h3>
            </Card>
            <Card className={styles.data_card}>
              <h1>30 billion</h1>
              <p>HSE metrics</p>
            </Card>
          </div>
        </div>
      </div>
      {/* FAQ's */}
      <div className={`${styles.hero} ${styles.body}`}>
        <div className={styles.body_about_parent}>
          <div className={styles.body_about}>
            <div>
              <h1>Frequently asked questions</h1>
              <p>
                With a relentless focus on efficiency, reliability, and
                innovation, we specialize in optimizing warehouses and logistics
                operations to drive unparalleled success for businesses of all
                sizes.
              </p>
            </div>
          </div>
          <div className={styles.faq}>
            {Arrays.faqData.map((data, index) => (
              <div
                className={`${styles.faq_list} ${
                  openQuestion === index ? styles.open : ""
                }`}
                key={index}
                onClick={() => handleQuestionClick(index)}
              >
                <div className={styles.faq_header}>
                  <h1>{data.question}</h1>
                  <svg
                    className={`${styles.arrow} ${
                      openQuestion === index ? styles.rotated : ""
                    }`}
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.5486 13.3929L17.4986 8.44287L18.9126 9.85687L12.5486 16.2209L6.18457 9.85687L7.59857 8.44287L12.5486 13.3929Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <p
                  className={`${styles.answer} ${
                    openQuestion === index ? styles.open : ""
                  }`}
                >
                  {data.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className={styles.gallery}>
        <h1>Our Gallery:</h1>
        <div className={styles.carousel_container}>
          <div className="carousel">
            {Arrays.gallery_images.map((data, index) => (
              <div className={styles.gallery_img} key={index}>
                <div className={styles.gallery_wrapper}>
                  <img src={data} alt="gallery" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBody;
