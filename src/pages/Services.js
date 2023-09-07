import React, { useEffect, useRef } from "react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import Flickity from "flickity";
import "flickity/css/flickity.css";
import styles from "../components/Sections/Service.module.css";
import Button from "../components/UI/Button";
import serviceImg from "../assets/tenon_services.png";
import freightImg from "../assets/freight.png";
import Card from "../components/UI/Card";

const items = Array.from({ length: 4 });

function Services() {
  const flickityRef = useRef(null);

  useEffect(() => {
    // Initialize Flickity when the component mounts
    flickityRef.current = new Flickity(".service_carousel", {
      cellAlign: "center",
      contain: true,
      wrapAround: true,
      autoPlay: 5000,
      prevNextButtons: false,
      pageDots: true,
    });

    // Clean up and destroy Flickity when the component unmounts
    return () => flickityRef.current.destroy();
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
      <div className={styles.services}>
        {/* Service Hero */}
        <div className={styles.services_hero}>
          <div className={styles.services_hero_container}>
            <h1>
              Your <span>One-stop-shop</span> for all supply chain management
              solutions{" "}
            </h1>
            <p>
              With a relentless focus on efficiency, reliability, and
              innovation, we specialize in optimizing warehouses and logistics
              operations to drive unparalleled success for businesses of all
              sizes.{" "}
            </p>
            <div onClick={() => scrollToSection("#services")}>
              <Button>Explore services</Button>
            </div>
            <div className={styles.carousel_container}>
              <div className="service_carousel">
                {items.map((index) => {
                  return (
                    <div key={index} className={styles.service_images}>
                      <div className={styles.service_images_wrapper}>
                        <img src={serviceImg} alt="services" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div id="services" className={styles.all_services}>
          {/* services */}
          <div className={styles.service_wrapper}>
            <div className={styles.services_text}>
              <h1>Logistics</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Viverra morbi etiam amet
                tempor diam netus ultrices. Tempus vitae habitasse aliquet etiam
                amet vitae pharetra. At tristique pellentesque.
              </p>
              <div>
                <Button>Book now</Button>
              </div>
            </div>
            <div className={styles.services_info_images}>
              <div className={styles.services_images_inner}>
                <div className={styles.services_images_wrapper}>
                  <img src={freightImg} alt="service" />
                </div>
              </div>
            </div>
          </div>

          {/* Freight forwarding */}
          <div className={styles.second_service_wrapper}>
            <div className={styles.second_service_header}>
              <h1>Freight forwarding</h1>
              <p>
                With a relentless focus on efficiency, reliability, and
                innovation, we specialize in optimizing{" "}
              </p>
            </div>

            <div className={styles.second_service_freight_list}>
              <Card className={styles.freight_card}>
                <div className={styles.freight_card_image}>
                  <div className={styles.freight_card_image_wrapper}>
                    <img src={freightImg} alt="freight" />
                  </div>
                </div>
                <h1>Air freight</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Viverra morbi etiam
                  amet tempor diam netus ultrices. Tempus vitae habitasse
                  aliquet etiam amet vitae pharetra. At tristique pellentesque.
                </p>
                <div>
                  <Button>Book now</Button>
                </div>
              </Card>

              <Card className={styles.freight_card}>
                <div className={styles.freight_card_image}>
                  <div className={styles.freight_card_image_wrapper}>
                    <img src={freightImg} alt="freight" />
                  </div>
                </div>
                <h1>Ocean freight</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Viverra morbi etiam
                  amet tempor diam netus ultrices. Tempus vitae habitasse
                  aliquet etiam amet vitae pharetra. At tristique pellentesque.
                </p>
                <div>
                  <Button>Book now</Button>
                </div>
              </Card>

              <Card className={styles.freight_card}>
                <div className={styles.freight_card_image}>
                  <div className={styles.freight_card_image_wrapper}>
                    <img src={freightImg} alt="freight" />
                  </div>
                </div>
                <h1>Rail freight</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Viverra morbi etiam
                  amet tempor diam netus ultrices. Tempus vitae habitasse
                  aliquet etiam amet vitae pharetra. At tristique pellentesque.
                </p>
                <div>
                  <Button>Book now</Button>
                </div>
              </Card>
            </div>
          </div>

          {/* integrated project precureent */}
          <div className={styles.service_wrapper}>
            <div className={styles.services_text}>
              <h1>Integrated Project Procurement</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Viverra morbi etiam amet
                tempor diam netus ultrices. Tempus vitae habitasse aliquet etiam
                amet vitae pharetra. At tristique pellentesque.
              </p>
              <div>
                <Button>Book now</Button>
              </div>
            </div>
            <div className={styles.services_info_images}>
              <div className={styles.services_images_inner}>
                <div className={styles.services_images_wrapper}>
                  <img src={freightImg} alt="service" />
                </div>
              </div>
            </div>
          </div>

          {/* Haulage  */}
          <div className={styles.second_service_wrapper}>
            <div className={styles.second_service_header}>
              <h1>Haulage</h1>
              <p>
                With a relentless focus on efficiency, reliability, and
                innovation, we specialize in optimizing
              </p>
            </div>

            <div className={styles.second_service_freight_list}>
              <Card className={styles.freight_card}>
                <div className={styles.freight_card_image}>
                  <div className={styles.freight_card_image_wrapper}>
                    <img src={freightImg} alt="freight" />
                  </div>
                </div>
                <h1>Barging</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Viverra morbi etiam
                  amet tempor diam netus ultrices. Tempus vitae habitasse
                  aliquet etiam amet vitae pharetra. At tristique pellentesque.
                </p>
                <div>
                  <Button className={styles.button}>Book now</Button>
                </div>
              </Card>

              <Card className={styles.freight_card}>
                <div className={styles.freight_card_image}>
                  <div className={styles.freight_card_image_wrapper}>
                    <img src={freightImg} alt="freight" />
                  </div>
                </div>
                <h1>Trucking</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Viverra morbi etiam
                  amet tempor diam netus ultrices. Tempus vitae habitasse
                  aliquet etiam amet vitae pharetra. At tristique pellentesque.
                </p>
                <div>
                  <Button className={styles.button}>Book now</Button>
                </div>
              </Card>
            </div>
          </div>

          {/* warehousing */}
          <div className={styles.service_wrapper}>
            <div className={styles.services_text}>
              <h1>Warehousing</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Viverra morbi etiam amet
                tempor diam netus ultrices. Tempus vitae habitasse aliquet etiam
                amet vitae pharetra. At tristique pellentesque.
              </p>
              <div>
                <Button>Book now</Button>
              </div>
            </div>
            <div className={styles.services_info_images}>
              <div className={styles.services_images_inner}>
                <div className={styles.services_images_wrapper}>
                  <img src={freightImg} alt="service" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Services;
