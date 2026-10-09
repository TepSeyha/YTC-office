import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';   // 🟢 Import Home

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Navbar />
          <Home />                {/* 🟢 ប្រើ Home ជំនួស Component ផ្សេងៗ */}
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;