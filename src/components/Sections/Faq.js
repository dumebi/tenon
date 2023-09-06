import React, { useState } from "react";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import styles from "./TermsAndConditions.module.css";

const faqData = [
  {
    question: "How long does it take to ship my order?",
    answer:
      "Orders are usually shipped within 1-2 business days after placing the order.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "Orders are usually shipped within 1-2 business days after placing the order.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "Orders are usually shipped within 1-2 business days after placing the order.",
  },
  {
    question: "How long does it take to ship my order?",
    answer:
      "Orders are usually shipped within 1-2 business days after placing the order.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "Orders are usually shipped within 1-2 business days after placing the order.",
  },
  {
    question: "How long does it take to ship my order?",
    answer:
      "Orders are usually shipped within 1-2 business days after placing the order.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "Orders are usually shipped within 1-2 business days after placing the order.",
  },
];

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
          {faqData.map((data, index) => (
            <div
              className={styles.faq_list}
              key={index}
              onClick={() => handleQuestionClick(index)}
            >
              <div className={styles.faq_header}>
                <h1>{data.question}</h1>
                {openQuestion === index ? (
                  <svg
                    onClick={() => handleQuestionClick(null)}
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_41_1618)">
                      <path
                        d="M12.5486 11.0487L7.59857 15.9987L6.18457 14.5847L12.5486 8.2207L18.9126 14.5847L17.4986 15.9987L12.5486 11.0487Z"
                        fill="#3E414C"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_41_1618">
                        <rect
                          width="24"
                          height="24"
                          fill="#3E414C"
                          transform="translate(0.548828 0.220703)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                ) : (
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_41_1622)">
                      <path
                        d="M12.5486 13.3929L17.4986 8.44287L18.9126 9.85687L12.5486 16.2209L6.18457 9.85687L7.59857 8.44287L12.5486 13.3929Z"
                        fill="#3E414C"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_41_1622">
                        <rect
                          width="24"
                          height="24"
                          fill="#3E414C"
                          transform="translate(0.548828 0.220703)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                )}
              </div>
              {openQuestion === index && <p>{data.answer}</p>}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Faq;
