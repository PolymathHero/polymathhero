/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "newswire.html",
    "products-page.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

