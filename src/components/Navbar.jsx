import React from 'react';
import { Sun, Moon } from 'lucide-react';
import BrandLogo, { PXIconBadge } from './BrandLogo';
import { CATEGORIES } from '../data/postersData';

export default function Navbar({
  selectedCategory,
  onSelectCategory,
  lightMode,
  setLightMode,
}) {
  return (
    <header
      className={`sticky top-0 z-40 backdrop-blur-xl border-b transition-colors duration-300 ${
        lightMode
          ? 'bg-[#F8FAFC]/90 border-slate-200 text-[#0B1020]'
          : 'bg-[#0B1020]/85 border-white/10 text-[#F8FAFC]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Identity */}
        <button
          onClick={() => onSelectCategory('all')}
          className="flex items-center gap-3 text-left focus:outline-none"
        >
          <PXIconBadge size={42} className="hidden sm:flex" />
          <BrandLogo lightMode={lightMode} />
        </button>

        {/* Center Category Showcase Links */}
        <nav className="hidden md:flex items-center gap-2">
          {CATEGORIES.map((category) => {
            const isActive = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => onSelectCategory(category.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-[#3B82F6] text-white shadow-neon-blue'
                    : lightMode
                    ? 'text-slate-700 hover:bg-slate-200/70'
                    : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                {category.name}
              </button>
            );
          })}
        </nav>

        {/* Right Theme Switcher */}
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border border-[#FBBF24]/40 bg-[#FBBF24]/10 text-[#FBBF24]">
            Official Portfolio
          </span>

          <button
            onClick={() => setLightMode(!lightMode)}
            title="Switch Brand Theme (#0B1020 / #F8FAFC)"
            className={`p-2.5 rounded-full border transition ${
              lightMode
                ? 'border-slate-300 bg-white text-slate-800 hover:bg-slate-100'
                : 'border-white/10 bg-white/5 text-[#FBBF24] hover:bg-white/10'
            }`}
          >
            {lightMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Category Bar */}
      <div className="flex md:hidden items-center gap-2 overflow-x-auto border-t border-white/10 py-2.5 px-4 text-xs font-semibold no-scrollbar">
        {CATEGORIES.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={`px-3.5 py-1.5 rounded-full whitespace-nowrap ${
              selectedCategory === category.id
                ? 'bg-[#3B82F6] text-white'
                : 'text-slate-400 bg-white/5'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </header>
  );
}
