/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lilac: {
          DEFAULT: '#a78bfa',
          light: '#c4b5fd',
          dark: '#7c3aed',
        },
        mint: {
          DEFAULT: '#6ee7b7',
          dark: '#10b981',
        },
        ink: '#2d2440',
        sand: '#f5f0e8',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
