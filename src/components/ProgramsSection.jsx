import React, { useState } from 'react';
import { 
  FaArrowRight, 
  FaFistRaised, 
  FaFlag, 
  FaUsers, 
  FaCross, 
  FaHeart 
} from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import ImageLightbox from './ImageLightbox';

const images = [
  { src: "/images/posts/post3.jpg", alt: "Discipline" },
  { src: "/images/posts/post.jpg", alt: "Flag" },
  { src: "/images/posts/post1.jpg", alt: "Youth" },
  { src: "/images/posts/post4.jpg", alt: "Faith" },
  { src: "/images/posts/post.jpg", alt: "Love" },
];

const icons = [
  <FaFistRaised />, <FaFlag />, <FaUsers />, <FaCross />, <FaHeart />
];

const iconColors = [
  "bg-red-600", "bg-blue-600", "bg-green-600", "bg-purple-600", "bg-pink-600"
];

const ProgramsSection = () => {
  const { t, isKhmer } = useLanguage();
  const [lightboxIndex, setLightboxIndex] = useState(null);

  return (
    <div className="bg-gray-50 dark:bg-gray-800 py-16 transition-colors duration-300">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <span className={`text-green-600 dark:text-green-400 font-semibold text-sm ${isKhmer ? 'font-khmer' : 'font-english'}`}>
              {t.programs.tag}
            </span>
            <h2 className={`text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mt-1 ${isKhmer ? 'font-khmer' : 'font-english'}`}>
              {t.programs.title}
            </h2>
          </div>
          <a href="#" className={`text-green-600 dark:text-green-400 text-sm font-medium hidden md:flex items-center gap-1 hover:underline ${isKhmer ? 'font-khmer' : 'font-english'}`}>
            {t.programs.viewAll} <FaArrowRight size={12} />
          </a>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {t.programs.items.map((item, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-md transition overflow-visible border border-gray-100 dark:border-gray-700 group"
            >
              <div className="relative">
                
                {/* រូបភាព - ចុចបាន */}
                <div 
                  className="h-40 overflow-hidden rounded-t-xl cursor-pointer"
                  onClick={() => setLightboxIndex(index)}
                >
                  <img 
                    src={images[index].src} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500 dark:opacity-80"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/400x300?text=YTC+Post";
                    }}
                  />
                </div>
                
                {/* Icon មូល */}
                <div 
                  className={`absolute left-1/2 -translate-x-1/2 ${iconColors[index]} text-white rounded-full flex items-center justify-center shadow-lg border-4 border-white dark:border-gray-900 pointer-events-none`}
                  style={{
                    width: '60px',
                    height: '60px',
                    bottom: '-30px',
                    zIndex: 10,
                  }}
                >
                  {icons[index]}
                </div>
              </div>

              <div className={`p-4 pt-10 text-center ${isKhmer ? 'font-khmer' : 'font-english'}`}>
                <h3 className="font-bold text-gray-800 dark:text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                  {item.desc}
                </p>
                <a href="#" className="text-green-600 dark:text-green-400 text-xs font-semibold flex items-center justify-center gap-1 hover:underline">
                  {t.programs.viewMore} <FaArrowRight size={10} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <ImageLightbox 
          images={images}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((prev) => (prev - 1 + images.length) % images.length)}
          onNext={() => setLightboxIndex((prev) => (prev + 1) % images.length)}
        />
      )}
    </div>
  );
};

export default ProgramsSection;