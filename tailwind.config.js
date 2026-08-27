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
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          DEFAULT: '#2563eb',
          light: '#2563eb',
          dark: '#3b82f6',
        },
        surface: {
          light: '#ffffff',
          dark: '#121215',
        },
        body: {
          light: '#fafafa',
          dark: '#09090b',
        },
        subtle: {
          light: '#f4f4f5',
          dark: '#141418',
        },
        typography: {
          light: '#09090b',
          dark: '#f4f4f5',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Prompt', 'Sarabun', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        heading: ['"Plus Jakarta Sans"', 'Prompt', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04)',
        'card-dark': '0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px -1px rgba(0, 0, 0, 0.2)',
        'card-dark-hover': '0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.3)',
        'glow-brand': '0 0 50px -10px rgba(37, 99, 235, 0.3)',
      },
      animation: {
        'blob': 'blob 14s infinite ease-in-out',
        'blob-slow': 'blob 22s infinite ease-in-out',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-slow': 'pulseGlow 6s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -40px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.95)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-12px)',
          },
        },
        pulseGlow: {
          '0%, 100%': {
            opacity: '0.4',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '0.7',
            transform: 'scale(1.08)',
          },
        },
      },
    },
  },
  plugins: [],
}
