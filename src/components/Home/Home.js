import React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Pricing from "../Fricing/Fricing";
import Testimonials from "../Testimonials/Testimonials";
import FAQ from "../FAQ/FAQ";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
