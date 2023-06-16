import React from 'react';
import {motion} from "framer-motion"

import "../styles/_ServeCard.scss";

function ServeCard(props) {
  return (
    <motion.div 
    initial={{opacity:0, y:100}}
    whileInView={{opacity:1, y:0}}
    transition={{ duration: `${props.id}`, ease:"linear", type: "spring", bounce:0.3, delay:0.3 }}
    viewport={{ once: true }} className='serveBtn'>
    <div className="serveBtn__left">
        <img src={props.img} alt={props.titleS} />
    </div>
    <div className="serveBtn__right">
        <h2>{props.title}</h2>
    </div>
</motion.div>
  )
}

export default ServeCard
