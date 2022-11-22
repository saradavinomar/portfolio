/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./**/*.{html,js}"],
  
  theme: {
    extend: {
      colors: {
        'body': '#FFFFFF'
      },
      fontFamily: {
        'inter': ["'Inter'", 'sans-serif']
      
       
        }

    },
  },
}
{}

plugins: [
  // …
  require("tailwindcss-hyphens")
  // …
]
// …
};