/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#131310',
        surface: '#272521',
        paper: '#F5F3EB',
        fg: '#F5F3EB',
        muted: '#A8A494',
        acid: '#DBFF29',
        border: '#3B3A35',
      },
      fontFamily: {
        sans: ['"Archivo"', '"Noto Sans Thai"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
