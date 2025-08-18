/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx,mdx}",
    "./.storybook/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      /* ----------------
       * Spacing (tokens)
       * ---------------- */
      spacing: {
        "0": "0px",
        "0_5x": "4px",
        "1x": "8px",
        "2x": "16px",
        "3x": "24px",
        "4x": "32px",
        "5x": "40px",
        "6x": "48px",
        "7x": "56px",
        "8x": "64px",
        "9x": "72px",
        "10x": "80px",
      },

      /* ----------------
       * Colors
       * ---------------- */
      colors: {
        white: "#ffffff",
        black: "#000000",

        digital: {
          25:  "#f4f3fc",
          50:  "#dedefb",
          100: "#bcbdf6",
          200: "#9b9cf2",
          300: "#7a7cee",
          400: "#585be9",
          500: "#373ae5",
          600: "#292cb7",
          700: "#1b1d88",
          800: "#0e0f59",
          900: "#00012b",
        },
        brand: {
          25:  "#faf9f5",
          50:  "#f8f4ec",
          100: "#f6eddd",
          200: "#f3e5ce",
          300: "#f1debf",
          400: "#e4d1b2",
          500: "#d8c5a5",
          600: "#cbb898",
          700: "#c2ad86",
          800: "#baa173",
          900: "#b19661",
        },
        gray: {
          100: "#d1d1d1",
          200: "#b9b9b9",
          300: "#a1a1a1",
          400: "#8a8a8a",
          500: "#747474",
          600: "#5e5e5e",
          700: "#494949",
          800: "#343434",
          900: "#212121",
        },

        /* semantic shortcuts */
        fg: {
          default: "#00012b",            // Digital.900
          "default-inverted": "#ffffff", // on dark
          ghost: "#00000000",
          subtle: "rgba(255,255,255,0.50)",
          contrast: "#ffffff",
          "high-contrast": "#00012b",
          muted: "#747474",
          focused: "#292cb7",            // Digital.600
        },
        bg: {
          default: "#ffffff",
          "high-contrast": "#00012b",
          ghost: "#00000000",
        },
        transparent: {
          DEFAULT: "#00000000",
          brand: "rgba(177,150,97,0.20)",   // brand tone
          digital: "rgba(55,58,229,0.10)",  // digital tone
          subtle: "rgba(255,255,255,0.50)",
          dark: "rgba(0,0,0,0.40)",
        },
      },

      /* ----------------
       * Borders / Radii
       * ---------------- */
      borderWidth: {
        thin: "1px",
        medium: "1.5px",
        thick: "2px",
        "extra-thin": "0.5px",
      },
      borderRadius: {
        "br-small": "4px",
        "br-medium": "8px",
        "br-large": "16px",
        "cmp-s": "6px",
        "cmp-m": "8px",
        "cmp-l": "10px",
        circular: "9999px",
      },

      /* ----------------
       * Shadows
       * ---------------- */
      boxShadow: {
        "elevation-2": "0 2px 16px 0 rgba(27, 25, 107, 0.35)",
      },
    },
  },
  plugins: [],
};