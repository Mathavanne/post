import React from 'react';
import onePieceImg from '../../images/anime/one-piece.jpeg';
import ghostImg from '../../images/comics/ghost.jpeg';
import tomImg from '../../images/cartoon/tom.jpeg';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Layers } from 'lucide-react';

export default function Hero({ onExploreCategory, lightMode }) {
  return (
    <section className="relative overflow-hidden py-12 sm:py-20 border-b border-white/10">
      {/* Ambient Brand Glows (#3B82F6 & #FBBF24) */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#3B82F6]/20 blur-[120px]" />
      <div className="pointer-events-none absolute top-20 right-0 w-96 h-96 rounded-full bg-[#FBBF24]/15 blur-[130px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Brand Headline & Category Showcase */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FBBF24]/40 bg-[#FBBF24]/10 text-[#FBBF24] text-xs font-bold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              POSTERS × IDEAS × IMPACT
            </div>

            <h1 className="font-display text-4xl sm:text-6xl font-black tracking-tight leading-[1.08]">
              POSTERS THAT{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-blue-400 to-[#FBBF24]">
                BRING IDEAS
              </span>{' '}
              TO LIFE.
            </h1>

            <div className="w-16 h-1.5 rounded-full bg-[#FBBF24]" />

            <p className={`text-base sm:text-lg max-w-2xl leading-relaxed ${lightMode ? 'text-slate-600' : 'text-slate-300'}`}>
              We design and craft high-impact wall posters tailored to elevate every space. Explore our signature creations across{' '}
              <span className="font-bold text-[#3B82F6]">Anime</span>,{' '}
              <span className="font-bold text-[#FBBF24]">Comics</span>,{' '}
              <span className="font-bold text-[#3B82F6]">God & Spiritual Art</span>, and{' '}
              <span className="font-bold text-[#FBBF24]">Cartoon</span> collections.
            </p>

            {/* Primary Showcase CTA */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onExploreCategory('all')}
                className="px-7 py-4 rounded-xl bg-[#3B82F6] hover:bg-blue-500 text-white font-bold text-sm flex items-center gap-2 shadow-neon-blue transition transform hover:-translate-y-0.5"
              >
                <span>Explore Poster Designs</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Category Quick Pills */}
            <div className="pt-4">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                Our Poster Categories:
              </p>
              <div className="flex flex-wrap gap-2.5">
                {[
                  { id: 'anime', label: '⚡ Anime Posters' },
                  { id: 'comics', label: '💥 Comic Covers' },
                  { id: 'god', label: '🔱 God & Spiritual' },
                  { id: 'cartoon', label: '🎬 Cartoon Series' },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => onExploreCategory(cat.id)}
                    className={`px-4 py-2 rounded-lg text-xs font-bold border transition ${
                      lightMode
                        ? 'border-slate-300 bg-white hover:border-[#3B82F6] text-slate-800'
                        : 'border-white/10 bg-white/5 hover:border-[#FBBF24] text-slate-200'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Craftsmanship Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 text-xs">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#3B82F6] shrink-0" />
                <span>300 GSM Archival Matte & Metal</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#FBBF24] shrink-0" />
                <span>UV & Fade Resistant Pigments</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#3B82F6] shrink-0" />
                <span>Multiple Frame Finishes</span>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Triptych Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              {/* Background Accent Card (Gold) */}
              <div className="absolute -top-6 -right-4 w-56 h-72 rounded-2xl bg-gradient-to-br from-[#FBBF24] to-amber-700 p-1 rotate-6 shadow-neon-gold opacity-90 hidden sm:block">
                <img
                  src={onePieceImg}
                  alt="Divine Shiva Poster"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* Background Accent Card (Blue) */}
              <div className="absolute -bottom-6 -left-6 w-56 h-72 rounded-2xl bg-gradient-to-tr from-[#3B82F6] to-blue-900 p-1 -rotate-6 shadow-neon-blue opacity-90 hidden sm:block">
                <img
                  src={ghostImg}
                  alt="Comic Poster"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* Main Center Poster Card */}
              <div className="relative z-10 rounded-2xl bg-[#0B1020] border-2 border-[#3B82F6] p-3 shadow-2xl">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden border-[8px] border-neutral-950">
                  <img
                    src={tomImg}
                    alt="Cyber Ronin Poster"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020] via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div>
                      <span className="px-2.5 py-1 rounded bg-[#FBBF24] text-[#0B1020] text-[10px] font-black uppercase tracking-wider">
                        POSTANIX SIGNATURE
                      </span>
                      <h3 className="font-display text-lg font-bold text-white mt-1">
                        CYBER RONIN X
                      </h3>
                      <p className="text-xs text-slate-300">POSTERS THAT BRING IDEAS TO LIFE</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-md text-[10px] font-bold text-[#FBBF24] border border-[#FBBF24]/30">
                      HD PRINT
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
