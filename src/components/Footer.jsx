import React from 'react';
import { FaFacebook, FaYoutube, FaTelegram, FaMapMarkerAlt, FaEnvelope, FaGlobe } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t, isKhmer } = useLanguage();

  return (
    <footer className={`bg-[#0f172a] text-white pt-12 pb-6 ${isKhmer ? 'font-khmer' : 'font-english'}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* 🟢 Logo + Info */}
          <div className="flex items-start gap-3">
            <img 
              src="/images/logo.jpg" 
              alt="YTC" 
              className="w-12 h-12" 
              style={{ borderRadius: '50%' }} 
            />
            <div>
              <h3 className="font-bold text-lg">YTC Office</h3>
              <p className="text-xs text-gray-400">Youth, Teenager and Children</p>
            </div>
          </div>

          {/* 🟢 Contact Info */}
          <div className="space-y-3 text-sm text-gray-300">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-green-500" />
              <span>{isKhmer ? "ភ្នំពេញ, កម្ពុជា" : "Phnom Penh, Cambodia"}</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-green-500" />
              <span>office.youth4@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaGlobe className="text-green-500" />
              <span>officeyouth4.website.com</span>
            </div>
          </div>

          {/* 🟢 Social Media */}
          <div>
            <h4 className="font-bold mb-4">{t.footer.contact}</h4>
            <div className="flex gap-4">
              <a href="#" className="bg-blue-600 p-2 rounded-full hover:opacity-80 transition">
                <FaFacebook />
              </a>
              <a href="#" className="bg-red-600 p-2 rounded-full hover:opacity-80 transition">
                <FaYoutube />
              </a>
              <a href="#" className="bg-blue-400 p-2 rounded-full hover:opacity-80 transition">
                <FaTelegram />
              </a>
            </div>
          </div>
        </div>

        {/* 🟢 Copyright + Developer Credit */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          
          {/* Copyright */}
          <p>
            © 2025 YTC Office. {t.footer.rights}.
          </p>

          {/* 🟢 Developer Credit */}
          <p className="text-gray-400">
            Developer by{" "}
            <span className="text-green-500 font-bold">SEYHA_DEV</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;