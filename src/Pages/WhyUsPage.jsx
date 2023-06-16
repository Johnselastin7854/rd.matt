import React from "react";
import WhyUs from "../components/WhyUs";
import Heading from "../components/Heading";

function WhyUsPage() {
  return (
    <div style={{ backgroundColor: "#003049" }}>
      <Heading
        title="Whyus"
        desc="At Matt Engineering Solutions, we are committed to providing high-quality services to our clients. We believe in building long-term relationships with our clients and providing them with the best possible service.s"
      />
      <WhyUs />
    </div>
  );
}

export default WhyUsPage;
