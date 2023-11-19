import React from "react";
import Navbar from "../components/Layout/Navbar";
import Hero from "../components/Sections/Hero";
import Footer from "../components/Layout/Footer";
import HomeBody from "../components/Sections/HomeBody";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HomeBody />
      <Footer />
    </div>
  );
}

export default Home;
