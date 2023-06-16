import React from 'react';
import ServeCard from '../components/ServeCard';
import { serve } from '../data';
import {motion} from "framer-motion";

import "../styles/_WeServe.scss";

function WeServe() {
  return (
    <div className="section-padding weServe">
      <div className="weServe__content">
        <motion.h2 initial={{opacity:0, y:-100}}
    whileInView={{opacity:1, y:0}}
    transition={{ duration: 1, ease:"linear", type: "spring", bounce:0.3 }}
    viewport={{ once: true }}  className="heading">
          Whom we serve <span></span>
        </motion.h2>
        <motion.p 
        initial={{opacity:0, x:-100}}
        whileInView={{opacity:1, x:0}}
        transition={{ duration: 1, ease:"linear", type: "spring", bounce:0.3, delay:0.5 }}
        viewport={{ once: true }} className="section-description">
          We serve doctoral candidates from various disciplines and domains who
          are looking for expert guidance and support in their research
          journey.Whether you need help with admission, literature review,
          research design, data analysis, thesis writing, or journal
          publication, we have the right solution for you.
        </motion.p>
      </div>

      <div  className="weServe__boxes">
        {serve?.map((data) => (
          <ServeCard key={data.id} img={data.image} title={data.title} id={data.id}/>
        ))}
      </div>
    </div>
  )
}

export default WeServe
