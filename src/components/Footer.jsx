import React from 'react';
import BrandLogo, { PXIconBadge } from './BrandLogo';

export default function Footer({ onSelectCategory }) {
  return (
    <footer className="bg-[#080C18] border-t border-white/10 text-[#F8FAFC] py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4 md:col-span-2">
          <div className="flex items-center gap-3">
            <PXIconBadge size={44} />
            <BrandLogo />
          </div>
          <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
            POSTERS THAT BRING IDEAS TO LIFE. Official showcase of our wall posters crafted across Anime, Comics, Divine Spiritual Art, and Cartoon Editions.
          </p>
          <div className="flex items-center gap-3 pt-1">
            {[
              { hex: '#3B82F6', name: 'Electric Blue' },
              { hex: '#FBBF24', name: 'Impact Gold' },
              { hex: '#0B1020', name: 'Midnight' },
              { hex: '#F8FAFC', name: 'Alabaster' },
            ].map((swatch) => (
              <div key={swatch.hex} className="flex items-center gap-1.5 text-[10px] text-slate-400">
                <span
                  style={{ backgroundColor: swatch.hex }}
                  className="w-3.5 h-3.5 rounded-full border border-white/20"
                />
                <span>{swatch.hex}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-xs font-bold uppercase tracking-wider text-[#FBBF24] mb-3">
            Poster Categories
          </h4>
          <ul className="space-y-2 text-xs text-slate-300">
            <li><button onClick={() => onSelectCategory('anime')} className="hover:text-[#3B82F6]">Anime Wall Posters</button></li>
            <li><button onClick={() => onSelectCategory('comics')} className="hover:text-[#3B82F6]">Comic Book Covers</button></li>
            <li><button onClick={() => onSelectCategory('god')} className="hover:text-[#3B82F6]">God & Spiritual Art</button></li>
            <li><button onClick={() => onSelectCategory('cartoon')} className="hover:text-[#3B82F6]">Cartoon Series Posters</button></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-xs font-bold uppercase tracking-wider text-[#3B82F6] mb-3">
            Our Print Standards
          </h4>
          <ul className="space-y-2 text-xs text-slate-400">
            <li>• 300 GSM Archival Matte Paper</li>
            <li>• Shatterproof Acrylic Glass Frames</li>
            <li>• Precision UV-Resistant Pigments</li>
            <li>• Available in A4, A3 & A2 Collector Sizes</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pt-6 border-t border-white/10 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} POSTANIX (POSTERS × IDEAS × IMPACT). All rights reserved.
      </div>
    </footer>
  );
}
