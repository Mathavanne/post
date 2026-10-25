export const CATEGORIES = [
  { id: 'all', name: 'All Posters', badge: '12 Designs' },
  { id: 'anime', name: 'Anime', badge: 'Series' },
  { id: 'comics', name: 'Comics', badge: 'Action' },
  { id: 'god', name: 'God & Spiritual', badge: 'Divine' },
  { id: 'cartoon', name: 'Cartoon', badge: 'Toons' },
];

export const POSTER_SIZES = [
  { id: 'A4', label: 'A4 (8.3" × 11.7")' },
  { id: 'A3', label: 'A3 (11.7" × 16.5")' },
  { id: 'A2', label: 'A2 Collector (16.5" × 23.4")' },
];

export const FRAME_OPTIONS = [
  { id: 'matte-black', name: 'Matte Onyx Frame', borderClass: 'border-[10px] border-neutral-950 shadow-2xl' },
  { id: 'metallic-gold', name: 'Impact Gold Frame', borderClass: 'border-[10px] border-[#FBBF24] shadow-neon-gold' },
  { id: 'electric-blue', name: 'Neon Cyber Frame', borderClass: 'border-[10px] border-[#3B82F6] shadow-neon-blue' },
  { id: 'alabaster-white', name: 'Gallery White Frame', borderClass: 'border-[10px] border-[#F8FAFC] shadow-xl' },
  { id: 'frameless-metal', name: 'Frameless Metal Finish', borderClass: 'border border-white/20 shadow-2xl' },
];

export const POSTERS = [
  // ANIME CATEGORY
  {
    id: 'px-anime-01',
    title: 'Cyber Ronin X: Blue Blade',
    category: 'anime',
    subtitle: 'NEO-TOKYO SERIES // VOL. 01',
    finish: '300 GSM Matte + Spot UV',
    badge: 'Signature Anime',
    accent: '#3B82F6',
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=900&q=85',
    description: 'High-contrast cyber-samurai artwork featuring electric blue katana slashes and gold foil accents on 300 GSM archival matte paper.'
  },
  {
    id: 'px-anime-02',
    title: 'Sun God Gear Awakening',
    category: 'anime',
    subtitle: 'GRAND LINE LEGENDS // 05',
    finish: 'HD Satin Archival Print',
    badge: 'Anime Fan Art',
    accent: '#FBBF24',
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=900&q=85',
    description: 'Explosive celestial clouds and radiant golden energy bursts designed to stand out under ambient room lighting.'
  },
  {
    id: 'px-anime-03',
    title: 'Shadow Monarch: Arise',
    category: 'anime',
    subtitle: 'DUNGEON SOVEREIGN // 09',
    finish: 'Deep Matte Velvet Finish',
    badge: 'Glow Series',
    accent: '#3B82F6',
    image: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=900&q=85',
    description: 'Deep midnight abyss tones paired with glowing azure sovereign flames and razor-sharp line art.'
  },

  // COMICS CATEGORY
  {
    id: 'px-comic-01',
    title: 'Gotham Knight: Gold Vigilante',
    category: 'comics',
    subtitle: 'NOIR DETECTIVE // ISSUE #88',
    finish: 'Vintage Halftone Matte',
    badge: 'Halftone Print',
    accent: '#FBBF24',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=900&q=85',
    description: 'Classic comic-book halftone dots meet striking amber skyline silhouettes for a bold collector wall piece.'
  },
  {
    id: 'px-comic-02',
    title: 'Multiverse Web-Slinger',
    category: 'comics',
    subtitle: 'SPIDER-VERSE // ISSUE #42',
    finish: 'High-Gloss Chromatic Print',
    badge: 'Comic Action',
    accent: '#3B82F6',
    image: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=900&q=85',
    description: 'Dynamic mid-air leap across a neon cityscape with comic speedlines and chromatic aberration detail.'
  },
  {
    id: 'px-comic-03',
    title: 'Adamantium Berserker X',
    category: 'comics',
    subtitle: 'MUTANT CHRONICLES // #01',
    finish: '300 GSM Heavyweight Art',
    badge: 'Classic Cover',
    accent: '#FBBF24',
    image: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&w=900&q=85',
    description: 'Signature yellow-and-blue slash motif paying homage to golden-age comic covers.'
  },

  // GOD & SPIRITUAL CATEGORY
  {
    id: 'px-god-01',
    title: 'Cosmic Mahakal Shiva',
    category: 'god',
    subtitle: 'DIVINE AURA // ADIYOGI 01',
    finish: 'Metallic Gold Foil Accents',
    badge: 'Gold Foil Art',
    accent: '#3B82F6',
    image: 'https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?auto=format&fit=crop&w=900&q=85',
    description: 'Sacred meditation silhouette bathed in cosmic Neelkanth blue nebula light and golden trishul geometry.'
  },
  {
    id: 'px-god-02',
    title: 'Fierce Rudra Hanuman',
    category: 'god',
    subtitle: 'SANKAT MOCHAN // 02',
    finish: 'Textured Canvas Matte',
    badge: 'Sacred Impact',
    accent: '#FBBF24',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=85',
    description: 'Radiant golden sunrise aura symbolizing strength, devotion, and fearless energy for your living space or gym.'
  },
  {
    id: 'px-god-03',
    title: 'Divine Krishna Bansuri',
    category: 'god',
    subtitle: 'VRINDAVAN CELESTIAL // 03',
    finish: 'Pearl Lustre Archival Print',
    badge: 'Peaceful Aura',
    accent: '#3B82F6',
    image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=900&q=85',
    description: 'Iridescent peacock-feather blues paired with serene golden flute notes and sacred lotus motifs.'
  },

  // CARTOON CATEGORY
  {
    id: 'px-cartoon-01',
    title: 'Retro Toon Pop Squad',
    category: 'cartoon',
    subtitle: 'SATURDAY MORNING // VOL. 01',
    finish: 'Vibrant Pop-Art Satin',
    badge: 'Classic Toon',
    accent: '#FBBF24',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=900&q=85',
    description: 'Playful, colorful cartoon illustration bursting with nostalgia, bold outlines, and lively character expressions.'
  },
  {
    id: 'px-cartoon-02',
    title: 'Interdimensional Portal Toons',
    category: 'cartoon',
    subtitle: 'SCI-FI ANIMATION // VOL. 04',
    finish: 'Neon UV Reactive Matte',
    badge: 'Sci-Fi Toon',
    accent: '#3B82F6',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=85',
    description: 'Swirling cosmic portals and surreal cartoon geometry crafted with vibrant electric blues and golden highlights.'
  },
  {
    id: 'px-cartoon-03',
    title: 'Street Skater Toon Mascot',
    category: 'cartoon',
    subtitle: 'URBAN TOON STUDIO // 07',
    finish: '300 GSM Graffiti Matte',
    badge: 'Toon Street',
    accent: '#FBBF24',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=900&q=85',
    description: 'Bold street-art cartoon styling combining expressive mascot illustration with high-impact typography.'
  },
];
