import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        beige: {
          50: "#fcf8f2",
          100: "#f6efe6",
          200: "#eadcca",
          300: "#d9c2a8",
        },
        rosegold: {
          100: "#f7e7e2",
          200: "#e8c9c0",
          300: "#d9a79b",
        },
        charcoal: {
          900: "#161616",
          800: "#242424",
          700: "#333333",
        },
      },
      boxShadow: {
        luxe: "0 20px 60px rgba(27, 20, 15, 0.08)",
        soft: "0 12px 40px rgba(27, 20, 15, 0.06)",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top left, rgba(217, 167, 155, 0.35), transparent 30%), radial-gradient(circle at top right, rgba(232, 201, 192, 0.35), transparent 25%), linear-gradient(180deg, rgba(255,255,255,0.86), rgba(252,248,242,1))",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        "slow-fade": "slowFade 0.8s ease-out both",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        slowFade: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;