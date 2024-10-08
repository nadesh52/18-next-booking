import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: { noto: ["Noto Sans Thai"] },
      colors: {
        primary: "#0C2D57",
        secondary: "#404B69",
        base: "#DBEDF3",
        accent: "#F73859",
        white: "#FFFFFF",
        error: "#b91c1c",
        success: {
          primary: "#10b981",
          secondary: "#0f766e",
        },
        warn: "#fcd34d",
        gray: "#94a3b8",
        light: "#EFECEC",
      },
      borderColor: {
        DEFAULT: "#DBEDF3",
        primary: "#0C2D57",
        secondary: "#404B69",
        base: "#DBEDF3",
        accent: "#F73859",
        white: "#FFFFFF",
        error: "#b91c1c",
        success: {
          primary: "#10b981",
          secondary: "#0f766e",
        },
        warn: "#fcd34d",
        gray: "#94a3b8",
        light: "#EFECEC",
      },
      fontSize: {
        sm: ["12px", "16px"],
        md: ["14px", "20px"],
        lg: ["16px", "24px"],
        xl: ["18px", "28px"],
        "2xl": ["20px", "28px"],
        "3xl": ["24px", "32px"],
        "4xl": ["30px", "36px"],
        "5xl": ["36px", "42px"],
      },
      screens: {
        "3xs": "320px",
        "2xs": "375px",
        xs: "425px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
