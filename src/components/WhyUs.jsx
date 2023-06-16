import React from "react";
import { motion } from "framer-motion";
import "../styles/_WhyUs.scss";

function WhyUs() {
  return (
    <section className="whyus">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: "linear",
          type: "spring",
          bounce: 0.6,
          delay: 0.5,
        }}
        viewport={{ once: true }}
        className="whyus__circle"
      ></motion.div>

      <div className="whyus__cards">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            ease: "linear",
            type: "spring",
            bounce: 0.3,
            delay: 0.4,
          }}
          viewport={{ once: true }}
          className="whyus__expertise whyus__content"
        >
          <img src="/images/ai.png" alt="ai" />
          <h3 className="whyus__content--title">Expertise</h3>
          <p className="whyus__content--desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem autem
            sint ipsum reprehenderit quia explicabo temporibus voluptatibus
            eveniet natus odio iure perferendis ea unde beatae, distinctio
            soluta sunt, eaque consequuntur.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            ease: "linear",
            type: "spring",
            bounce: 0.3,
            delay: 0.8,
          }}
          viewport={{ once: true }}
          className="whyus__punchulaity whyus__content"
        >
          <img src="/images/ai.png" alt="ai" />
          <h3 className="whyus__content--title">punchulaity</h3>
          <p className="whyus__content--desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem autem
            sint ipsum reprehenderit quia explicabo temporibus voluptatibus
            eveniet natus odio iure perferendis ea unde beatae, distinctio
            soluta sunt, eaque consequuntur.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: "linear",
            type: "spring",
            bounce: 0.3,
            delay: 0.5,
          }}
          viewport={{ once: true }}
          className="whyus__price whyus__content"
        >
          <img src="/images/ai.png" alt="ai" />
          <h3 className="whyus__content--title">price</h3>
          <p className="whyus__content--desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem autem
            sint ipsum reprehenderit quia explicabo temporibus voluptatibus
            eveniet natus odio iure perferendis ea unde beatae, distinctio
            soluta sunt, eaque consequuntur.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            ease: "linear",
            type: "spring",
            bounce: 0.3,
            delay: 0.8,
          }}
          viewport={{ once: true }}
          className="whyus__secure whyus__content"
        >
          <img src="/images/ai.png" alt="ai" />
          <h3 className="whyus__content--title">secure</h3>
          <p className="whyus__content--desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem autem
            sint ipsum reprehenderit quia explicabo temporibus voluptatibus
            eveniet natus odio iure perferendis ea unde beatae, distinctio
            soluta sunt, eaque consequuntur.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            ease: "linear",
            type: "spring",
            bounce: 0.3,
            delay: 0.5,
          }}
          viewport={{ once: true }}
          className="whyus__customer whyus__content"
        >
          <img src="/images/ai.png" alt="ai" />
          <h3 className="whyus__content--title">customer</h3>
          <p className="whyus__content--desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem autem
            sint ipsum reprehenderit quia explicabo temporibus voluptatibus
            eveniet natus odio iure perferendis ea unde beatae, distinctio
            soluta sunt, eaque consequuntur.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyUs;
