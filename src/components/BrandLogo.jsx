import React from 'react';

export function PXIconBadge({ size = 42, className = '' }) {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative rounded-xl bg-[#0B1020] border border-white/10 flex items-center justify-center shadow-lg overflow-hidden select-none ${className}`}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full p-1.5">
        <path
          d="M20 22 H52 C64 22 70 29 70 40 C70 51 64 58 52 58 H34 V82 L20 72 Z M34 34 V46 H50 C54 46 57 44 57 40 C57 36 54 34 50 34 Z"
          fill="#F8FAFC"
        />
        <path
          d="M36 84 L86 20 L76 38 L88 26 L48 80 Z"
          fill="#FBBF24"
        />
        <polygon points="34,85 88,18 78,40 46,80" fill="#FBBF24" />
        <polygon points="44,36 86,82 72,78 40,46" fill="#3B82F6" />
      </svg>
    </div>
  );
}

export default function BrandLogo({ lightMode = false, showTagline = true, size = 'md' }) {
  const textColor = lightMode ? 'text-[#0B1020]' : 'text-[#F8FAFC]';
  const subColor = lightMode ? 'text-slate-600' : 'text-slate-300';

  const scaleClass =
    size === 'lg' ? 'text-3xl sm:text-4xl' : size === 'sm' ? 'text-lg' : 'text-xl sm:text-2xl';

  return (
    <div className="inline-flex flex-col items-start select-none group">
      <div className="flex items-center tracking-wider font-display font-black">
        <span className={`${scaleClass} ${textColor} tracking-[0.08em]`}>
          POSTANI
        </span>
        <svg
          viewBox="0 0 64 56"
          className={`${size === 'lg' ? 'w-11 h-10 -ml-1' : 'w-8 h-7 -ml-0.5'} overflow-visible transition-transform duration-300 group-hover:scale-110`}
        >
          <path
            d="M4 54 L60 2 L47 22 L56 14 L18 50 L12 48 Z"
            fill="#FBBF24"
          />
          <path
            d="M4 4 L58 52 L44 46 L50 50 L14 18 L10 12 Z"
            fill="#3B82F6"
          />
        </svg>
      </div>

      {showTagline && (
        <div className={`flex items-center gap-2 text-[9px] sm:text-[10px] tracking-[0.28em] font-semibold uppercase ${subColor} -mt-1`}>
          <span>POSTERS</span>
          <span className="text-[#FBBF24] font-bold">×</span>
          <span>IDEAS</span>
          <span className="text-[#FBBF24] font-bold">×</span>
          <span>IMPACT</span>
        </div>
      )}
    </div>
  );
}
