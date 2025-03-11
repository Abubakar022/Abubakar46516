/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", // Include all your files in src
    "./public/index.html", // If using HTML in the public folder
  ],
  theme: {
    extend: {
      animation: {
        "move-left": "move-left 1s linear infinite",
        "move-right": "move-right 1s linear infinite", // Corrected this line
        "ping-tu": "ping-tu 1s ease-in-out infinite",
        // Add other animations here if needed
      },
      keyframes: {
        "move-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "move-right": {
          "0%": { transform: "translateX(-50%)" }, // Corrected this line
          "100%": { transform: "translateX(0)" }, // Corrected this line
        },
        "ping-tu": {
          "75%, 100%": {
            transform: "scale(3)",
            opacity: "0",
          },
        },
        // Add other keyframes here if needed
      },
    },
  },
  plugins: [],
};