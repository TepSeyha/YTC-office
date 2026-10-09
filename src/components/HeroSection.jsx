import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

// 🟢 បញ្ជីរូបភាពសម្រាប់ Hero Slider
const heroSlides = [
  {
    image: "/images/gallery/hero1.jpg",
    title1Key: "title1",
    title2Key: "title2",
  },
  {
    image: "/images/gallery/hero2.jpg",
    title1Key: "title1",
    title2Key: "title2",
  },
  {
    image: "/images/gallery/hero3.jpg",
    title1Key: "title1",
    title2Key: "title2",
  },
  {
    image: "/images/gallery/hero.jpg",
    title1Key: "title1",
    title2Key: "title2",
  },
  {
    image: "/images/gallery/hero4.jpg",
    title1Key: "title1",
    title2Key: "title2",
  },
];

const HeroSection = () => {
  const { t, isKhmer } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  // 🟢 Auto-play រំកិលរាល់ ៥ វិនាទី
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // 🟢 ប៊ូតុង Next
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  // 🟢 ប៊ូតុង Prev
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="relative h-[500px] w-full bg-gray-900 dark:bg-gray-950 overflow-hidden">
      
      {/* 🟢 រូបភាព Background ទាំងអស់ (Slider) */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url('${slide.image}')` }}
        >
          {/* Overlay ពណ៌ខ្មៅ */}
          <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>
        </div>
      ))}
      
      {/* 🟢 ខ្លឹមសារ (Content) */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center text-white z-10">
        <h1 className={`text-4xl md:text-6xl font-bold leading-tight mb-4 ${isKhmer ? 'font-khmer' : 'font-english'}`}>
          {t.hero.title1} <br />
          <span className="text-green-400">{t.hero.title2}</span>
        </h1>
        <p className={`text-lg md:text-xl max-w-2xl mb-8 opacity-90 ${isKhmer ? 'font-khmer' : 'font-english'}`}>
          {t.hero.desc}
        </p>
       
      </div>

      {/* 🟢 ប៊ូតុង Slider ឆ្វេង-ស្តាំ */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 p-3 rounded-full text-white transition z-20"
      >
        <FaChevronLeft />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 p-3 rounded-full text-white transition z-20"
      >
        <FaChevronRight />
      </button>

      {/* 🟢 Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-green-500 w-8' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;