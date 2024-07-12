/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        light: '#F7FFF7',
        night: '#001021',
        'n-0': '#DB2763',
        'n-1': '#EE964B',
        'n-2': '#547AA5',
        'n-3': '#F9F871',
        'n-4': '#4FFBDF',
        'n-5': '#00C9A7',
        'n-6': '#00D2FC',
        'n-7': '#845EC2',
      },
    },
  },
  plugins: [],
};
