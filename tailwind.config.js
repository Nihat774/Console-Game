/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
   colors:{
      'orange':'#f97316',
      'red':'#ef4444',
      'green':'#22c55e',
      'black':'#000',
      'white':'#fff',
      'stone':'#44403c',
      'wstone':'#87837f'
    }, 
    fontFamily:{
      'rubik':' "Rubik", sans-serif',
      'poppins':' "Poppins" , sans-serif', 

    }
  },
  plugins: [],
}

