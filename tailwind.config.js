/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs principales (noir/blanc pur)
        noir: '#000000',
        blanc: '#FFFFFF',
        'gris-clair': '#F5F5F5',
      },
      fontFamily: {
        // Police principale pour le corps de texte
        sans: ['Roboto Mono', 'monospace'],
        // Police pour les titres
        display: ['Rowdies', 'cursive'],
        // Police monospace pour la section Dev
        mono: ['Roboto Mono', 'monospace'],
      },
      fontSize: {
        // Tailles custom pour le hero
        'hero': ['96px', { lineHeight: '0.9', letterSpacing: '-0.02em', fontWeight: '900' }],
        'hero-mobile': ['48px', { lineHeight: '0.95', letterSpacing: '-0.02em', fontWeight: '900' }],
      },
      spacing: {
        // Espacements custom sections
        'section-desktop': '20px',
        'section-mobile': '20px',
      },
      maxWidth: {
        // Container principal
        'container': '1200px',
        'form': '600px',
      },
      animation: {
        // Animation marquee pour logo
        'marquee': 'marquee 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
