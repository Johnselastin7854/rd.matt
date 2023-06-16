import React, { useState } from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { services } from "../data";
import { RiArrowRightLine } from "react-icons/ri";
import { motion } from "framer-motion";

import "../styles/_Service.scss";

function Service() {
  const [currentItem, setCurrentItem] = useState(3);

  function showMoreHandler() {
    setCurrentItem(currentItem + 3);
  }
  return (
    <section className="service">
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="heading"
      >
        Our Services <span></span>
      </motion.h2>
      <div className="service__container">
        <div className="service__container--cards">
          <Link to="/">
            {services?.slice(0, currentItem)?.map((service, index) => (
              <Card
                key={index}
                title={service.title}
                description={service.description}
                img={service.imageUrl}
              />
            ))}
          </Link>
        </div>
      </div>
      {currentItem < services.length && (
        <button
          className="service__container--button"
          onClick={showMoreHandler}
        >
          Show More <RiArrowRightLine className="hero__icon" />{" "}
        </button>
      )}
    </section>
  );
}

export default Service;
