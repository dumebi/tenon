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
                  <a
                    href="https://www.instagram.com/tenonlogistics/?igshid=MzMyNGUyNmU2YQ%3D%3D"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1_2689)">
                        <path
                          d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_2689">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>{" "}
                </div>

                {/* twitter icon */}
                <div>
                  <a
                    href="https://twitter.com/tenonlogistics"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
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
                  </a>
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
