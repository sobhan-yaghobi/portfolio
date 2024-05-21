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
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          background: "#1F2937",
          primary: "#0070F3",
          secondary: "#FF9F43",
          accent: "#8B00FF",
          neutral: "#212121",
          "base-100": "#333333",
          "base-200": "#555555",
          "base-300": "#000000",
        },
        light: {
          background: "#f5f5dc",
          primary: "#0070F3",
          secondary: "#FF9F43",
          accent: "#8B00FF",
          neutral: "#F2F2F2",
          "base-100": "#FFFFFF",
          "base-200": "#F2F2F2",
          "base-300": "#000000",
        },
      },
    ],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
}

export default config
