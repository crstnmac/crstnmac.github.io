const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  darkMode: "class",
  theme: {
    typography: (theme) => ({}),
    extend: {
      colors: {
        black: {
          50: "#f7f7f7",
          100: "#e3e3e3",
          200: "#c8c8c8",
          300: "#a4a4a4",
          400: "#818181",
          500: "#666666",
          600: "#515151",
          700: "#434343",
          800: "#383838",
          900: "#171717",
        },
        brand: {
          DEFAULT: "#26563C",
          50: "#73C197",
          100: "#64BB8C",
          200: "#4CAB77",
          300: "#3F8F63",
          400: "#337250",
          500: "#26563C",
          600: "#152F21",
          700: "#040806",
          800: "#000000",
          900: "#000000",
        },
      },
    },
    fontFamily: {
      sans: ["Inter", ...fontFamily.sans],
      mono: ["Inter", ...fontFamily.mono],
    },
    keyframes: {
      jelly: {
        "0%,100%": { transform: "scale(1, 1)" },
        "25%": { transform: "scale(0.95, 1.05)" },
        "50%": { transform: "scale(1.05, 0.95)" },
        "75%": { transform: "scale(0.95, 1.05)" },
      },
    },
    animation: {
      jelly: "jelly 0.5s",
    },
    animationDuration: {
      1500: "1500ms",
      2000: "2000ms",
      2500: "2500ms",
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
};
