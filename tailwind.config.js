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
        'primary': 'hsl(4, 100%, 67%)',
        'secondary': '#ff527b',
        'dark-slate-grey': 'hsl(234, 29%, 20%)',
        'charcoal-grey': 'hsl(235, 18%, 26%)', 
        'website-white': 'hsl(0, 0%, 100%)', 
        
      }, 
      fontSize: {
        'paragraph': '16px', 
      }, 
      fontWeight: {
        '400': '400', 
        '700': '700', 

      }, 
      fontFamily: {
        'roboto': 'Roboto, sans-serif'
      }
    },
  },
  plugins: [],
}
