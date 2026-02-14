import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "orange-primary": "#FFB68D",
        "orange-secondary": "#FF9C71",
        "orange-tertiary": "#fB9B50",
        claro: "#F9EEE7",
        oscuro: "#0D0D0D",
        "orange-night": "#F57724",
        "amber-warm": "#F59E0B",
        peach: "#FBBF7D",
      },
      dropShadow: {
        lg: "2px 2px 5px rgba(0, 0, 0, 0.5)",
        glow: "0 0 20px rgba(251, 155, 80, 0.35)",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0, 0, 0, 0.06)",
        "glass-lg": "0 12px 48px rgba(0, 0, 0, 0.08)",
        "glass-hover": "0 16px 56px rgba(0, 0, 0, 0.1)",
        "orange-glow": "0 4px 20px rgba(251, 155, 80, 0.25)",
        "orange-glow-lg": "0 8px 40px rgba(251, 155, 80, 0.3)",
      },
      animation: {
        shimmer: "shimmer 3s ease-in-out infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
        "gradient-shift": "gradient-shift 4s ease-in-out infinite",
        "dot-pulse": "dot-pulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
