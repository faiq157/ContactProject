/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  tailwindConfig: "./styles/tailwind.config.js",
  theme: {
    extend: {
      gray: "#5A5959",
      yellow: "#FFEAAE",
      dark_yellow: "#FCCA3F",
      orange: "#F6820C",
    },
  },
  plugins: [],
  plugins: ["prettier-plugin-tailwindcss"],
};
// // prettier.config.js
// module.exports = {
//   plugins: ["prettier-plugin-tailwindcss"],
// };
