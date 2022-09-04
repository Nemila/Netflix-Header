/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "hsl(220, 16%, 10%)",
        primary: "#FF2E63",
        light: "#EAEAEA",
        semiLight: "hsla(0, 0%, 92%, .3)",
      },
    },
  },
  plugins: [],
};
