/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", ".public/*.html"],
  theme: {
    extend: {
      colors: {
        'gs-green-500': '#b5ce45',
        'gs-green-600': '#a4b838',
        'gs-green-700': '#93a12b',
        'gs-green-800': '#828b1f',
        'gs-green-900': '#717214',
        'gs-violet-500': '#afabcc',
        'gs-violet-600': '#9b9ba6',
        'gs-violet-700': '#86868d',
        'gs-violet-800': '#726d73',
        'gs-violet-900': '#5e535a'
      },
    },
  },
  plugins: [],
}
