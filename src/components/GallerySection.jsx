import React, { useState } from 'react';
import { FaArrowRight, FaCamera } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import ImageLightbox from './ImageLightbox';

const galleryImages = [
  { src: "/images/gallery/hero.jpg", alt: "Youth Gathering" },
  { src: "/images/gallery/hero1.jpg", alt: "Church Activity" },
  { src: "/images/gallery/hero2.jpg", alt: "Community Service" },
  { src: "/images/gallery/hero3.jpg", alt: "Youth Retreat" },
  { src: "/images/gallery/hero4.jpg", alt: "Sunset Cross" },
];

const GallerySection = () => {
  const { t, isKhmer } = useLanguage();
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () => setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
  const prevImage = () => setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  return (
    <div className="bg-gray-50 dark:bg-gray-800 py-16 transition-colors duration-300">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <span className={`text-green-600 dark:text-green-400 font-semibold text-sm flex items-center gap-2 ${isKhmer ? 'font-khmer' : 'font-english'}`}>
              <FaCamera /> {t.gallery.tag}
            </span>
            <h2 className={`text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mt-1 ${isKhmer ? 'font-khmer' : 'font-english'}`}>
              {t.gallery.title}
            </h2>
          </div>
          <a href="#" className={`text-green-600 dark:text-green-400 text-sm font-medium hidden md:flex items-center gap-1 hover:underline ${isKhmer ? 'font-khmer' : 'font-english'}`}>
            {t.gallery.viewAll} <FaArrowRight size={12} />
          </a>
        </div>

        {/* Gallery Images */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {galleryImages.map((img, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-xl shadow-sm group cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-32 md:h-48 object-cover group-hover:scale-110 transition duration-500 dark:opacity-80"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/400x300?text=YTC+Gallery";
                }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300 flex items-center justify-center">
                <FaCamera className="text-white opacity-0 group-hover:opacity-100 transition duration-300 text-2xl" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center md:hidden">
          <a href="#" className={`inline-flex items-center gap-2 text-green-600 dark:text-green-400 text-sm font-medium hover:underline ${isKhmer ? 'font-khmer' : 'font-english'}`}>
            {t.gallery.viewAll} <FaArrowRight size={12} />
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <ImageLightbox 
          images={galleryImages}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </div>
  );
};

export default GallerySection;