import React, { useState } from "react";
import styles from "./Hero.module.css";
import Card from "../UI/Card";
import solutionIcon from "../../assets/svg/Solution.svg";
import communicationIcon from "../../assets/svg/Communication.svg";
import timerIcon from "../../assets/svg/Timer.svg";
import globalIcon from "../../assets/svg/Global.svg";
import bikeIcon from "../../assets/svg/Bike.svg";
import freightIcon from "../../assets/svg/Freight.svg";
import procurementIcon from "../../assets/svg/Product-procurement.svg";
import haulageIcon from "../../assets/svg/Haulage.svg";
import warehouseIcon from "../../assets/svg/warehousing.svg";
import Button from "../UI/Button";

const tenon_about = [
  {
    header: "One-Stop Solution",
    svg: solutionIcon,
    text: "With a relentless focus on efficiency, reliability, and innovation, we specialize in optimizing warehouses and logistics",
  },
  {
    header: "Great customer experience",
    svg: communicationIcon,
    text: "With a relentless focus on efficiency, reliability, and innovation, we specialize in optimizing warehouses and logistics",
  },
  {
    header: "Real time reporting",
    svg: timerIcon,
    text: "With a relentless focus on efficiency, reliability, and innovation, we specialize in optimizing warehouses and logistics",
  },
  {
    header: "Global solutions",
    svg: globalIcon,
    text: "With a relentless focus on efficiency, reliability, and innovation, we specialize in optimizing warehouses and logistics",
  },
];

const tenon_features = [
  {
    header: "Freight forwarding",
    svg: freightIcon,
    card_info: {
      svg: bikeIcon,
      header: "Logistics",
      text: "With a relentless focus on efficiency, reliability, and innovation, we specialize in optimizing warehouses and logistics",
    },
    detailedInfo: {
      header: "Air freight",
      text: "With a relentless focus on efficiency, reliability,",
      header_two: "Ocean freight",
      text_two: "With a relentless focus on efficiency, reliability,",
    },
  },

  {
    header: "Haulage",
    svg: haulageIcon,
    card_info: {
      svg: procurementIcon,
      header: "Integrated project procurement",
      text: "With a relentless focus on efficiency, reliability, and innovation, we specialize in optimizing warehouses and logistics",
    },
    detailedInfo: {
      header: "Barging",
      text: "With a relentless focus on efficiency, reliability,",
      header_two: "Trucking",
      text_two: "With a relentless focus on efficiency, reliability,",
    },
  },

  {
    header: "Haulage",
    svg: haulageIcon,
    card_info: {
      svg: warehouseIcon,
      header: "Warehousing",
      text: "With a relentless focus on efficiency, reliability, and innovation, we specialize in optimizing warehouses and logistics",
    },
    detailedInfo: {
      header: "Barging",
      text: "With a relentless focus on efficiency, reliability,",
      header_two: "Trucking",
      text_two: "With a relentless focus on efficiency, reliability,",
    },
  },
];

const rateOptions = [
  "MSC",
  "MSC",
  "MSC",
  "MSC",
  "MSC",
  "MSC",
  "MSC",
  "MSC",
  "MSC",
];

function HomeBody() {
  const [activeShippingRate, setActiveShippingRate] = useState("container");
  const [activeOptionRate, setActiveOptionRate] = useState(0);

  const handleParagraphClick = (paragraphId) => {
    setActiveShippingRate(paragraphId);
  };

  const handleRateOptionIndex = (index) => {
    setActiveOptionRate(index);
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
            {tenon_about.map((data, index) => (
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
            {tenon_features.map((data, index) => (
              <div className={styles.body_features_main_wrapper} key={index}>
                <Card className={styles.body_features_main_first_card}>
                  <div className={styles.svg_wrapper}>
                    <img src={data.card_info.svg} alt="icon" />
                  </div>
                  <p>{data.card_info.header}</p>
                  <p>{data.card_info.text}</p>
                  <p>Learn more</p>
                </Card>
                <Card className={styles.body_features_main_second_card}>
                  <div className={styles.svg_wrapper}>
                    <img src={data.svg} alt="icon" />
                  </div>
                  <p>{data.header}</p>
                  <div className={styles.body_features_main_second_card_inner}>
                    <div className={styles.body_features_main_second_card_text}>
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
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Shipping rates */}
      <div className={styles.body_features}>
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
              {rateOptions.map((data, index) => (
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
            {rateOptions.map((data) => (
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
      </div>
    </div>
  );
}

export default HomeBody;
