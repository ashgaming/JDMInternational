"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const Corousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    'https://res.cloudinary.com/dsnrp2dlj/image/upload/v1745491369/s2ahuajeq8pdhpd1kkic.jpg',
    'https://res.cloudinary.com/dsnrp2dlj/image/upload/v1745917095/Leonardo_Phoenix_09_a_highly_detailed_cinematic_photograph_fea_1_s5gipa.jpg',
    'https://res.cloudinary.com/dsnrp2dlj/image/upload/v1745917291/image_2_vhxbmy.jpg',
  ];

  // Auto-slide effect (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[85%] md:h-[100%] overflow-hidden">
      {/* Carousel wrapper */}
      <div className="relative h-full overflow-hidden">
        {slides.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === activeSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              priority={index === 0} // Only prioritize the first image
              className="object-cover object-center brightness-50"
            />
          </div>
        ))}
      </div>
      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === activeSlide ? 'bg-white' : 'bg-white/50'
            } hover:bg-white`}
            aria-current={index === activeSlide}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setActiveSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Corousel;