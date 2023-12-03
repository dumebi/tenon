import React from "react";
import styles from "../components/Sections/Contact.module.css";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import workerImg from "../assets/tenon-worker.png";

function GoogleContact() {
  return (
    <div>
      <Navbar />
      <div className={styles.contact}>
        <div className={styles.contact_container}>
          <div className={styles.contact_info}>
            <div className={styles.worker_image}>
              <div className={styles.worker_image_wrapper}>
                <img src={workerImg} alt="worker" />
              </div>
            </div>
            <h1>Get in touch with us</h1>
            <p>
              We’d love to hear any feedback you have for us. Drop a message and
              we’d get back to you as soon as possible
            </p>
            <div className={styles.contact_methods}>
              <a href="mailto:info@tenonlogistics.com">
                <p>info@tenonlogistics.com</p>
              </a>
              <svg
                width="2"
                height="20"
                viewBox="0 0 2 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.548828"
                  y1="2.18557e-08"
                  x2="0.548827"
                  y2="20"
                  stroke="white"
                />
              </svg>
              <a href="tel:2348165699416">
                <p>+2348165699416</p>
              </a>
              <svg
                width="2"
                height="20"
                viewBox="0 0 2 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.548828"
                  y1="2.18557e-08"
                  x2="0.548827"
                  y2="20"
                  stroke="white"
                />
              </svg>
              <div className={styles.contact_socials}>
                {/* facebook icon */}
                <div>
                  {" "}
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_232_1727)">
                      <path
                        d="M12.0488 2C6.52583 2 2.04883 6.477 2.04883 12C2.04883 16.991 5.70583 21.128 10.4868 21.879L10.4868 14.89L7.94683 14.89L7.94683 12L10.4868 12L10.4868 9.797C10.4868 7.291 11.9788 5.907 14.2638 5.907C15.3578 5.907 16.5018 6.102 16.5018 6.102L16.5018 8.562L15.2418 8.562C13.9988 8.562 13.6118 9.333 13.6118 10.124L13.6118 12L16.3848 12L15.9418 14.89L13.6118 14.89L13.6118 21.879C18.3918 21.129 22.0488 16.99 22.0488 12C22.0488 6.477 17.5718 2 12.0488 2Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_232_1727">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0.0488281)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                {/* twitter icon */}
                <div>
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_232_1730)">
                      <path
                        d="M22.2111 5.65592C21.4477 5.99362 20.6381 6.2154 19.8091 6.31393C20.6829 5.79136 21.3368 4.96894 21.6491 3.99992C20.8291 4.48792 19.9301 4.82992 18.9931 5.01492C18.3637 4.3415 17.5295 3.89489 16.6201 3.74451C15.7107 3.59413 14.7771 3.74842 13.9644 4.18338C13.1517 4.61834 12.5055 5.30961 12.1262 6.14972C11.747 6.98983 11.6559 7.93171 11.8671 8.82893C10.2042 8.74558 8.57746 8.31345 7.09241 7.56059C5.60737 6.80773 4.29725 5.75097 3.24712 4.45893C2.87542 5.09738 2.68008 5.82315 2.68113 6.56193C2.68113 8.01193 3.41913 9.29293 4.54113 10.0429C3.87713 10.022 3.22776 9.84271 2.64713 9.51993L2.64713 9.57193C2.64733 10.5376 2.98149 11.4735 3.59297 12.221C4.20445 12.9684 5.05561 13.4814 6.00213 13.6729C5.38574 13.84 4.73943 13.8646 4.11213 13.7449C4.37899 14.5762 4.89913 15.3031 5.59972 15.824C6.3003 16.3449 7.14625 16.6337 8.01913 16.6499C7.15161 17.3313 6.1583 17.8349 5.09601 18.1321C4.03371 18.4293 2.92325 18.5142 1.82813 18.3819C3.73982 19.6114 5.96522 20.264 8.23813 20.2619C15.9311 20.2619 20.1381 13.8889 20.1381 8.36193C20.1381 8.18193 20.1331 7.99992 20.1251 7.82192C20.944 7.23009 21.6507 6.49694 22.2121 5.65692L22.2111 5.65592Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_232_1730">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0.0488281)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                {/* LinkedIn icon */}

                <div>
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_232_1733)">
                      <path
                        d="M6.98828 5.00002C6.98802 5.53046 6.77705 6.03906 6.40179 6.41394C6.02653 6.78883 5.51772 6.99929 4.98728 6.99902C4.45685 6.99876 3.94825 6.78779 3.57336 6.41253C3.19848 6.03727 2.98802 5.52846 2.98828 4.99802C2.98855 4.46759 3.19951 3.95899 3.57478 3.5841C3.95004 3.20922 4.45885 2.99876 4.98928 2.99902C5.51971 2.99929 6.02832 3.21026 6.4032 3.58552C6.77809 3.96078 6.98855 4.46959 6.98828 5.00002ZM7.04828 8.48002L3.04828 8.48002L3.04828 21L7.04828 21L7.04828 8.48002ZM13.3683 8.48002L9.38828 8.48002L9.38828 21L13.3283 21L13.3283 14.43C13.3283 10.77 18.0983 10.43 18.0983 14.43L18.0983 21L22.0483 21L22.0483 13.07C22.0483 6.90002 14.9883 7.13002 13.3283 10.16L13.3683 8.48002Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_232_1733">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0.0488281)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.contact_input}>
            <iframe
              title="Contact"
              src="https://docs.google.com/forms/d/e/1FAIpQLScXM5JNyZ-BBReaSz0fBw5ucd40-iuKDy1PgjKCvRS4r37JAw/viewform?embedded=true"
              width="100%"
              height="1250vh"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default GoogleContact;
