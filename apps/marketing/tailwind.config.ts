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
        "bg-primary": "#EAF5F1",
        "bg-elevated": "#DDEDE7",
        "bg-card": "#F8FCFA",
        "jade-bg": "#EAF5F1",
        border: "rgba(15, 63, 53, 0.12)",
        "text-primary": "#12332C",
        "text-secondary": "rgba(18, 51, 44, 0.65)",
        "text-muted": "rgba(18, 51, 44, 0.45)",
        ink: "#12332C",
        jade: "#2F7F6D",
        "jade-dark": "#246454",
        deep: "#0F3F35",
        mint: "#B9E8DC",
        accent: "#2F7F6D",
        "accent-dim": "#246454",
        success: "#2F7F6D"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
        serif: ["var(--font-fraunces)", "ui-serif", "Georgia", "serif"]
      },
      boxShadow: {
        glow: "0 0 80px rgba(47, 127, 109, 0.16)",
        jade: "0 14px 30px rgba(15, 63, 53, 0.12)",
        "jade-lg": "0 34px 80px rgba(15, 63, 53, 0.18)"
      },
      backgroundImage: {
        "grid-jade":
          "linear-gradient(rgba(47,127,109,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(47,127,109,0.06) 1px, transparent 1px)"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        "route-dash": {
          "100%": { strokeDashoffset: "-84" }
        },
        scan: {
          "0%, 100%": { transform: "translateY(-18%)", opacity: "0" },
          "12%, 82%": { opacity: "0.58" },
          "50%": { transform: "translateY(118%)", opacity: "0.18" }
        }
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "route-dash": "route-dash 2.8s linear infinite",
        scan: "scan 5.6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
