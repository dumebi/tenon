import React, { useState } from "react";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import styles from "./TermsAndConditions.module.css";
import { Arrays } from "../../utils/Arrays";

function Faq() {
  const [openQuestion, setOpenQuestion] = useState(null);

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
      <Navbar />
      <div className={styles.tc}>
        <div className={styles.tc_header}>
          <h1>Frequently asked questions</h1>
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
                    fill="#3E414C"
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
      <Footer />
    </div>
  );
}

export default Faq;
