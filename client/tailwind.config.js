/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        customBlue: '#263A99', // Add your custom color here
      },
    },
  },
  plugins: [],
};
