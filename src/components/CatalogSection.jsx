import React from 'react';
import { CATEGORIES, POSTERS } from '../data/postersData';
import PosterCard from './PosterCard';

export default function CatalogSection({
  selectedCategory,
  setSelectedCategory,
  onQuickView,
  lightMode,
}) {
  const filteredPosters = POSTERS.filter((poster) => {
    return selectedCategory === 'all' || poster.category === selectedCategory;
  });

  return (
    <section id="catalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-white/10">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#3B82F6]">
            OUR WALL POSTER PORTFOLIO
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-black mt-1">
            DESIGNS WE <span className="text-[#FBBF24]">CRAFT & PROVIDE</span>
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-400 max-w-md">
          Click on any poster card below to test different frame finishes and inspect our print quality across Anime, Comics, God & Spiritual, and Cartoon editions.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto py-6 no-scrollbar">
        {CATEGORIES.map((cat) => {
          const active = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition flex items-center gap-2 ${
                active
                  ? 'bg-[#3B82F6] text-white shadow-neon-blue'
                  : lightMode
                  ? 'bg-white border border-slate-200 text-slate-700 hover:border-[#3B82F6]'
                  : 'bg-[#11182D] border border-white/10 text-slate-300 hover:border-[#FBBF24]/50'
              }`}
            >
              <span>{cat.name}</span>
              <span
                className={`px-2 py-0.5 rounded-full text-[10px] font-black ${
                  active
                    ? 'bg-[#FBBF24] text-[#0B1020]'
                    : 'bg-white/10 text-slate-300'
                }`}
              >
                {cat.badge}
              </span>
            </button>
          );
        })}
      </div>

      {/* Poster Showcase Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredPosters.map((poster) => (
          <PosterCard
            key={poster.id}
            poster={poster}
            onQuickView={onQuickView}
            lightMode={lightMode}
          />
        ))}
      </div>
    </section>
  );
}
