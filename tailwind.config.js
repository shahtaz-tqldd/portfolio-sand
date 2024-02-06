/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    screens: {
      xs: "350px",
      sm: "576px",
      md: "764px",
      lg: "992px",
      xl: "1200px",
    },
    container: {
      center: true,
      padding: "20px",
      screens: {
        xs: "360px",
        sm: "600px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1370px",
        "3xl": "1540px",
      },
    },
    extend: {
      transitionProperty: {
        height: "height",
      },
      colors: {
        primaryColor: "#11998E",
        secondary: "#EC6A4B",
        bgColor: "#CCEEFB",
        lightText: "#BDBDBD",
        textColor: "#000000",
      },
    },
  },
  plugins: [
    // require("tailwind-scrollbar-hide"),
    // require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
