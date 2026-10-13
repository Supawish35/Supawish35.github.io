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
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          DEFAULT: '#0f766e',
          light: '#0f766e',
          dark: '#2dd4bf',
          // Text/icon accent: deep teal on light, bright teal on dark (see :root vars in index.css).
          ink: 'rgb(var(--brand-ink) / <alpha-value>)',
        },
        surface: {
          light: '#ffffff',
          dark: '#1c1917',
        },
        body: {
          light: '#fafaf9',
          dark: '#0c0a09',
        },
        subtle: {
          light: '#f5f5f4',
          dark: '#1c1917',
        },
        typography: {
          light: '#1c1917',
          dark: '#f5f5f4',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Prompt', 'Sarabun', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        heading: ['"Plus Jakarta Sans"', 'Prompt', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(28, 25, 23, 0.05)',
        'card': '0 1px 3px 0 rgba(28, 25, 23, 0.06), 0 1px 2px -1px rgba(28, 25, 23, 0.06)',
        'card-hover': '0 12px 28px -6px rgba(28, 25, 23, 0.12), 0 8px 10px -6px rgba(28, 25, 23, 0.06)',
        'card-dark': '0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px -1px rgba(0, 0, 0, 0.2)',
        'card-dark-hover': '0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.3)',
        'glow-brand': '0 0 50px -10px rgba(13, 148, 136, 0.3)',
      },
      animation: {
        'blob': 'blob 14s infinite ease-in-out',
        'blob-slow': 'blob 22s infinite ease-in-out',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-slow': 'pulseGlow 6s ease-in-out infinite',
        'pop-in': 'popIn 200ms cubic-bezier(0.16, 1, 0.3, 1)',
        'drop-in': 'dropIn 160ms ease-out',
      },
      keyframes: {
        popIn: {
          from: { opacity: '0', transform: 'scale(0.96)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        dropIn: {
          from: { opacity: '0', transform: 'translateY(-8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
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
