/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
      },      fontFamily: {
        sans: ['var(--font-baloo-bhai)', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      animation: {
        'loading': 'loading 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
