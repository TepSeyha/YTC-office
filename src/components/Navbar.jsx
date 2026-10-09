import React from 'react';
import { FaSearch, FaBars, FaMoon, FaSun, FaGlobe } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const { t, toggleLanguage, lang, isKhmer } = useLanguage();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50 transition-colors duration-300">
      <div 
        className="container mx-auto px-4 py-3 flex justify-between items-center"
        style={{ minHeight: '72px' }}
      >
        
        {/* 🟢 Logo ជា Icon មូលពេញលេញ */}
        <div className="flex items-center gap-3">
          
          {/* រង្វង់ Logo */}
          <div
            className="flex-shrink-0 shadow-md"
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '2px solid #10b981',
              backgroundImage: "url('/images/logo.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
          
          <div className="hidden md:block">
            <h1 className="text-green-700 dark:text-green-400 font-bold text-lg leading-tight">
              YTC Office
            </h1>
            <p className={`text-xs text-gray-500 dark:text-gray-400 ${isKhmer ? 'font-khmer' : 'font-english'}`}>
              {isKhmer ? "ការិយាល័យគ្រប់គ្រងយុវជន" : "Youth, Teenager and Children"}
            </p>
          </div>
        </div>

        {/* 🟢 Menu Links (Desktop) */}
        <div className={`hidden lg:flex gap-6 text-sm font-medium text-gray-700 dark:text-gray-200 ${isKhmer ? 'font-khmer' : 'font-english'}`}>
          <a href="#" className="text-green-600 dark:text-green-400 border-b-2 border-green-600 dark:border-green-400 pb-1">
            {t.nav.home}
          </a>
          <a href="#" className="hover:text-green-600 dark:hover:text-green-400 transition">{t.nav.about}</a>
          <a href="#" className="hover:text-green-600 dark:hover:text-green-400 transition">{t.nav.activities}</a>
          <a href="#" className="hover:text-green-600 dark:hover:text-green-400 transition">{t.nav.programs}</a>
          <a href="#" className="hover:text-green-600 dark:hover:text-green-400 transition">{t.nav.news}</a>
        </div>

        {/* 🟢 Right Side Actions */}
        <div className="flex items-center gap-4">
          
          {/* Language Toggle */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-bold text-sm transition"
          >
            <FaGlobe />
            {lang === 'kh' ? 'EN' : 'KH'}
          </button>

          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="text-gray-600 dark:text-yellow-400 hover:text-green-600 text-lg transition"
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>

          {/* 🟢 Developer Credit (Desktop) */}
          <span className="hidden lg:block text-xs text-gray-400 dark:text-gray-500 font-medium border-l border-gray-200 dark:border-gray-700 pl-4">
            Developer by <span className="text-green-600 dark:text-green-400 font-bold">SEYHA_DEV</span>
          </span>

          <FaBars className="lg:hidden text-gray-700 dark:text-gray-200 text-xl cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;