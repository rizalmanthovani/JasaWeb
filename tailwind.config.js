/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#2a2a2a',
        'bg-secondary': '#1e1e1e',
        'bg-card': '#333333',
        'gold': '#C9A84C',
        'gold-light': '#E8C96B',
        'gold-dark': '#A8893C',
        'text-primary': '#FFFFFF',
        'text-secondary': '#BBBBBB',
        'text-muted': '#777777',
      },
      fontFamily: {
        'heading': ['Montserrat', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'sm': '6px',
        'md': '12px',
        'lg': '20px',
      },
      boxShadow: {
        'gold': '0 0 30px rgba(201,168,76,0.15)',
        'gold-sm': '0 0 20px rgba(201,168,76,0.2)',
        'gold-lg': '0 0 50px rgba(201,168,76,0.25)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A84C, #E8C96B)',
        'gold-divider': 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-gold': 'pulse-gold 2s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'bounce-slow': 'bounce 2s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-gold': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(201,168,76,0.3)' },
          '50%': { boxShadow: '0 0 50px rgba(201,168,76,0.6)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
