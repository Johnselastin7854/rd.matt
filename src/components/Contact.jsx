import React from 'react';
import { RiPhoneFill } from "react-icons/ri";
import "../styles/_Contact.scss";
import { motion } from 'framer-motion';

function Contact() {
  return (
    <section className="contact">
      <motion.div initial={{opacity:0, x:-100}}
        whileInView={{opacity:1, x:0}}
        transition={{ duration: 1, ease:"linear", type: "spring", bounce:0.3, delay:0.4 }}
        viewport={{ once: true }}  className="contact__left">
        <h2 className="heading">Having Doubts?</h2>
        <p>Our Support agent will call you back within 30 seconds.</p>
        <p>How Cool is that? Enter your number now check it out!</p>
        <div className="contact__left--cta">
          <input
            type="number"
            name="number"
            id="number"
            className="number"
            placeholder="Enter your number"
          />
          <button type="submit" className="btn">
            <RiPhoneFill className="icon" /> Call me
          </button>
        </div>
      </motion.div>
      <motion.div initial={{opacity:0, x:100}}
        whileInView={{opacity:1, x:0}}
        transition={{ duration: 1, ease:"linear", type: "spring", bounce:0.3, delay:0.5 }}
        viewport={{ once: true }}  className="contact__right">
        <img src="/images/Customerss.png" alt="customer care" />
      </motion.div>
    </section>
  )
}

export default Contact
