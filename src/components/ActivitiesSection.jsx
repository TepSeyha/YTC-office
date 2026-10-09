import React from 'react';
import { FaArrowRight, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const activityImages = [
  "/images/events/event1.jpg",
  "/images/events/event2.jpg",
  "/images/events/event3.jpg",
  "/images/events/event4.jpg",
  "/images/events/event.jpg",
];

const ActivitiesSection = () => {
  const { t, isKhmer } = useLanguage();

  const events = t.activities.items.slice(0, 5);
  const duplicatedEvents = [...events, ...events];

  return (
    <div className="bg-white dark:bg-gray-900 py-16 transition-colors duration-300 overflow-hidden">
      
      {/* 🟢 Header */}
      <div className="container mx-auto px-4 mb-8">
        <div className="flex justify-between items-end">
          <div>
            <span className={`text-green-600 dark:text-green-400 font-semibold text-sm ${isKhmer ? 'font-khmer' : 'font-english'}`}>
              {t.activities.tag}
            </span>
            <h2 className={`text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mt-1 ${isKhmer ? 'font-khmer' : 'font-english'}`}>
              {t.activities.title}
            </h2>
          </div>
          <a href="#" className={`text-green-600 dark:text-green-400 text-sm font-medium hidden md:flex items-center gap-1 hover:underline ${isKhmer ? 'font-khmer' : 'font-english'}`}>
            {t.activities.viewAll} <FaArrowRight size={12} />
          </a>
        </div>
      </div>

      {/* 🟢 Marquee */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>

        <div 
          className="flex gap-6 animate-scroll"
          style={{ 
            width: 'max-content',
            paddingLeft: '16px',
          }}
        >
          {duplicatedEvents.map((item, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden flex flex-row flex-shrink-0"
              style={{ 
                width: '520px',
                height: '220px',
              }}
            >
              {/* 🟢 ព័ត៌មាន - តូចជាង (៤០%) */}
              <div 
                className={`p-5 flex flex-col justify-between ${isKhmer ? 'font-khmer' : 'font-english'}`}
                style={{ width: '40%' }}    // 🟢 អត្ថបទ ៤០%
              >
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                    <p className="font-semibold text-gray-700 dark:text-gray-300">
                      {t.activities.date}
                    </p>
                  </div>

                  <h3 className="font-bold text-sm text-gray-800 dark:text-white mb-3 leading-snug">
                    {item.title}
                  </h3>

                  <div className="text-[11px] text-gray-500 dark:text-gray-400 space-y-1.5">
                    <p className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-green-500" /> {item.location}
                    </p>
                    <p className="flex items-center gap-2">
                      <FaClock className="text-green-500" /> {item.time}
                    </p>
                  </div>
                </div>

                <button className="bg-green-600 hover:bg-green-700 text-white text-xs px-4 py-2 rounded-full w-fit mt-3 transition">
                  {t.activities.viewDetail}
                </button>
              </div>

              {/* 🟢 រូបភាព - វែងជាង (៦០%) */}
              <div 
                className="h-full overflow-hidden"
                style={{ width: '60%' }}    // 🟢 រូបភាព ៦០%
              >
                <img 
                  src={activityImages[index % activityImages.length] || "/images/events/event1.jpg"} 
                  alt={item.title} 
                  className="w-full h-full object-cover object-center dark:opacity-80 hover:scale-110 transition duration-500"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/400x400?text=Event";
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivitiesSection;