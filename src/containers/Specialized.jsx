import React from 'react';
import Carousel from '../components/Carousel';
import Button from '../components/Button';
import {motion} from "framer-motion";


import "../styles/_Specialized.scss"

function Specialized() {
  return (
    <section className='specialized'>
    <motion.div 
    initial={{opacity:0, y:-100}}
    whileInView={{opacity:1, y:0}}
    transition={{ duration: 1 }}
    viewport={{ once: true }}  className="specialized__left">
        <motion.h2 
        initial={{opacity:0, x:-100}}
        whileInView={{opacity:1, x:0}}
        transition={{ duration: 2 }}
        viewport={{ once: true }}  className='heading'>we are specialized <span></span></motion.h2>
        <motion.p initial={{opacity:0, x:-100}}
    whileInView={{opacity:1, x:0}}
    transition={{ duration: 1, delay:0.5 }}
    viewport={{ once: true }} >We specialize in providing high-quality PhD services that cater to the specific needs of our clients. Our team of experts consists of seasoned professionals with extensive experience in various fields, who are dedicated to helping students achieve their academic goals.
        </motion.p>
        <div className='specialized__left--btn'><Button path="/specialized" title="Learn More"/></div>
    </motion.div>
    <motion.div initial={{opacity:0, y:-100}}
    whileInView={{opacity:1, y:0}}
    transition={{ duration: 2 }}
    viewport={{ once: true }}  className="specialized__right">
        <Carousel/>
    </motion.div>
</section>
  )
}

export default Specialized
