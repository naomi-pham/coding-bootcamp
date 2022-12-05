const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "hsl(var(--color-primary) / 1)",
      secondary: "hsl(var(--color-secondary) / 1)",
      white: "hsl(var(--color-white) / 1)",
    },
  },
  plugins: [],
};
