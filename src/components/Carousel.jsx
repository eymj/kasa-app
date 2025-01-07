import { useState } from "react"
import PropTypes from "prop-types"
import "./Carousel.css"
import bigArrowLeft from "../assets/big-arrow-left.png"
import bigArrowRight from "../assets/big-arrow-right.png"

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function Carousel({ images }){
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null; // Handle empty images array

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carousel">
        {images.length > 1 && (
          <button className="carousel-arrow left" onClick={handlePrev}>
            <img src={bigArrowLeft} alt="" />
          </button>
        )}
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="carousel-image"
        />
        {images.length > 1 && (
          <button className="carousel-arrow right" onClick={handleNext}>
            <img src={bigArrowRight} alt="" />
          </button>
        )}
        {images.length > 1 && (
        <div className="carousel-counter">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
};

export default Carousel;
