/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#0B6B4F',
          50: '#E7F6F0',
          100: '#C5E8DA',
          200: '#8FD0B6',
          300: '#4AAB88',
          400: '#1D8A68',
          500: '#0B6B4F',
          600: '#0A5C44',
          700: '#084536',
          800: '#062E24',
          900: '#041C16',
          950: '#06140F',
        },
        ink: '#06140F',
        cream: '#F4F0E6',
        mist: '#D5E6DE',
      },
      fontFamily: {
        sans: ['Outfit', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Instrument Serif', 'Georgia', 'serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 80px -20px rgba(11, 107, 79, 0.7)',
        plate: '0 10px 30px -12px rgba(11, 107, 79, 0.45), 0 0 0 1px rgba(255,255,255,0.08)',
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to right, rgba(213,230,222,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(213,230,222,0.06) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
