import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "var(--blue)",
        light: "var(--light)",
        pinkred: "var(--pinkred)",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        outfit: ["var(--font-outfit)"],
      },
    },
  },
  plugins: [],
};
export default config;
