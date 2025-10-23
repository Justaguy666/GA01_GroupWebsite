/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./members/*.html",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-gradient': 'var(--header-gradient)',
        'body-gradient': 'var(--body-gradient)',
        'member-info-left-gradient': 'var(--member-info-left-content-gradient)',
        'member-info-right-gradient': 'var(--member-info-right-content-gradient)',
      }
    },
  },
  plugins: [],
}

