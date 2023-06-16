import React from 'react';
import Faq from '../components/Faq';
import { motion } from 'framer-motion';
import "../styles/_FaqSection.scss";

function FaqSection() {
  return (
    <section className="faq__section">
    <div className="faq__section--content">
      <motion.h2 initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0}}
        transition={{ duration: 1, ease:"linear", type: "spring", bounce:0.3, delay:0.2}}
        viewport={{ once: true }} className="heading">
        Frequently Asked Question <span></span>
      </motion.h2>
      <motion.p initial={{opacity:0, y:-100}}
        whileInView={{opacity:1, y:0}}
        transition={{ duration: 1, ease:"linear", type: "spring", bounce:0.3, delay:0.4}}
        viewport={{ once: true }} className="section-description">
        Here are some Frequently Asked Questions
      </motion.p>
    </div>

    <motion.div initial={{opacity:0, x:100}}
        whileInView={{opacity:1, x:0}}
        transition={{ duration: 1, ease:"linear", type: "spring", bounce:0.3, delay:0.5}}
        viewport={{ once: true }} className="faq__section--accordion-container">
      <Faq />
      <Faq />
    </motion.div>
  </section>
  )
}

export default FaqSection
