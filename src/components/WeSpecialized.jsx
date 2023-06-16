import React from "react";
import SpecializedCard from "./SpecializedCard";
import { weServed } from "../data";
import { motion } from "framer-motion";

import "../styles/_WeSpecialized.scss";

function WeSpecialized() {
  return (
    <section className="WeSpecialized">
      <motion.h2 initial={{opacity:0, x:-100}}
        whileInView={{opacity:1, x:0}}
        transition={{ duration: 1, ease:"linear", type: "spring", bounce:0.3, delay:0.3 }}
        viewport={{ once: true }}  className="heading">
        We are specialized in <span></span>
      </motion.h2>
      <motion.p initial={{opacity:0, x:100}}
        whileInView={{opacity:1, x:0}}
        transition={{ duration: 1, ease:"linear", type: "spring", bounce:0.3, delay:0.5 }}
        viewport={{ once: true }}  className="section-description">
        We specialize in providing high-quality PhD services that cater to the
        specific needs of our clients. Our team of experts consists of seasoned
        professionals with extensive experience in various fields, who are
        dedicated to helping students achieve their academic goals.
      </motion.p>

      <motion.div initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0}}
        transition={{ duration: 1, ease:"linear", type: "spring", bounce:0.3, delay:0.3 }}
        viewport={{ once: true }}  className="WeSpecialized__container">
        {weServed?.map((data, index) => (
          <SpecializedCard
            id={index}
            key={index}
            title={data.title}
            desc={data.description}
            img={data.imageUrl}
          />
        ))}
      </motion.div>
    </section>
  );
}

export default WeSpecialized;
