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
        brand: {
          light: '#6f42c1',
          dark: '#8a63d2',
          DEFAULT: '#6f42c1',
        },
        surface: {
          light: '#ffffff',
          dark: '#252728',
        },
        body: {
          light: '#f8f9fa',
          dark: '#121212',
        },
        subtle: {
          light: '#f8f9fa',
          dark: '#1c1c1d',
        },
        typography: {
          light: '#212529',
          dark: '#f8f9fa',
        },
        facebook: {
          DEFAULT: '#0865fd',
          hover: '#2476fc',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'Sarabun', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 12px rgba(79, 73, 73, 0.08)',
        'card-hover': '0 12px 28px rgba(0, 0, 0, 0.15)',
        'card-dark': '0 4px 12px rgba(0, 0, 0, 0.3)',
        'card-dark-hover': '0 12px 28px rgba(0, 0, 0, 0.45)',
      }
    },
  },
  plugins: [],
}

