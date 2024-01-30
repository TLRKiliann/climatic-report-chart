import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      dropShadow: {
        "lg": "2px 2px 1px rgba(0,0,0, 0.5)",
      },
      boxShadow: {
        "boxchart": "0px 0px 7px rgba(100,100,100, 0.3)",
        "boxcustom": "0px 0px 7px rgba(0,0,0, 0.5)",
      }
    },
  },
  plugins: [],
};
export default config;
