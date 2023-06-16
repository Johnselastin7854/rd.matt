import React from "react";
import Button from "../components/Button";
import "../styles/_Hero.scss";
import { motion } from "framer-motion";

function Hero() {
  return (
    <header className="hero">
      <div className="hero__container">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="hero__container--content"
        >
          <h1 className="hero__container--content-title">
            We Lead To Digital Era
          </h1>
          <p className="hero__container--content-desc">
            At Matt Engineering Solutions, we have been providing PhD end-to-end
            assistance, article writing, dissertation writing, and proofreading
            services since 2014. Our team of experienced employees is one of our
            biggest assets, and they have the knowledge and skills to provide
            high-quality services to our clients.
          </p>
          <Button path="/contact" title="Contact Now" />
        </motion.div>

        <div className="hero__container--image">
          <motion.img
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            src="./images/hero image.jpg"
            alt="Artificial intelligence"
          />
        </div>
      </div>
    </header>
  );
}

export default Hero;
