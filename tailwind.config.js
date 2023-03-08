/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  plugins: [],
  theme: {
    extend: {
      screens: {
        m2xl: { max: '1535px' },
        mlg: { max: '1023px' },
        mmd: { max: '767px' },
        msm: { max: '639px' },
        mxl: { max: '1279px' },
      },
    },
  },
};
