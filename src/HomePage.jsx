import React from "react";
import Hero from "./Pages/Hero";
import Collection from "./components/Collection";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Collection />
      <Features />
      <Testimonials />
    </>
  );
};

export default HomePage;
