## tailwind.config.js 

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}


## cmd

npx tailwindcss -i ./input.css -o ./style.css --watch
