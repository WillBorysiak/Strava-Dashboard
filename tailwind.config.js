/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Oswald", "san-serif"],
      },
      colors: {
        orange: "#ea580c",
        zinc: "#e4e4e7",
        lightBackground: "rgba(0, 0, 0, 0.25)",
        darkBackground: "rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
