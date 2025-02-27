/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "serif"],
      },
      colors: {
        primary: {
          base: "#165C7D",
          50: "#f2f9fd",
          100: "#e3f2fb",
          200: "#c1e6f6",
          300: "#8bd1ee",
          400: "#4db9e3",
          500: "#26a1d1",
          600: "#1881b1",
          700: "#146890",
          800: "#165c7d",
          900: "#174963",
          950: "#0f2f42",
        },
        secondary: "#FFA300",
        accent: "#009ED0",
        background: "#e7eef1",
        text: "#111827",
        error: "#C13018",
        warning: "#FFA300",
        info: "#009ED0",
        success: "#00C246",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
