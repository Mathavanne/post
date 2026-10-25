import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CatalogSection from './components/CatalogSection';
import ProductModal from './components/ProductModal';
import Footer from './components/Footer';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightMode, setLightMode] = useState(false);
  const [quickViewPoster, setQuickViewPoster] = useState(null);

  const handleExploreCategory = (categoryId) => {
    setSelectedCategory(categoryId);
    const el = document.getElementById('catalog');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        lightMode ? 'bg-[#F8FAFC] text-[#0B1020]' : 'bg-[#0B1020] text-[#F8FAFC]'
      }`}
    >
      <Navbar
        selectedCategory={selectedCategory}
        onSelectCategory={handleExploreCategory}
        lightMode={lightMode}
        setLightMode={setLightMode}
      />

      <Hero
        onExploreCategory={handleExploreCategory}
        lightMode={lightMode}
      />

      <CatalogSection
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        onQuickView={setQuickViewPoster}
        lightMode={lightMode}
      />

      <ProductModal
        poster={quickViewPoster}
        onClose={() => setQuickViewPoster(null)}
      />

      <Footer onSelectCategory={handleExploreCategory} />
    </div>
  );
}
