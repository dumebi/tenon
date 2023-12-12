import React from "react";
import styles from "./Hero.module.css";
import heroImage from "../../assets/about-hero.png";
import Partners from "../Layout/Partners";
import Card from "../UI/Card";
import { Arrays } from "../../utils/Arrays";

function About() {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_container}>
        <div className={styles.hero_container_info}>
          <div className={styles.hero_container_info_inner}>
            <div>
              <h1>
                We are a <span>Supply chain</span> management solutions provider
              </h1>
            </div>
            <div>
              <p>
                You are welcome to experience the Tenon Logistics way of problem
                solving.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.hero_image}>
          <div className={styles.hero_image_wrapper}>
            <img src={heroImage} alt="hero_image" />
          </div>
        </div>
      </div>

      {/* Our story */}

      <div className={styles.our_story_container}>
        <div>
          <h1>Our story</h1>
        </div>
        <div className={styles.our_story_container_inner}>
          <p>
            Established in 2022, Tenon Logistics Limited emerged as a natural
            progression from the success achieved by Tenon Ventures. With a
            strong foundation in trading and delivering logistics solutions
            across diverse sectors, the demand for expanded services by our
            clients drove our incorporation.
          </p>
          <div className={styles.our_story_container_inner_text}>
            <h3>One Stop Shop</h3>
            <p>
              Tenon Logistics Limited is a distinguished provider of end-to-end
              Supply Chain Management services. Our professional integration
              encompasses a comprehensive suite of offerings, including
              Logistics, Warehousing, Haulage, Freight-Forwarding, and
              Integrated Project Procurement.
            </p>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className={styles.team}>
        <div className={styles.team_inner}>
          <div className={styles.body_features_header}>
            <h1>Meet the team</h1>
            <p>As a company, our people are our greatest asset.</p>
          </div>
          <div className={styles.team_list}>
            {Arrays.team?.map((data, index) => (
              <Card key={index} className={styles.team_profile_card}>
                <div className={styles.team_image}>
                  <div className={styles.team_image_wrapper}>
                    <img src={data.image} alt="Team" />
                  </div>
                </div>
                <div className={styles.team_info}>
                  <h1>{data.name}</h1>
                  <p>{data.position}</p>
                  <p>{data.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Partners */}
      <Partners />
    </div>
  );
}

export default About;
