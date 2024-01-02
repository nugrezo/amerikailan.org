import React, { useState, useEffect, useCallback } from "react";
import "./PopulerIlanlar.css";
import photo1 from "../../library/populerilan/populerilan1.png";
import photo2 from "../../library/populerilan/populerilan2.png";
import photo3 from "../../library/populerilan/populerilan3.png";

const photos = [photo1, photo2, photo3];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlide = useCallback(() => {
    const nextIndex = (currentIndex + 1) % photos.length;
    setCurrentIndex(nextIndex);
  }, [currentIndex]);

  useEffect(() => {
    const intervalId = setInterval(handleSlide, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [handleSlide]);

  const handleManualSlide = () => {
    handleSlide();
  };

  return (
    <div className="slider-container">
      <div className="slide" onClick={() => handleManualSlide("left")}>
        <div className="arrow left-arrow">{"\u25C0"}</div>
      </div>
      <img src={photos[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <div className="slide" onClick={() => handleManualSlide("right")}>
        <div className="arrow right-arrow">{"\u25B6"}</div>
      </div>
    </div>
  );
};

export default Slider;
