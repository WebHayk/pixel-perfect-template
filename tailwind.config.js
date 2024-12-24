/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        "main": "0px 5px 40px rgba(0, 0, 0, 0.16)"
      },
      backgroundImage: {
        "main-gradient": "linear-gradient(132.15deg, #0B0B0F 0%, #23393B 95.96%)"
      },
      boxShadow: {
        "paper-shadow-lg": "0px 0px 25px rgba(0, 0, 0, 0.05)",
        "paper-shadow": "0px 2px 8px rgba(0, 0, 0, 0.06), 0px 0px 0px 1px rgba(0, 0, 0, 0.08)"
      },
      fontSize: {
        title: "32px"
      },
      fontFamily: {
        proDisplay: ["SF Pro Display", "sans-serif"]
      },
      colors: {
        primary: "rgba(36, 255, 188, 1)",
        white: "#fff",
        "dark-border": "#15171B",
        dark: "#0B0B0F",
        "dark-icons": "#83838D",
        secondary: "#1B1E22",
        "primary-body": "#F5F5F5"
      },
    },
  },
  plugins: [],
}
