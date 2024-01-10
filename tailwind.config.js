const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      animation: {
        appear: "appear 0.5s ease-in-out forwards",
        disappear: "disappear 0.5s ease-in-out forwards",
        slideIn: "slideIn 0.5s ease-in-out forwards",
        slideOut: "slideOut 0.5s ease-in-out forwards",
      },
      keyframes: {
        appear: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        disappear: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        slideIn: {
          "0%": { left: "-100%" },
          "100%": { left: "0" },
        },
        slideOut: {
          "0%": { left: "0" },
          "100%": { left: "-100%" },
        },
      },
      colors: {
        _designGray: {
          100: "#F6F8FA",
          300: "#F6F8FA",
        },
        _designBlue: {
          100: "#3E6493",
          200: "#F2F8FE",
          300: "#E5F1FC",
          500: "#0073E6",
          600: "#1C4980",
        },
        _designRed: {
          300: "#FBEBEA",
          500: "#D63500",
        },
      },
    },
  },
  plugins: [nextui()],
};
