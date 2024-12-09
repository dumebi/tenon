import React, { useEffect, useState } from "react";
import styles from "../components/Sections/Careers.module.css";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import Api from "../utils/api/Api";
import Card from "../components/UI/Card";

function Careers() {
  const [jobs, setJobs] = useState(null);

  useEffect(() => {
    const fetchJobVacancies = async () => {
      const jobsRes = await Api.fetchVacancies();
      setJobs(jobsRes.data.records);
    };
    fetchJobVacancies();
  }, []);

  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Navbar />
      <div className={styles.careers}>
        <div className={styles.careers_hero}>
          <div className={styles.careers_hero_inner}>
            <h1>Join our team</h1>
            <p>
              With a relentless focus on efficiency, reliability, and
              innovation, we specialize in optimizing warehouses and logistics
              operations to drive unparalleled success for businesses of all
              sizes.{" "}
            </p>
            <svg
              onClick={() => scrollToSection("#openings")}
              width="68"
              height="68"
              viewBox="0 0 68 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.25"
                width="67.5"
                height="68"
                rx="33.75"
                fill="#045159"
              />
              <g clip-path="url(#clip0_701_4540)">
                <path
                  d="M34.0002 35.6475L40.9611 28.6865L42.9495 30.675L34.0002 39.6243L25.0508 30.675L27.0392 28.6865L34.0002 35.6475Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_701_4540">
                  <rect
                    width="33.75"
                    height="33.75"
                    fill="white"
                    transform="translate(17.125 17.125)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>

        <div id="openings" className={styles.careers_opening}>
          <div className={styles.careers_opening_inner}>
            <h1>Our openings</h1>
            <p>
              With a relentless focus on efficiency, reliability, and
              innovation, we specialize in optimizing warehouses and logistics
              operations to drive unparalleled success for businesses of all
              sizes.{" "}
            </p>
          </div>
        </div>
        <div className={styles.team_cards}>
          {jobs
            ?.filter((data) => data?.fields?.Status === "In progress")
            .map((data) => (
              <Card className={styles.join_team_card} key={data?.id}>
                <h1>{data?.fields?.position}</h1>
                <p>
                  We’re looking for a {data?.fields?.position} to join our team.
                </p>
                <div className={styles.join_team_info}>
                  <div>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.0497 4.47991C16.4584 2.88861 14.3002 1.99463 12.0497 1.99463C9.7993 1.99463 7.64103 2.88861 6.04973 4.47991C4.45844 6.07121 3.56445 8.22947 3.56445 10.4799C3.56445 12.7303 4.45844 14.8886 6.04973 16.4799L11.3197 21.7599C11.4127 21.8536 11.5233 21.928 11.6452 21.9788C11.767 22.0296 11.8977 22.0557 12.0297 22.0557C12.1617 22.0557 12.2925 22.0296 12.4143 21.9788C12.5362 21.928 12.6468 21.8536 12.7397 21.7599L18.0497 16.4299C19.6344 14.8452 20.5246 12.696 20.5246 10.4549C20.5246 8.21386 19.6344 6.06459 18.0497 4.47991ZM16.6197 14.9999L12.0497 19.5899L7.47973 14.9999C6.57688 14.0962 5.96221 12.9452 5.71343 11.6922C5.46465 10.4392 5.59292 9.14066 6.08204 7.96059C6.57115 6.78052 7.39915 5.77196 8.46136 5.06239C9.52358 4.35281 10.7723 3.97409 12.0497 3.97409C13.3271 3.97409 14.5759 4.35281 15.6381 5.06239C16.7003 5.77196 17.5283 6.78052 18.0174 7.96059C18.5065 9.14066 18.6348 10.4392 18.386 11.6922C18.1373 12.9452 17.5226 14.0962 16.6197 14.9999ZM9.04973 7.40991C8.24245 8.21968 7.78913 9.31648 7.78913 10.4599C7.78913 11.6033 8.24245 12.7001 9.04973 13.5099C9.6495 14.1107 10.4133 14.521 11.2454 14.6893C12.0774 14.8576 12.9407 14.7765 13.7268 14.4561C14.5129 14.1356 15.1869 13.5902 15.6642 12.8882C16.1415 12.1861 16.4009 11.3588 16.4097 10.5099C16.4142 9.94311 16.3051 9.38117 16.0886 8.8573C15.8722 8.33343 15.553 7.85827 15.1497 7.45991C14.7534 7.05449 14.2808 6.73145 13.7592 6.50938C13.2375 6.2873 12.6771 6.17059 12.1101 6.16594C11.5432 6.16129 10.9809 6.26881 10.4557 6.4823C9.93048 6.69579 9.45266 7.01104 9.04973 7.40991ZM13.7397 12.0899C13.3608 12.4747 12.8599 12.7158 12.3229 12.7722C11.7858 12.8285 11.2458 12.6966 10.7952 12.3988C10.3447 12.1011 10.0115 11.6562 9.85274 11.14C9.69395 10.6238 9.71938 10.0685 9.92469 9.56907C10.13 9.06958 10.5024 8.65693 10.9783 8.40165C11.4542 8.14637 12.004 8.06432 12.5337 8.16953C13.0634 8.27474 13.54 8.56067 13.8822 8.97844C14.2244 9.39621 14.4109 9.91988 14.4097 10.4599C14.3952 11.0772 14.1362 11.6634 13.6897 12.0899H13.7397Z"
                        fill="#556987"
                      />
                    </svg>
                    <p>{data?.fields?.location}</p>
                  </div>
                  <div>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.0488 11H13.0488V7C13.0488 6.73478 12.9435 6.48043 12.7559 6.29289C12.5684 6.10536 12.314 6 12.0488 6C11.7836 6 11.5293 6.10536 11.3417 6.29289C11.1542 6.48043 11.0488 6.73478 11.0488 7V12C11.0488 12.2652 11.1542 12.5196 11.3417 12.7071C11.5293 12.8946 11.7836 13 12.0488 13H15.0488C15.314 13 15.5684 12.8946 15.7559 12.7071C15.9435 12.5196 16.0488 12.2652 16.0488 12C16.0488 11.7348 15.9435 11.4804 15.7559 11.2929C15.5684 11.1054 15.314 11 15.0488 11ZM12.0488 2C10.071 2 8.13762 2.58649 6.49313 3.6853C4.84864 4.78412 3.56691 6.3459 2.81004 8.17317C2.05316 10.0004 1.85513 12.0111 2.24098 13.9509C2.62683 15.8907 3.57924 17.6725 4.97776 19.0711C6.37629 20.4696 8.15812 21.422 10.0979 21.8079C12.0377 22.1937 14.0484 21.9957 15.8757 21.2388C17.7029 20.4819 19.2647 19.2002 20.3635 17.5557C21.4623 15.9112 22.0488 13.9778 22.0488 12C22.0488 10.6868 21.7902 9.38642 21.2876 8.17317C20.7851 6.95991 20.0485 5.85752 19.1199 4.92893C18.1913 4.00035 17.0889 3.26375 15.8757 2.7612C14.6624 2.25866 13.3621 2 12.0488 2ZM12.0488 20C10.4666 20 8.91986 19.5308 7.60427 18.6518C6.28868 17.7727 5.2633 16.5233 4.6578 15.0615C4.0523 13.5997 3.89387 11.9911 4.20255 10.4393C4.51123 8.88743 5.27316 7.46197 6.39198 6.34315C7.5108 5.22433 8.93626 4.4624 10.4881 4.15372C12.04 3.84504 13.6485 4.00346 15.1103 4.60896C16.5721 5.21447 17.8215 6.23984 18.7006 7.55544C19.5796 8.87103 20.0488 10.4177 20.0488 12C20.0488 14.1217 19.206 16.1566 17.7057 17.6569C16.2054 19.1571 14.1706 20 12.0488 20Z"
                        fill="#556987"
                      />
                    </svg>
                    <p>Full-time</p>
                  </div>
                </div>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={data?.fields?.form_links}
                >
                  <div className={styles.btn}>
                    <p>{data?.fields?.form_links ? "Apply" : "Coming soon"}</p>
                  </div>
                </a>
              </Card>
            ))}
        </div>

        <div className={styles.careers_opening}>
          <div className={styles.careers_opening_inner}>
            <h1>Our team values</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Pulvinar nunc tortor et
              quam sapien. Et dictum pharetra sit nisl. Amet vehicula libero
              convallis consequat. Orci sed consectetur rutrum bibendum urna
              nibh lacus aenean. Commodo imperdiet ultrices erat euismod amet.
              Fusce eget mauris imperdiet tempus vel. In nulla nisi phasellus
              neque lorem phasellus. Egestas aenean phasellus et venenatis
              suspendisse magna eget mattis sit. Duis semper turpis tempor eros
              pretium ac. In id morbi at dui sit eu enim tincidunt lacus.
              Tristique tristique id blandit risus nec.
            </p>
          </div>
        </div>

        <div className={styles.careers_opening}>
          <div className={styles.careers_opening_inner}>
            <h1>Our goals</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Pulvinar nunc tortor et
              quam sapien. Et dictum pharetra sit nisl. Amet vehicula libero
              convallis consequat. Orci sed consectetur rutrum bibendum urna
              nibh lacus aenean. Commodo imperdiet ultrices erat euismod amet.
              Fusce eget mauris imperdiet tempus vel. In nulla nisi phasellus
              neque lorem phasellus. Egestas aenean phasellus et venenatis
              suspendisse magna eget mattis sit. Duis semper turpis tempor eros
              pretium ac. In id morbi at dui sit eu enim tincidunt lacus.
              Tristique tristique id blandit risus nec.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Careers;
