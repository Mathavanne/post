// Anime Posters Imported Images
import brotherhoodImg from '../../images/anime/Brotherhood.jpeg';
import demonImg from '../../images/anime/demon.jpeg';
import narutoImg from '../../images/anime/naruto.jpeg';
import onePieceImg from '../../images/anime/one-piece.jpeg';
import titanImg from '../../images/anime/titan.jpeg';

// Comics Posters Imported Images
import ghostImg from '../../images/comics/ghost.jpeg';
import hulkImg from '../../images/comics/hulk.jpeg';
import ironImg from '../../images/comics/iron.jpeg';
import pantherImg from '../../images/comics/panther.jpeg';
import thorImg from '../../images/comics/thor.jpeg';


// God & Spiritual Posters Imported Images
import krishnaImg from '../../images/god/krishna.jpeg';
import mixedImg from '../../images/god/mixed.jpeg';
import murugaImg from '../../images/god/muruga.jpeg';
import shivaImg from '../../images/god/shiva.jpeg';
import templeImg from '../../images/god/temple.jpeg';


// Cartoon Posters Imported Images
import doremonImg from '../../images/cartoon/doremon.jpeg';
import oggyImg from '../../images/cartoon/oggy.jpeg';
import pandaImg from '../../images/cartoon/panda.jpeg';
import sonicImg from '../../images/cartoon/Sonic.jpeg';
import tomImg from '../../images/cartoon/tom.jpeg';


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
    title: 'Sun God Gear Awakening',
    category: 'anime',
    subtitle: 'ONE PIECE // GRAND LINE LEGENDS',
    finish: 'HD Satin Archival Print',
    badge: 'Signature Anime',
    accent: '#FBBF24',
    image: onePieceImg, 
    description: 'Explosive celestial clouds, liberated freedom spirit, and radiant golden energy bursts inspired by the legendary pirate voyage.'
  },
  {
    id: 'px-anime-02',
    title: 'Wings of Freedom: Scout Regiment',
    category: 'anime',
    subtitle: 'ATTACK ON TITAN // WALLS OF PARADIS',
    finish: '300 GSM Matte + Spot UV',
    badge: 'Bestseller',
    accent: '#059669',
    image: titanImg, 
    description: 'Vertical maneuvering gear aesthetic featuring dark wall tones, dramatic smoke, and the iconic blue-and-white freedom wings emblem.'
  },
  {
    id: 'px-anime-03',
    title: 'Hinokami Kagura Dance',
    category: 'anime',
    subtitle: 'DEMON SLAYER // CORPS PILLARS',
    finish: 'Deep Matte Velvet Finish',
    badge: 'Glow Series',
    accent: '#EF4444',
    image: demonImg, 
    description: 'Brilliant crimson flame breathing effects and checkered haori motifs contrasted sharply against a dark demonic abyss.'
  },
  {
    id: 'px-anime-04',
    title: 'Seventh Hokage Legacy',
    category: 'anime',
    subtitle: 'NARUTO // HIDDEN LEAF WAY',
    finish: 'Holographic Metallic Foil',
    badge: 'Fan Favorite',
    accent: '#F97316',
    image: narutoImg, 
    description: 'Vibrant orange chakra glows, swirling wind styles, and legendary ninja scrolls rendered in striking metallic foil.'
  },
  {
    id: 'px-anime-05',
    title: 'Fullmetal Alchemical Order',
    category: 'anime',
    subtitle: 'BROTHERHOOD // STATE ALCHEMIST',
    finish: 'Soft Touch Velvet Matte',
    badge: 'Limited Edition',
    accent: '#3B82F6',
    image: brotherhoodImg, 
    description: 'Intricate transmutation circles and legendary alchemical symbols representing equivalent exchange and unbreakable bonds.'
  }
,

  // COMICS CATEGORY
  {
    id: 'px-comic-01',
    title: 'Gotham Knight: Gold Vigilante',
    category: 'comics',
    subtitle: 'NOIR DETECTIVE // ISSUE #88',
    finish: 'Vintage Halftone Matte',
    badge: 'Halftone Print',
    accent: '#FBBF24',
    image: ghostImg,
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
    image:  ironImg,
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
    image: pantherImg,
    description: 'Signature yellow-and-blue slash motif paying homage to golden-age comic covers.'
  },
    {
    id: 'px-comic-04',
    title: 'Adamantium Berserker X',
    category: 'comics',
    subtitle: 'MUTANT CHRONICLES // #01',
    finish: '300 GSM Heavyweight Art',
    badge: 'Classic Cover',
    accent: '#FBBF24',
    image: thorImg,
    description: 'Signature yellow-and-blue slash motif paying homage to golden-age comic covers.'
  },
    {
    id: 'px-comic-05',
    title: 'Adamantium Berserker X',
    category: 'comics',
    subtitle: 'MUTANT CHRONICLES // #01',
    finish: '300 GSM Heavyweight Art',
    badge: 'Classic Cover',
    accent: '#FBBF24',
    image: hulkImg,
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
    image:  shivaImg,
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
    image: krishnaImg,
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
    image: mixedImg,
    description: 'Iridescent peacock-feather blues paired with serene golden flute notes and sacred lotus motifs.'
  },
  {
    id: 'px-god-04',
    title: 'Divine Krishna Bansuri',
    category: 'god',
    subtitle: 'VRINDAVAN CELESTIAL // 03',
    finish: 'Pearl Lustre Archival Print',
    badge: 'Peaceful Aura',
    accent: '#3B82F6',
    image: murugaImg,
    description: 'Iridescent peacock-feather blues paired with serene golden flute notes and sacred lotus motifs.'
  },
  {
    id: 'px-god-05',
    title: 'Divine Krishna Bansuri',
    category: 'god',
    subtitle: 'VRINDAVAN CELESTIAL // 03',
    finish: 'Pearl Lustre Archival Print',
    badge: 'Peaceful Aura',
    accent: '#3B82F6',
    image: templeImg,
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
    image: doremonImg,
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
    image: oggyImg,
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
    image: pandaImg,
    description: 'Bold street-art cartoon styling combining expressive mascot illustration with high-impact typography.'
  },
    {
    id: 'px-cartoon-04',
    title: 'Street Skater Toon Mascot',
    category: 'cartoon',
    subtitle: 'URBAN TOON STUDIO // 07',
    finish: '300 GSM Graffiti Matte',
    badge: 'Toon Street',
    accent: '#FBBF24',
    image: sonicImg,
    description: 'Bold street-art cartoon styling combining expressive mascot illustration with high-impact typography.'
  },
    {
    id: 'px-cartoon-03',
    title: 'Street Skater Toon Mascot',
    category: 'cartoon',
    subtitle: 'URBAN TOON STUDIO // 07',
    finish: '300 GSM Graffiti Matte',
    badge: 'Toon Street',
    accent: '#FBBF24',
    image: tomImg,
    description: 'Bold street-art cartoon styling combining expressive mascot illustration with high-impact typography.'
  },
];
