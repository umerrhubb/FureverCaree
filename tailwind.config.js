/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#fef7f0',
          100: '#fdeee0',
          200: '#fad9bf',
          300: '#f6bf94',
          400: '#f19e67',
          500: '#ed8444',
          600: '#de6f2d',
          700: '#b85a26',
          800: '#934828',
          900: '#773d24',
        },
        cream: {
          50: '#fefcf9',
          100: '#fdf8f1',
          200: '#faf0e4',
          300: '#f6e4d1',
          400: '#f0d4b8',
          500: '#e8c29f',
          600: '#dba885',
          700: '#ca8f6c',
          800: '#a8785c',
          900: '#87654e',
        },
        mauve: {
          50: '#faf7f9',
          100: '#f4eef2',
          200: '#ead9e6',
          300: '#dbbfd3',
          400: '#c899bb',
          500: '#b478a2',
          600: '#9e5a8a',
          700: '#854972',
          800: '#6e3f5f',
          900: '#5c364f',
        },
        mint: {
          50: '#f0fdf6',
          100: '#dcfce9',
          200: '#bbf7d3',
          300: '#86efb0',
          400: '#4ade85',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        sky: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        }
      },
      animation: {
        'bounce-gentle': 'bounceGentle 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        bounceGentle: {
          '0%, 100%': {
            transform: 'translateY(-5%)',
            'animation-timing-function': 'cubic-bezier(0.8,0,1,1)',
          },
          '50%': {
            transform: 'none',
            'animation-timing-function': 'cubic-bezier(0,0,0.2,1)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      }
    },
  },
  plugins: [],
};