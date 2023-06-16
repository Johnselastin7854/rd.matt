import React from 'react';
import Slider from "react-slick";
import { motion } from 'framer-motion';

import "../styles/_Testimonial.scss"

function Testimonial() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <div className="testimonial">
   <motion.h2 initial={{opacity:0, x:100}}
        whileInView={{opacity:1, x:0}}
        transition={{ duration: 1, ease:"linear", type: "spring", bounce:0.3, delay:0.2}}
        viewport={{ once: true }} className="heading">
          Testimonial <span></span>
        </motion.h2>
    <Slider  {...settings} className="testimonial__slider">

      <motion.div initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0}}
        transition={{ duration: 1, ease:"linear", type: "spring", bounce:0.3, delay:0.2}}
        viewport={{ once: true }} className="testimonial__slider--content">
        <img src="/images/testimonial1.jpeg" alt="testimonal1" />
        <p className="name">Kashtua Tubqaz</p>
        <p className="designation">Project Manager, Almohiet company</p>
        <p className="review">
          <span>Efficient Collaborating</span>I had the pleasure of working
          with this company on a recent project, One of the things that stood
          out to me the most was the exceptional level of customer service
          that Matt Engineering Solutions provided. They were always available
          to answer any questions or concerns that I had, and they were
          proactive in keeping me updated on the progress of the project.
        </p>
      </motion.div>

      <div className="testimonial__slider--content">
        <img src="/images/testimonial3.jpg" alt="testimonal2" />
        <p className="name">Mohamed Irfan P.M</p>
        <p className="designation">
          Asst. Operations Manager, RANCO Group of Companies
        </p>
        <p className="review">
          <span>Intuitive Design</span>I am happy to provide a testimonial for
          Matt Engineering Solutions. My experience with this company has been
          exceptional, and I highly recommend them to anyone looking for
          top-notch engineering solutions.They are dedicated to ensuring that
          their clients are completely satisfied with their work, and they go
          above and beyond to ensure that everything is done right.
        </p>
      </div>

      <div className="testimonial__slider--content">
        <img src="/images/testimonial2.jpeg" alt="testimonal3" />
        <p className="name">Abdulhamid Omar</p>
        <p className="designation">
          Lecturer, Alfurat National University Agthabiya
        </p>
        <p className="review">
          <span>Mindblowing Service</span>I recently worked with Matt
          Engineering Solutions on a complex engineering project and I was
          thoroughly impressed by their professionalism and expertise. The
          team was highly knowledgeable and dedicated to delivering
          high-quality results within our project timelines.
        </p>
      </div>
    </Slider>
  </div>
  )
}

export default Testimonial
