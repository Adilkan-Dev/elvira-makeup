/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nude: {
          50: '#FDF8F5',
          100: '#FAF0E9',
          200: '#F5E1D3',
          300: '#EDDAC8',
          400: '#E8CBAE',
          500: '#D4A982',
          600: '#C49370',
        },
        champagne: {
          50: '#FFFDF7',
          100: '#FFF8E7',
          200: '#FFEFC4',
          300: '#FFE6A0',
          400: '#E8C874',
          500: '#D4AF37',
          600: '#B8960F',
        },
        charcoal: {
          50: '#F5F5F5',
          100: '#E8E8E8',
          200: '#D1D1D1',
          300: '#A3A3A3',
          400: '#737373',
          500: '#3D3D3D',
          600: '#2D2D2D',
          700: '#1F1F1F',
          800: '#171717',
          900: '#0D0D0D',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-luxury': 'linear-gradient(135deg, #FDF8F5 0%, #FFF8E7 50%, #FAF0E9 100%)',
        'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #E8C874 50%, #D4AF37 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(212, 175, 55, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}
