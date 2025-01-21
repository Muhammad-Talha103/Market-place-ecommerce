import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        violet: '#7E33E0',
        accent: '#FB2E86',
        subTextColor : '#8A8FB9',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        xs: "375px",
        xsm: "420px",
        ssm:'540px',
        sm: "640px",
        sml: "700px",
        md: "768px",
        smd: "800px",
        mdl: "890px",
        lg: "1024px",
        lgl: "1130px",
        lgll:'1190px',
        xlg:'1250px',
        xl: "1300px",
        xxl: "1420",
        "2xl": "1650px",
      },
    },
  },
  plugins: [],
} satisfies Config;
