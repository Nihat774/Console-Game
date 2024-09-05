/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'orange': '#f97316',
        'red': '#ef4444',
        'green': '#22c55e',
        'black': '#000',
        'white': '#fff',
        'stone': '#44403c',
        'wstone': '#87837f',
        'bg-stone':'#0f0600',
       'bg-green':'#166534',
       'purple':'#631682',
       'yellow':'#606b0f',
       'qara':'#21211d',
       'gradient':'#c6ffdd'
        
      },
    },
  
    fontFamily: {
      'rubik': ' "Rubik", sans-serif',
      'poppins': ' "Poppins" , sans-serif',

    }
  },
  plugins: [require('daisyui')],
}


