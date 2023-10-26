import React from "react";
import styles from "../components/Sections/Contact.module.css";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";

function GoogleContact() {
  return (
    <div>
      <Navbar />
      <div className={styles.contact}>
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
      <Footer />
    </div>
  );
}

export default GoogleContact;
