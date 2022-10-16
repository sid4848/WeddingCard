import React from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Page1 from "../../assets/Page1.jpg";
import Page2 from "../../assets/Page2.jpg";
import Page3 from "../../assets/Page3.jpg";
import "./header.css";
import { useState } from "react";

const images = [Page1, Page2, Page3];

const Header = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 600,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <>
      <div className="wc__header">
        <h1>Digital card details</h1>
      </div>
      <div className="wc__header-container">
        <div className="wc__header-container_cards">
          <Slider {...settings}>
            {images.map((img, idx) => (
              <div
                className={idx === imageIndex ? "slide activeSlide" : "slide"}
                key={idx}
              >
                <img src={img} alt={img} />
              </div>
            ))}
          </Slider>
        </div>
        <div className="wc__header-container_content">
          <h1>Crad title</h1>
          <p>
            $499 <span>75%OFF</span>
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
            incidunt, amet fugit aspernatur et facilis asperiores expedita! Eius
            veritatis, odit quis cumque earum neque doloribus omnis consequatur
            adipisci laborum eveniet, eligendi minus pariatur culpa rerum illum
            voluptates natus sequi. Rem!
          </p>
          <button type="submit">Try this card</button>
        </div>
      </div>
    </>
  );
};

export default Header;
