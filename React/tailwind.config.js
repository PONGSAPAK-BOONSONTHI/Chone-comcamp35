/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mb2': '768px',
      'mb': '900px',
      'lg': '1024px',
      '520': '520px',
      '768': '768px'
    },
    fontSize: {
      sm: '15.2px',
      base: '16px',
        '2base' : '18px',
      xl: '20px',
      '2xl': '28px',
      '3xl': '57',
      '4xl': '',
      '5xl': '',
    },
  },
  plugins: [],
}

