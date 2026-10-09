import React from 'react';
import { FaArrowRight, FaCross, FaUsers, FaHeart, FaBookOpen } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const AboutSection = () => {
  const { t, isKhmer } = useLanguage();

  const features = [
    { icon: <FaCross />, title: t.about.features.f1, desc: t.about.features.f1d, color: "blue" },
    { icon: <FaUsers />, title: t.about.features.f2, desc: t.about.features.f2d, color: "green" },
    { icon: <FaHeart />, title: t.about.features.f3, desc: t.about.features.f3d, color: "yellow" },
    { icon: <FaBookOpen />, title: t.about.features.f4, desc: t.about.features.f4d, color: "purple" },
  ];

  return (
    <div className="container mx-auto px-4 py-16 transition-colors duration-300">
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        
        {/* រូបភាពខាងឆ្វេង */}
        <div className="w-full lg:w-1/2 relative">
          <img 
            src="images/poster/poster.jpg" 
            alt="YTC Group" 
            className="rounded-2xl shadow-lg w-full object-cover h-[300px] md:h-[400px] dark:opacity-80"
          />
        </div>

        {/* អត្ថបទខាងស្តាំ */}
        <div className="w-full lg:w-1/2">
          <span className={`text-green-600 dark:text-green-400 font-semibold text-sm uppercase tracking-wide ${isKhmer ? 'font-khmer' : 'font-english'}`}>
            {t.about.tag}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mt-2 mb-2">
            {t.about.title}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            {t.about.subtitle}
          </p>
          <p className={`text-gray-600 dark:text-gray-300 mb-6 leading-relaxed ${isKhmer ? 'font-khmer' : 'font-english'}`}>
            {t.about.desc}
          </p>

          <button className={`bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full flex items-center gap-2 transition text-sm font-medium mb-8 ${isKhmer ? 'font-khmer' : 'font-english'}`}>
            {t.about.btn} <FaArrowRight />
          </button>

          {/* បញ្ជីមុខងារ (Features) ខាងស្តាំ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className={`bg-${item.color}-100 dark:bg-${item.color}-900 p-3 rounded-full text-${item.color}-600 dark:text-${item.color}-300`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className={`font-bold text-gray-800 dark:text-white text-sm ${isKhmer ? 'font-khmer' : 'font-english'}`}>{item.title}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;