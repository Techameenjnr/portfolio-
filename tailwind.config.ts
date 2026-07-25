import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#0B0F14",
        panel: "#121821",
        line: "#1F2937",
        ink: "#E6EDF3",
        muted: "#8B96A5",
        amber: "#E3B341",
        blue: "#4C9EEB",
        green: "#3FB950",
        red: "#F85149",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  plugins: [],
};
export default config;