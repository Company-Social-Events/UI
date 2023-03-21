/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      gridTemplateColumns: {
        // Complex site-specific column configuration
        'sidebar-calendar': '256px 1fr',
      }
    },
  },
  plugins: [require("daisyui")],
}
