import React, { useState } from 'react';
import { Eye, Sparkles } from 'lucide-react';
import { POSTER_SIZES, FRAME_OPTIONS } from '../data/postersData';

export default function PosterCard({
  poster,
  onQuickView,
  lightMode,
}) {
  const [selectedSize, setSelectedSize] = useState(POSTER_SIZES[1]);
  const [selectedFrame, setSelectedFrame] = useState(FRAME_OPTIONS[0]);

  return (
    <div
      className={`group rounded-2xl border transition-all duration-300 flex flex-col overflow-hidden ${
        lightMode
          ? 'bg-white border-slate-200 hover:border-[#3B82F6] shadow-md'
          : 'bg-[#11182D]/90 border-white/10 hover:border-[#3B82F6]/70 hover:shadow-neon-blue'
      }`}
    >
      {/* Top Poster Preview Container */}
      <div className="relative p-5 bg-gradient-to-b from-slate-900/60 to-[#0B1020] flex items-center justify-center">
        {/* Category Badge */}
        <span
          style={{ backgroundColor: poster.accent }}
          className={`absolute top-3 left-3 z-20 px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider ${
            poster.accent === '#FBBF24' ? 'text-[#0B1020]' : 'text-white'
          }`}
        >
          {poster.badge}
        </span>

        {/* Framed Poster Image */}
        <div
          onClick={() => onQuickView(poster)}
          className={`relative aspect-[3/4] w-48 sm:w-52 cursor-pointer transition-transform duration-500 group-hover:scale-105 overflow-hidden ${selectedFrame.borderClass}`}
        >
          <img
            src={poster.image}
            alt={poster.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {/* Quick View Hover Overlay */}
          <div className="absolute inset-0 bg-[#0B1020]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="px-3.5 py-1.5 rounded-full bg-white text-[#0B1020] text-xs font-extrabold flex items-center gap-1.5 shadow-lg">
              <Eye className="w-3.5 h-3.5" /> Inspect Design
            </span>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <div className="flex items-center justify-between text-[11px] text-slate-400 font-semibold uppercase tracking-wider">
            <span>{poster.category}</span>
            <span className="flex items-center gap-1 text-[#FBBF24]">
              <Sparkles className="w-3 h-3" /> {poster.finish}
            </span>
          </div>

          <h3 className="font-bold text-base mt-1 line-clamp-1">{poster.title}</h3>
          <p className="text-xs text-slate-400 line-clamp-1">{poster.subtitle}</p>
        </div>

        {/* Interactive Size & Frame Finish Previewers */}
        <div className="space-y-2 pt-1">
          <div className="flex items-center justify-between text-[11px] text-slate-400">
            <span>Available Sizes:</span>
            <span className="font-semibold text-[#3B82F6]">{selectedSize.label}</span>
          </div>
          <div className="flex items-center gap-1.5">
            {POSTER_SIZES.map((sz) => (
              <button
                key={sz.id}
                onClick={() => setSelectedSize(sz)}
                className={`flex-1 py-1 rounded text-[11px] font-bold border transition ${
                  selectedSize.id === sz.id
                    ? 'bg-[#3B82F6] text-white border-[#3B82F6]'
                    : lightMode
                    ? 'border-slate-200 text-slate-600 hover:bg-slate-100'
                    : 'border-white/10 text-slate-400 hover:bg-white/5'
                }`}
              >
                {sz.id}
              </button>
            ))}
          </div>

          {/* Frame Swatches */}
          <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
            <span>Frame Preview: <strong className="text-[#FBBF24]">{selectedFrame.name}</strong></span>
            <div className="flex items-center gap-1.5">
              {FRAME_OPTIONS.slice(0, 4).map((frame) => {
                const swatchColors = {
                  'matte-black': 'bg-neutral-900',
                  'metallic-gold': 'bg-[#FBBF24]',
                  'electric-blue': 'bg-[#3B82F6]',
                  'alabaster-white': 'bg-[#F8FAFC]',
                };
                return (
                  <button
                    key={frame.id}
                    onClick={() => setSelectedFrame(frame)}
                    title={frame.name}
                    className={`w-4 h-4 rounded-full border ${swatchColors[frame.id]} ${
                      selectedFrame.id === frame.id ? 'ring-2 ring-[#3B82F6] ring-offset-1 ring-offset-[#0B1020]' : 'opacity-70'
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* View Full Design Action */}
        <div className="pt-3 border-t border-white/10">
          <button
            onClick={() => onQuickView(poster)}
            className="w-full py-2.5 rounded-xl bg-[#3B82F6]/15 hover:bg-[#3B82F6] text-[#3B82F6] hover:text-white border border-[#3B82F6]/40 text-xs font-bold flex items-center justify-center gap-1.5 transition"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Preview Poster Details</span>
          </button>
        </div>
      </div>
    </div>
  );
}
