/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    typography: () => ({}),
    extend: {
      colors: {
        black: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
        brand: {
          DEFAULT: "#26563C",
          50: "#f4f7f5",
          100: "#e9eeec",
          200: "#c9d5ce",
          300: "#a8bbb1",
          400: "#678977",
          500: "#26563c",
          600: "#224d36",
          700: "#1d412d",
          800: "#173424",
          900: "#132a1d",
        },
      },
    },
    fontFamily: {
      sans: ['var(--font-inter)'],
      mono: ['var(--font-fira-code)'],
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
