// tailwind.config.js
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
    theme: {
      extend: {
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
        },
      },
    },
    plugins: [require("daisyui")],
    daisyui: {
      themes: [
        {
          winterdark: {
            primary: "#fca311",        // CTA Button
            secondary: "#90A4AE",      // Secondary accents
            accent: "#00b4d8",         // Links or highlights
            neutral: "#1e2a38",        // Card / modal backgrounds
            "base-100": "#0d1b2a",     // Main background
            "base-200": "#1b263b",     // Section background
            "base-300": "#415a77",     // Slightly brighter areas
            info: "#2196F3",
            success: "#81c784",
            warning: "#fdd835",
            error: "#e57373",
          },
        },
      ],
      darkTheme: "winterdark", // set as default
    },
  };
  