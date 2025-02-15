"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "/images/background1.jpeg",
    title: "Energy Efficiency Solutions",
    description:
      "Enhance operational efficiency and reduce energy costs with our tailored solutions.",
  },
  {
    image: "/images/background2.jpg",
    title: "Sustainable Development",
    description:
      "We provide innovative solutions for a greener and more sustainable future.",
  },
  {
    image: "/images/background3.jpeg",
    title: "Solar Energy Consultation",
    description:
      "Get expert guidance on optimizing your solar energy projects and investments.",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);

  const prevSlide = (): void => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = (): void => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen text-center px-4 sm:px-6 overflow-hidden">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            className="absolute w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${slides[currentIndex].image})`,
              filter: "blur(6px)",
            }}
            initial={{ x: direction === 1 ? "100%" : "-100%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            exit={{ x: direction === 1 ? "-100%" : "100%", opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-white"
          >
            <h1 className="text-3xl sm:text-5xl font-bold drop-shadow-2xl">
              {slides[currentIndex].title}
            </h1>
            <p className="mt-2 sm:mt-4 text-sm sm:text-lg drop-shadow-2xl">
              {slides[currentIndex].description}
            </p>

            <button className="mt-4 sm:mt-6 bg-green-500 hover:bg-green-600 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-full text-sm sm:text-lg font-semibold">
              GET STARTED
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-5 flex space-x-2 sm:space-x-3">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-white scale-125" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <div
        className="absolute top-1/2 left-3 sm:left-5 text-2xl sm:text-3xl cursor-pointer text-white z-10"
        onClick={prevSlide}
      >
        ❮
      </div>
      <div
        className="absolute top-1/2 right-3 sm:right-5 text-2xl sm:text-3xl cursor-pointer text-white z-10"
        onClick={nextSlide}
      >
        ❯
      </div>
    </div>
  );
}
