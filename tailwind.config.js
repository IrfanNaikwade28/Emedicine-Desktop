/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize:{
        "menu":"13px",
        "headerSM":"1.1vw",
        "exs":"10px",
        "exss":"11px"
      },
      boxShadow:{
        "card":"0 0 7px 0 rgba(0, 0, 0, .14)",
        "card-dark":"0 0 5px 0px rgba(0, 0, 0, .20)",
      }
    },
  },
  plugins: [],
}