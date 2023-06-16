import React from "react";
import { motion } from "framer-motion";

import "../styles/_Heading.scss";

function Heading(props) {
  return (
    <div className="sub-heading">
      <motion.h2
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1,
          ease: "linear",
          type: "spring",
          bounce: 0.3,
          delay: 0.2,
        }}
        viewport={{ once: true }}
        className="heading"
      >
        {props.title}
        <span></span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1,
          ease: "linear",
          type: "spring",
          bounce: 0.3,
          delay: 0.2,
        }}
        viewport={{ once: true }}
        className="section-description"
      >
        {props.desc}
      </motion.p>
    </div>
  );
}

export default Heading;
