/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F2F2F2",
        secondary: "#1E2640",
       
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },

    },
  },
  plugins: [],
};
