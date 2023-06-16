import React from "react";
import { motion } from "framer-motion";

import "../styles/_AboutUS.scss";

function AboutUs() {
  return (
    <div className="about">
      <motion.h2 initial={{opacity:0, y:-100}}
        whileInView={{opacity:1, y:0}}
        transition={{ duration: 1, ease:"linear", type: "spring", bounce:0.3, delay:0.3 }}
        viewport={{ once: true }} className="heading">
        About US <span></span>
      </motion.h2>

      <div className="about__content-container">
        <motion.div initial={{opacity:0, x:-100}}
        whileInView={{opacity:1, x:0}}
        transition={{ duration: 1, ease:"linear", type: "spring", bounce:0.3, delay:0.4 }}
        viewport={{ once: true }} className="about__image">
          <img src="/images/about.webp" alt="matt Engg Solutions" />
        </motion.div>
        <motion.div initial={{opacity:0, x:100}}
        whileInView={{opacity:1, x:0}}
        transition={{ duration: 1, ease:"linear", type: "spring", bounce:0.3, delay:0.5 }}
        viewport={{ once: true }} className="about__content">
          <h4 className="about__content--btn">Our Story</h4>
          <p className="about__content--desc">
            At Matt Engineering Solutions, we have been providing PhD end-to-end
            assistance, article writing, dissertation writing, and proofreading
            services since 2014. Our team of experienced employees is one of our
            biggest assets, and they have the knowledge and skills to provide
            high-quality services to our clients.
          </p>
        </motion.div>
      </div>

      <motion.div initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0}} 
        transition={{ duration: 1, ease:"linear", type: "spring", bounce:0.3, delay:0.3 }}
        viewport={{ once: true }} className="about__history">
        <div className="about__history--space">
          <h4>
            Our History <span></span>
          </h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            dignissimos accusantium earum alias voluptatem delectus obcaecati,
            ab tempora dolore aliquid provident aut saepe architecto corporis!
            Error expedita ea dolore! Explicabo.
          </p>
        </div>
        <div className="about__history--space">
          <h4>
            Our Mission <span></span>
          </h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            dignissimos accusantium earum alias voluptatem delectus obcaecati,
            ab tempora dolore aliquid provident aut saepe architecto corporis!
            Error expedita ea dolore! Explicabo.
          </p>
        </div>
        <div className="about__history--space">
          <h4>
            Our vision <span></span>
          </h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            dignissimos accusantium earum alias voluptatem delectus obcaecati,
            ab tempora dolore aliquid provident aut saepe architecto corporis!
            Error expedita ea dolore! Explicabo.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default AboutUs;
