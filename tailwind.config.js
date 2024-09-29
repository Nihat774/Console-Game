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
        'stone': '#44403c',
        'wstone': '#87837f',
        'bg-stone':'#0f0600',
       'bg-green':'#166534',
       'purple':'#631682',
       'yellow':'#606b0f',
       'qara':'#21211d',
       'gradient':'#d9822b',
       'gradient1':'#ed8be1'
        
      },
    },
  
    fontFamily: {
      'rubik': ' "Rubik", sans-serif',
      'poppins': ' "Poppins" , sans-serif',

    },
    screens: {
      'xs': '300px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [require('daisyui')],
}


