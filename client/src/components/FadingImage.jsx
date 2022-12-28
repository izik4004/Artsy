import React, { useState, useEffect } from 'react';
import Fade1 from "../assets/fade1.png"
import Fade2 from "../assets/fade2.png"
import Fade3 from "../assets/fade3.png"

const FadingImages = () => {
  const images = [
    Fade1,
    Fade2,
    Fade3
  ];

  const [currentImage, setCurrentImage] = useState(null);
  const [nextImage, setNextImage] = useState(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setNextImage(images[Math.floor(Math.random() * images.length)]);
      setIsVisible(false);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (nextImage) {
      setCurrentImage(nextImage);
      setNextImage(null);
      setIsVisible(true);
    }
  }, [nextImage]);

  return (
    <div className=" ">
      <div
        className={`bottom-10 absolute inset-0 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } transition duration-1000 ease-in-out`}
      >
        <img src={currentImage} alt=""  className="absolute top-28 left-1/2 right-0 w-1/2 lg:w-1/3"/>
      </div>
      <div
        className={`absolute inset-0 ${
          isVisible ? 'opacity-0' : 'opacity-100'
        } transition duration-1000 ease-in-out`}
      >
        <img src={nextImage} alt=""  className="absolute top-28 left-1/2 right-0 w-1/2 lg:w-1/3"/>
      </div>
    </div>
  );
};

export default FadingImages;
