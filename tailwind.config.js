/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0a0f1e", // Deep dark blue, almost black (futuristic vibe)
        foreground: "#e0e7ff", // Soft neon blue for high contrast
        primary: "#00f7ff", // Bright cyan (glowing cyber effect)
        secondary: "#ff00ff", // Neon magenta for contrast
        accent: "#ffbe0b", // Vivid yellow-orange for emphasis
        border: "#1b1f2a", // Sleek dark border color
        highlight: "#6f00ff", // Electric purple (for special UI elements)
        card: "#121826", // Dark but visible card background
        text: "#94a3b8", // Muted futuristic blue for text
      },
    },
  },
  plugins: [],
};
