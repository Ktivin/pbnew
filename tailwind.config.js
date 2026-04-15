/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
    "./data/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1F5A4F",
        accent: "#F37483",
        light: "#F2FAFD",
        dark: "#0E2A26",
        text: "#111827",
        brandBlue: "#87CEEB",
      },
      boxShadow: {
        glow: "0 24px 80px rgba(31, 90, 79, 0.16)",
        soft: "0 18px 48px rgba(17, 24, 39, 0.08)",
      },
      backgroundImage: {
        "pet-grid":
          "radial-gradient(circle at top left, rgba(135, 206, 235, 0.24), transparent 28%), radial-gradient(circle at bottom right, rgba(243, 116, 131, 0.18), transparent 28%)",
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        "float-slow": "float 11s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
        shimmer: "shimmer 2.8s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -14px, 0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
    },
  },
  plugins: [],
};
