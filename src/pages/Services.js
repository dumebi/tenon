import React, { useEffect, useRef } from "react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import Flickity from "flickity";
import "flickity/css/flickity.css";
import styles from "../components/Sections/Service.module.css";
import Button from "../components/UI/Button";
import freightImg from "../assets/freight.png";
import warehouse from "../assets/warehouse.png";
import logistics from "../assets/logistics.png";
import barging from "../assets/barging.png";
import service6 from "../assets/service6.png";
import air from "../assets/air-freight.png";
import ocean from "../assets/ocean-freight.png";
import rail from "../assets/rail-freight.png";
import Card from "../components/UI/Card";
import { Arrays } from "../utils/Arrays";

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

  setTimeout(() => {
    // Get the URL hash part
    const hash = window.location.hash;

    // Check if hash exists and starts with '#'
    if (hash && hash.startsWith("#")) {
      // Extract the part after '#'
      const hashPart = hash.substring(0);
      scrollToSection(hashPart);
    }
  }, 1500);

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
            <div onClick={() => scrollToSection("#services")}>
              <Button>Explore services</Button>
            </div>
            <div className={styles.carousel_container}>
              <div className="service_carousel">
                {Arrays.service_images.map((image, index) => {
                  return (
                    <div key={index} className={styles.service_images}>
                      <div className={styles.service_images_wrapper}>
                        <img src={image} alt="services" />
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
          <div className={styles.service_wrapper} id="logistics">
            <div className={styles.services_text}>
              <h1>Logistics</h1>
              <p>
                Tenon Logistics operates a hybrid logistics model suitable for
                movement of cargo in and out of the country as well as movements
                within the country. This model enhances cargo delivery
                efficiency as we take advantage of the vast and interwoven
                network of water and land resources across the country. We
                deploy the use of barges and trucks in the movement of cargos to
                client designated location in a hybrid manner.
              </p>
              <div>
                <Button>Book now</Button>
              </div>
            </div>
            <div className={styles.services_info_images}>
              <div className={styles.services_images_inner}>
                <div className={styles.services_images_wrapper}>
                  <img src={logistics} alt="service" />
                </div>
              </div>
            </div>
          </div>

          {/* Freight forwarding */}
          <div className={styles.second_service_wrapper} id="freight">
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
                    <img src={air} alt="freight" />
                  </div>
                </div>
                <h1>Air freight</h1>
                <p>
                  Tenon Logistics works with carefully selected airlines with
                  world class services for cargo delivery thus ensuring that
                  deadlines for project executions are met with a team of
                  dedicated logistics experts monitoring the entire process.  
                </p>
                <div>
                  <Button>Book now</Button>
                </div>
              </Card>

              <Card className={styles.freight_card}>
                <div className={styles.freight_card_image}>
                  <div className={styles.freight_card_image_wrapper}>
                    <img src={ocean} alt="freight" />
                  </div>
                </div>
                <h1>Ocean freight</h1>
                <p>
                  Our company delights in ensuring that client cargos are
                  shipped timely and efficiently in manners that do not add
                  extra cost to the client by working with world class shipping
                  lines regionally and globally.  
                </p>
                <div>
                  <Button>Book now</Button>
                </div>
              </Card>

              <Card className={styles.freight_card}>
                <div className={styles.freight_card_image}>
                  <div className={styles.freight_card_image_wrapper}>
                    <img src={rail} alt="freight" />
                  </div>
                </div>
                <h1>Rail freight</h1>
                <p>
                  Tenon Logistics operates various hybrid logistics solutions
                  combining different solutions. We aspire to latch onto the
                  nations railway network for the movement of cargos across the
                  nation upon regulatory approval.
                </p>
                <div className={styles.btn}>
                  <p>Coming soon</p>
                </div>
              </Card>
            </div>
          </div>

          {/* integrated project procurement */}
          <div className={styles.service_wrapper} id="procurement">
            <div className={styles.services_text}>
              <h1>Integrated Project Procurement</h1>
              <p>
                Given our specialty in procurement related activities, Tenon
                Logistics specializes in seamless and timely procurement and
                delivery of cost efficient and fit for purpose materials and
                equipments from reputable global and local brands with keen
                interest in quality to our clients.
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
          <div className={styles.second_service_wrapper} id="haulage">
            <div className={styles.second_service_header}>
              <h1>Haulage</h1>
              <p>
                Tenon logistics runs a dynamic hybrid haulage model combining
                maritime transportation using barges and land transportation
                using our trucks given the uniqueness of the Nigerian waterways
                as they crisscross the vast lands of the country. This model has
                been found suitable and efficient by our clients and is also
                ranked the most preferred for bulk cargo delivery.
              </p>
            </div>

            <div className={styles.second_service_freight_list}>
              <Card className={styles.freight_card}>
                <div className={styles.freight_card_image}>
                  <div className={styles.freight_card_image_wrapper}>
                    <img src={barging} alt="freight" />
                  </div>
                </div>
                <h1>Barging</h1>
                <p>
                  Nigeria is blessed with vast waterways cutting across the
                  entire nation thus making maritime transportation of bulk
                  cargo using cargo suitable barges most desirable to our
                  clients. Our team of expert marine transport personnel are
                  deployed to ensure that cargo transportation is done safely
                  and promptly through adequate stakeholder engagement. The
                  barging model saves our client from exposure to claims for
                  demurrage at ports.
                </p>
                <div>
                  <Button className={styles.button}>Book now</Button>
                </div>
              </Card>

              <Card className={styles.freight_card}>
                <div className={styles.freight_card_image}>
                  <div className={styles.freight_card_image_wrapper}>
                    <img src={service6} alt="freight" />
                  </div>
                </div>
                <h1>Trucking</h1>
                <p>
                  Taking advantage of our road networks, Tenon Logistics Limited
                  has invested and acquired various types of trucks suitable for
                  all kinds of cargo delivery with the supervision of our
                  dedicated transportation team.  
                </p>
                <div>
                  <Button className={styles.button}>Book now</Button>
                </div>
              </Card>
            </div>
          </div>

          {/* warehousing */}
          <div className={styles.service_wrapper} id="warehouse">
            <div className={styles.services_text}>
              <h1>Warehousing</h1>
              <p>
                Our warehouses are located at prime business locations and at
                areas close to business districts. Clients no longer have to
                worry about the delivery of cargos when stored with us as we
                deliver the cargos to the designated client location subject to
                contract.
              </p>
              <div>
                <Button>Book now</Button>
              </div>
            </div>
            <div className={styles.services_info_images}>
              <div className={styles.services_images_inner}>
                <div className={styles.services_images_wrapper}>
                  <img src={warehouse} alt="service" />
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
