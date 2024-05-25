import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "2.65rem",
          xl: "3.25rem",
        },
      },
      // animation: {
      //   "flip-show": "flip-show 2s cubic-bezier(0, 0, 0.2, 1)",
      //   "flip-out": "flip-out 2.5s cubic-bezier(0, 0, 0.2, 1)",
      // },
      // keyframes: {
      //   "flip-show": {
      //     from: { transform: "translateY(0)", transformOrigin: "50% bottom " },
      //     to: { transform: "translateY(120%)", transformOrigin: "50% bottom " },
      //   },
      //   "flip-out": {
      //     from: { transform: "translateY(-120%)", transformOrigin: "50% bottom " },
      //     to: { transform: "translateY(0)", transformOrigin: "50% bottom " },
      //   },
      // },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          background: "#141d29",
          primary: "#0070F3",
          secondary: "#FF9F43",
          accent: "#8B00FF",
          neutral: "#dedede",
          "base-100": "#333333",
          "base-200": "#555555",
          "base-300": "#000000",
        },
        light: {
          background: "#f5f5dc",
          primary: "#0070F3",
          secondary: "#FF9F43",
          accent: "#8B00FF",
          neutral: "#212121",
          "base-100": "#FFFFFF",
          "base-200": "#F2F2F2",
          "base-300": "#f1f1f1",
        },
      },
    ],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: false,
    themeRoot: ":root",
  },
}

export default config
