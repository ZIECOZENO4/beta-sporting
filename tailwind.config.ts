import {nextui} from '@nextui-org/react'


/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    fontSize: {
      sm: '0.750rem',
      base: '1rem',
      xl: '1.333rem',
      '2xl': '1.777rem',
      '3xl': '2.369rem',
      '4xl': '3.158rem',
      '5xl': '4.210rem',
      'header': 'PT Serif' ,
         'heading': 'Poppins',
      'body': 'Poppins',
    },

    fontWeight: {
      normal: '400',
      bold: '700',
    },
    extend: {
      backgroundImage: {
        'carosel' : "url('/images/backgroung1.png')",
        'carosel1' : "url('/images/background2.png')",
        'bet-bg' : "url('/images/bg-1.jpg')",
        'footer': "url('/images/footer.png')",
      },
      fontSize: {
  sm: '0.750rem',
  base: '1rem',
  xl: '1.333rem',
  '2xl': '1.777rem',
  '3xl': '2.369rem',
  '4xl': '3.158rem',
  '5xl': '4.210rem',
},
fontFamily: {
  heading: 'Poppins',
  body: 'Poppins',
},
fontWeight: {
  normal: '400',
  bold: '700',
},
      colors: {
        "primary-500": "#877EFF",
        "secondary-500": "#FFB620",
        blue: "#0095F6",
        "logout-btn": "#FF5A5A",
        "navbar-menu": "rgba(16, 16, 18, 0.6)",
        "dark-1": "#000000",
        "dark-2": "#121417",
        "dark-3": "#101012",
        "dark-4": "#1F1F22",
        "light-1": "#FFFFFF",
        "light-2": "#EFEFEF",
        "light-3": "#7878A3",
        "light-4": "#5C5C7B",
        "gray-1": "#697C89",
        'color1': '#3d68b3',
        'color2': '#23376a',
        glassmorphism: "rgba(16, 16, 18, 0.60)",
                'bg': '#0f172a',
        'textColor': '#ddd',
        'softBg': '#1f273a',
        'softTextColor': '#a6a6a6'
      },
      keyframes: {
        gradient: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
      },
      animation: {
        gradient: 'gradient 3s ease infinite',
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui(),
    require('flowbite/plugin'),
  ],
}