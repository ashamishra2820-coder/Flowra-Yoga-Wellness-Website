import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        body: ["Manrope", "system-ui", "sans-serif"],
      },
      colors: {
        sage: { 50: "#f3f6f1", 100: "#e3eadf", 300: "#b5c7ad", 500: "#7e9a74", 700: "#4f6648", 900: "#2a3827" },
        sand: { 50: "#faf7f2", 100: "#f1ebe0", 300: "#dccfb8" },
        clay: "#b8795a",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
