import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#050505",
        "bg-elevated": "#0a0a0a",
        "bg-card": "#111111",
        border: "#1a1a1a",
        "text-primary": "#f5f5f5",
        "text-secondary": "#888888",
        "text-muted": "#555555",
        accent: "#a78bfa",
        "accent-dim": "#7c3aed",
        success: "#22c55e"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      boxShadow: {
        glow: "0 0 80px rgba(167, 139, 250, 0.16)"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      animation: {
        marquee: "marquee 30s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
