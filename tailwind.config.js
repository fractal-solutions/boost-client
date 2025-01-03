/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0052CC",
          dark: "#0747A6",
          light: "#4C9AFF"
        },
        secondary: {
          DEFAULT: "#253858",
          dark: "#172B4D",
          light: "#42526E"
        },
        accent: "#00B8D9",
        background: "#0F172A",
        surface: "#1E293B",
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
        display: ['Lexend', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'neon': '0 0 5px theme(colors.primary.light), 0 0 20px theme(colors.primary.light)',
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{
      dark: {
        ...require("daisyui/src/theming/themes")["dark"],
        primary: "#0052CC",
        secondary: "#253858",
        accent: "#00B8D9",
        "base-100": "#0F172A",
        "base-200": "#1E293B",
      }
    }],
  }
}