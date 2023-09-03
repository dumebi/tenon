import React from "react";
import styles from "./Hero.module.css";
import Card from "../UI/Card";

function HomeBody() {
  return (
    <div>
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
            <Card className={styles.card}>
              <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.548828"
                  y="0.220703"
                  width="44"
                  height="44"
                  rx="10"
                  fill="#CDDCDE"
                />
                <g clip-path="url(#clip0_38_1468)">
                  <path
                    d="M27.5488 25.4657V32.3377C27.5488 32.4261 27.5254 32.513 27.4809 32.5895C27.4363 32.6659 27.3723 32.7292 27.2953 32.7728C27.2184 32.8164 27.1312 32.8388 27.0428 32.8377C26.9543 32.8367 26.8677 32.8121 26.7918 32.7667L22.5488 30.2207L18.3058 32.7667C18.2299 32.8122 18.1432 32.8367 18.0546 32.8377C17.9661 32.8388 17.8789 32.8163 17.8019 32.7725C17.7249 32.7288 17.6609 32.6654 17.6164 32.5888C17.572 32.5122 17.5486 32.4252 17.5488 32.3367V25.4667C16.255 24.4308 15.3148 23.0186 14.8583 21.4252C14.4018 19.8319 14.4514 18.1361 15.0003 16.5722C15.5493 15.0082 16.5704 13.6534 17.9226 12.695C19.2748 11.7365 20.8914 11.2217 22.5488 11.2217C24.2063 11.2217 25.8228 11.7365 27.175 12.695C28.5273 13.6534 29.5484 15.0082 30.0973 16.5722C30.6463 18.1361 30.6959 19.8319 30.2394 21.4252C29.7828 23.0186 28.8427 24.4308 27.5488 25.4667V25.4657ZM22.5488 25.2207C24.1401 25.2207 25.6663 24.5885 26.7915 23.4633C27.9167 22.3381 28.5488 20.812 28.5488 19.2207C28.5488 17.6294 27.9167 16.1033 26.7915 14.978C25.6663 13.8528 24.1401 13.2207 22.5488 13.2207C20.9575 13.2207 19.4314 13.8528 18.3062 14.978C17.181 16.1033 16.5488 17.6294 16.5488 19.2207C16.5488 20.812 17.181 22.3381 18.3062 23.4633C19.4314 24.5885 20.9575 25.2207 22.5488 25.2207ZM22.5488 23.2207C21.488 23.2207 20.4705 22.7993 19.7204 22.0491C18.9703 21.299 18.5488 20.2815 18.5488 19.2207C18.5488 18.1598 18.9703 17.1424 19.7204 16.3923C20.4705 15.6421 21.488 15.2207 22.5488 15.2207C23.6097 15.2207 24.6271 15.6421 25.3773 16.3923C26.1274 17.1424 26.5488 18.1598 26.5488 19.2207C26.5488 20.2815 26.1274 21.299 25.3773 22.0491C24.6271 22.7993 23.6097 23.2207 22.5488 23.2207Z"
                    fill="#02292D"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_38_1468">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(10.5488 10.2207)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <p>One-Stop Solution</p>
              <p>
                With a relentless focus on efficiency, reliability, and
                innovation, we specialize in optimizing warehouses and logistics
              </p>
            </Card>
            <Card className={styles.card}>
              <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.548828"
                  y="0.220703"
                  width="44"
                  height="44"
                  rx="10"
                  fill="#CDDCDE"
                />
                <g clip-path="url(#clip0_38_1442)">
                  <path
                    d="M31.5488 18.2206C32.0793 18.2206 32.588 18.4313 32.963 18.8064C33.3381 19.1815 33.5488 19.6902 33.5488 20.2206V24.2206C33.5488 24.751 33.3381 25.2597 32.963 25.6348C32.588 26.0099 32.0793 26.2206 31.5488 26.2206H30.4868C30.243 28.1539 29.3021 29.9318 27.8406 31.2206C26.3791 32.5094 24.4974 33.2206 22.5488 33.2206V31.2206C24.1401 31.2206 25.6663 30.5885 26.7915 29.4632C27.9167 28.338 28.5488 26.8119 28.5488 25.2206V19.2206C28.5488 17.6293 27.9167 16.1032 26.7915 14.978C25.6663 13.8527 24.1401 13.2206 22.5488 13.2206C20.9575 13.2206 19.4314 13.8527 18.3062 14.978C17.181 16.1032 16.5488 17.6293 16.5488 19.2206V26.2206H13.5488C13.0184 26.2206 12.5097 26.0099 12.1346 25.6348C11.7595 25.2597 11.5488 24.751 11.5488 24.2206V20.2206C11.5488 19.6902 11.7595 19.1815 12.1346 18.8064C12.5097 18.4313 13.0184 18.2206 13.5488 18.2206H14.6108C14.8549 16.2875 15.7959 14.5099 17.2574 13.2213C18.7189 11.9327 20.6004 11.2217 22.5488 11.2217C24.4973 11.2217 26.3788 11.9327 27.8403 13.2213C29.3017 14.5099 30.2428 16.2875 30.4868 18.2206H31.5488ZM18.3088 26.0056L19.3688 24.3096C20.3219 24.9066 21.4242 25.2224 22.5488 25.2206C23.6735 25.2224 24.7758 24.9066 25.7288 24.3096L26.7888 26.0056C25.5181 26.8017 24.0484 27.2229 22.5488 27.2206C21.0493 27.2229 19.5796 26.8017 18.3088 26.0056Z"
                    fill="#02292D"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_38_1442">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(10.5488 10.2207)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <p>Great customer experience</p>
              <p>
                With a relentless focus on efficiency, reliability, and
                innovation, we specialize in optimizing warehouses and logistics
              </p>
            </Card>
            <Card className={styles.card}>
              <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.548828"
                  y="0.220703"
                  width="44"
                  height="44"
                  rx="10"
                  fill="#CDDCDE"
                />
                <g clip-path="url(#clip0_38_1464)">
                  <path
                    d="M22.5488 32.2207C17.0258 32.2207 12.5488 27.7437 12.5488 22.2207C12.5488 16.6977 17.0258 12.2207 22.5488 12.2207C28.0718 12.2207 32.5488 16.6977 32.5488 22.2207C32.5488 27.7437 28.0718 32.2207 22.5488 32.2207ZM23.5488 22.2207V17.2207H21.5488V24.2207H27.5488V22.2207H23.5488Z"
                    fill="#02292D"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_38_1464">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(10.5488 10.2207)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <p>Real time reporting</p>{" "}
              <p>
                With a relentless focus on efficiency, reliability, and
                innovation, we specialize in optimizing warehouses and logistics
              </p>
            </Card>
            <Card className={styles.card}>
              <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.548828"
                  y="0.220703"
                  width="44"
                  height="44"
                  rx="10"
                  fill="#CDDCDE"
                />
                <path
                  d="M12.5986 23.2208H18.0766C18.2556 26.4896 19.3067 29.5261 21.0013 32.1017C16.5369 31.4079 13.0494 27.761 12.5986 23.2208ZM12.5986 21.2208C13.0494 16.6805 16.5369 13.0336 21.0013 12.3398C19.3067 14.9154 18.2556 17.9519 18.0766 21.2208H12.5986ZM32.4999 21.2208H27.0219C26.8429 17.9519 25.7918 14.9154 24.0972 12.3398C28.5616 13.0336 32.0491 16.6805 32.4999 21.2208ZM32.4999 23.2208C32.0491 27.761 28.5616 31.4079 24.0972 32.1017C25.7918 29.5261 26.8429 26.4896 27.0219 23.2208H32.4999ZM20.08 23.2208H25.0185C24.8469 26.0036 23.9639 28.594 22.5492 30.8123C21.1345 28.594 20.2516 26.0036 20.08 23.2208ZM20.08 21.2208C20.2516 18.4379 21.1345 15.8475 22.5492 13.6292C23.9639 15.8475 24.8469 18.4379 25.0185 21.2208H20.08Z"
                  fill="#3E414C"
                />
              </svg>
              <p>Global solutions</p>{" "}
              <p>
                With a relentless focus on efficiency, reliability, and
                innovation, we specialize in optimizing warehouses and logistics
              </p>
            </Card>
          </div>
        </div>
      </div>{" "}
      {/* features */}
      <div className={styles.body_features}>
        <div className={styles.body_features_header}>
          <h1>Features made just for you</h1>
          <p>
            With a relentless focus on efficiency, reliability, and innovation,
            we specialize in optimizing warehouses and logistics operations to
            drive unparalleled success for businesses of all sizes.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeBody;
