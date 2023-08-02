module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    colors: {
      tail: "#489797",
      white: "#000000",
      medium_gray: "#D9D9D9",
      black: "#000000",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      serif: ["Praise", "cursive"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
