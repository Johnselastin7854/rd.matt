import React,{useState} from 'react';
import { specialized } from '../data';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

import "../styles/_Carousel.scss";

function Carousel() {
 const [current, setCurrent] = useState(0);
  const length = specialized.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  return (
    <section className="carousel">
      <FaArrowAltCircleLeft
        className="carousel__left-arrow carousel__arrow"
        onClick={prevSlide}
      />
      <FaArrowAltCircleRight
        className="carousel__right-arrow carousel__arrow"
        onClick={nextSlide}
      />
      {specialized?.map((slide, index) => {
        return (
          <div className={index === current ? "slide active" : "slide"}>
            {index === current && (
              <div key={slide.id} className="carousel__box">
                <img src={slide.imageUrl} alt={slide.title} />
                <div className="carousel__box-content">
                  <h4>{slide.title}</h4>
                  <p>{slide.description}</p>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </section>
  )
}

export default Carousel
