import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue:   "#1254CC",
          dark:   "#0a2e6e",
          light:  "#ddeaff",
          red:    "#CC1717",
          orange: "#f77f00",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Segoe UI", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 24px rgba(0,0,0,.10)",
        "card-lg": "0 8px 40px rgba(0,0,0,.15)",
      },
    },
  },
  plugins: [],
};

export default config;
