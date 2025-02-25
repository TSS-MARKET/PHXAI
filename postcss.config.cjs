module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        background: "#0a0f1e", // Deep futuristic background
        foreground: "#e0e0e0", // Bright contrast text
        primary: "#00eaff", // Neon blue
        secondary: "#ff007f", // Neon pink/magenta
        accent: "#8f00ff", // Cyber purple
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};