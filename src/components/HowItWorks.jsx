import React from "react";
import { motion } from "framer-motion";

import "../styles/_HowItWorks.scss";

function HowItWorks() {
  return (
    <section className="howworks">
      <motion.h2 initial={{opacity:0, x:-100}}
        whileInView={{opacity:1, x:0}}
        transition={{ duration: 1, ease:"linear", type: "spring", bounce:0.3, delay:0.3 }}
        viewport={{ once: true }} className="heading">
        how it works <span></span>
      </motion.h2>
      <motion.p initial={{opacity:0, x:100}}
        whileInView={{opacity:1, x:0}}
        transition={{ duration: 1, ease:"linear", type: "spring", bounce:0.3, delay:0.3 }}
        viewport={{ once: true }} className="section-description">
        Getting professional academic help from us is easy. Get your custom
        written paper done for you in 4 simple steps
      </motion.p>

      <div className="howworks__container">
        <motion.div initial={{opacity:0, x:-100}}
        whileInView={{opacity:1, x:0}}
        transition={{ duration: 1, ease:"linear", type: "spring", bounce:0.3, delay:0.3 }}
        viewport={{ once: true }}  className="howworks__container--works">
          <div className="howworks__container--works-content">
            <h3>
              <span>01</span>
              Fill the Order form
            </h3>
            <p>
              To experience all the benefits of our essay writing service, you
              should click on the "Order" button. Then, fill out the order form
              with your topic, the number of pages, academic level, and all
              other details. You can also download a file with a draft or extra
              instructions.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVnaXN0cmF0aW9uJTIwZm9ybXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </motion.div>

        <motion.div initial={{opacity:0, x:100}}
        whileInView={{opacity:1, x:0}}
        transition={{ duration: 1, ease:"linear", type: "spring", bounce:0.3, delay:0.5 }}
        viewport={{ once: true }}  className="howworks__container--works">
          <img
            src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVnaXN0cmF0aW9uJTIwZm9ybXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <div className="howworks__container--works-content">
            <h3>
              <span>02</span>
              Receive the call from our Expert Team
            </h3>
            <p>
              To experience all the benefits of our essay writing service, you
              should click on the "Order" button. Then, fill out the order form
              with your topic, the number of pages, academic level, and all
              other details. You can also download a file with a draft or extra
              instructions.
            </p>
          </div>
        </motion.div>

        <motion.div initial={{opacity:0, y:-100}}
        whileInView={{opacity:1, y:0}}
        transition={{ duration: 1, ease:"linear", type: "spring", bounce:0.3, delay:0.7 }}
        viewport={{ once: true }}  className="howworks__container--works">
          <div className="howworks__container--works-content">
            <h3>
              <span>03</span>
              Monitor the Process
            </h3>
            <p>
              Now you can relax and do your daily activities while we write your
              paper. At the same time, our best essay writing service is ready
              to inform you about the status of your order. You will always be
              aware of the current paper status.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVnaXN0cmF0aW9uJTIwZm9ybXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </motion.div>

        <motion.div initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0}}
        transition={{ duration: 1, ease:"linear", type: "spring", bounce:0.3, delay:0.9 }}
        viewport={{ once: true }}  className="howworks__container--works">
          <img
            src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVnaXN0cmF0aW9uJTIwZm9ybXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <div className="howworks__container--works-content">
            <h3>
              <span>04</span>
              Get the Final Draft
            </h3>
            <p>
              Our expert team meticulously writes all the papers, so you are
              guaranteed a polished assignment. Enjoy plagiarism-free works with
              proper citations matching all your instructions. We take great
              care to ensure that all of our customers are satisfied.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HowItWorks;
