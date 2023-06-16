import React from 'react';
import { motion } from 'framer-motion';

import "../styles/_Card.scss";


function Card(props) {
  return (
    <div className='card'>
    <motion.div initial={{opacity:0, x:-100}}
        whileInView={{opacity:1, x:0}}
        transition={{ duration: 1, ease:"linear", type: "spring", bounce:0.3, delay:0.1 }}
        viewport={{ once: true }}  className="card__image">
        <img src={props.img} alt={props.title} />
    </motion.div>
    <div className="card__content">
        <motion.h4 initial={{opacity:0, x:100}}
        whileInView={{opacity:1, x:0}}
        transition={{ duration: 1, ease:"linear", type: "spring", bounce:0.3, delay:0.3 }}
        viewport={{ once: true }}  className="card__content--title">
            {props.title} </motion.h4>
            <motion.p initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0}}
        transition={{ duration: 1, ease:"linear", type: "spring", bounce:0.3, delay:0.5 }}
        viewport={{ once: true }} className="card__content--desc">
            {props.description}
            </motion.p>
    </div>
</div>
  )
}

export default Card
