import React, { useState } from 'react';
import { X, Sparkles, ShieldCheck, Layers } from 'lucide-react';
import { POSTER_SIZES, FRAME_OPTIONS } from '../data/postersData';

export default function ProductModal({ poster, onClose }) {
  if (!poster) return null;

  const [selectedSize, setSelectedSize] = useState(POSTER_SIZES[1]);
  const [selectedFrame, setSelectedFrame] = useState(FRAME_OPTIONS[0]);

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-3xl rounded-3xl bg-[#11182D] border border-white/15 text-[#F8FAFC] overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-2">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#0B1020]/80 text-slate-300 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Framed Image */}
        <div className="p-8 bg-[#0B1020] flex flex-col items-center justify-center">
          <div className={`aspect-[3/4] w-60 overflow-hidden transition-all duration-300 ${selectedFrame.borderClass}`}>
            <img src={poster.image} alt={poster.title} className="w-full h-full object-cover" />
          </div>
          <span className="mt-4 text-[11px] text-slate-400">
            Previewing: <strong className="text-[#FBBF24]">{selectedFrame.name}</strong> ({selectedSize.label})
          </span>
        </div>

        {/* Right Poster Showcase Specifications */}
        <div className="p-6 sm:p-8 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-[#3B82F6]/20 text-[#3B82F6] text-xs font-bold uppercase">
                {poster.category}
              </span>
              <span className="px-2.5 py-1 rounded bg-[#FBBF24]/15 text-[#FBBF24] text-xs font-bold flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> {poster.finish}
              </span>
            </div>

            <h3 className="font-display text-2xl font-black mt-3">{poster.title}</h3>
            <p className="text-xs text-slate-400 font-semibold tracking-wider uppercase mt-0.5">
              {poster.subtitle}
            </p>
            <p className="text-xs text-slate-300 mt-3 leading-relaxed">
              {poster.description}
            </p>
          </div>

          <div className="space-y-3">
            <div>
              <span className="text-xs font-bold text-slate-400 block mb-1.5">
                Available Dimensions We Provide:
              </span>
              <div className="grid grid-cols-3 gap-2">
                {POSTER_SIZES.map((sz) => (
                  <button
                    key={sz.id}
                    onClick={() => setSelectedSize(sz)}
                    className={`py-2 rounded-lg text-xs font-bold border transition ${
                      selectedSize.id === sz.id
                        ? 'border-[#3B82F6] bg-[#3B82F6] text-white'
                        : 'border-white/10 text-slate-300 hover:bg-white/5'
                    }`}
                  >
                    {sz.id}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <span className="text-xs font-bold text-slate-400 block mb-1.5">
                Test Frame Style:
              </span>
              <select
                value={selectedFrame.id}
                onChange={(e) =>
                  setSelectedFrame(
                    FRAME_OPTIONS.find((f) => f.id === e.target.value) || FRAME_OPTIONS[0]
                  )
                }
                className="w-full px-3 py-2.5 rounded-xl bg-[#0B1020] border border-white/15 text-xs font-bold text-white focus:outline-none focus:border-[#3B82F6]"
              >
                {FRAME_OPTIONS.map((frame) => (
                  <option key={frame.id} value={frame.id}>
                    {frame.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Print Specifications */}
            <div className="p-3.5 rounded-xl bg-[#0B1020]/70 border border-white/10 space-y-1.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FBBF24] shrink-0" />
                <span>300 GSM Heavyweight Archival Paper</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#3B82F6] shrink-0" />
                <span>Shatterproof Acrylic Glass & Ready-to-Hang Mounts</span>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-white/10 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-[#3B82F6] hover:bg-blue-500 text-white font-bold text-xs transition"
            >
              Close Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
