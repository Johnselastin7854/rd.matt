import React from "react";
import Hero from "../containers/Hero";
import Service from "../containers/Service";
import Specialized from "../containers/Specialized";
import WeServe from "../containers/WeServe";
import Testimonial from "../components/Testimonial";
import Form from "../components/Form";
import FaqSection from "../containers/FaqSection";
import Contact from "../components/Contact";

function Home() {
  return (
    <div>
      <Hero />
      <Service />
      <Specialized />
      <WeServe />
      <Testimonial />
      <Form />
      <FaqSection />
      <Contact />
    </div>
  );
}

export default Home;
