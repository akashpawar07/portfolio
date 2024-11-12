/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  colors:{
    'fb': '#3b5999',
    'linkedin': '#0077b5',
    'youtube': '#cd201f',
    'instagram': '#e4405f'
  },
  darkMode: 'class',
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      display: ['group-hover'],
    },
  },
  plugins: [],
}