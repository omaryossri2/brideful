/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FBF8F5',
        rose: '#C47B8A',
        brown: '#2C1810',
        tan: '#7A6660',
        accent: '#E8D8D0',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        xs: '11px',
        sm: '12px',
        base: '14px',
        lg: '15px',
        xl: '16px',
        '2xl': '20px',
        '3xl': '26px',
        '4xl': '30px',
        '5xl': '42px',
        '6xl': '52px',
      },
      letterSpacing: {
        tight: '-0.01em',
        normal: '0em',
        wide: '0.01em',
        wider: '0.04em',
        widest: '0.18em',
      },
    },
  },
  plugins: [],
}
