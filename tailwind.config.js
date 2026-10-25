/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        postanix: {
          blue: '#3B82F6',
          gold: '#FBBF24',
          dark: '#0B1020',
          light: '#F8FAFC',
          card: '#11182D',
        }
      },
      fontFamily: {
        display: ['Orbitron', 'Inter', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'neon-blue': '0 0 25px -5px rgba(59, 130, 246, 0.5)',
        'neon-gold': '0 0 25px -5px rgba(251, 191, 36, 0.45)',
      }
    },
  },
  plugins: [],
}
