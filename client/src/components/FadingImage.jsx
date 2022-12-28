import React, { useState, useEffect } from 'react';
import Fade1 from "../assets/fade1.png"
import Fade2 from "../assets/fade2.png"

const FadingImages = () => {
  const images = [
    Fade1,
    Fade2
    // 'https://picsum.photos/id/10/200/300',
    // 'https://picsum.photos/id/100/200/300',
    // 'https://picsum.photos/id/1000/200/300',
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
    <div className="relative -mt-20">
      <div
        className={`absolute inset-0 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } transition duration-1000 ease-in-out`}
      >
        <img src={currentImage} alt=""  className="absolute top-32 left-1/2 right-0 w-1/3"/>
      </div>
      <div
        className={`absolute inset-0 ${
          isVisible ? 'opacity-0' : 'opacity-100'
        } transition duration-1000 ease-in-out`}
      >
        <img src={nextImage} alt=""  className="absolute top-32 left-1/2 right-0 w-1/3"/>
      </div>
    </div>
  );
};

export default FadingImages;
