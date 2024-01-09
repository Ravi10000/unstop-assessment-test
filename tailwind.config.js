const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        _designGray: "#F6F8FA",
        _designBlue: {
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
