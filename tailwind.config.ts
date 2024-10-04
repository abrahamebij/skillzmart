import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {},
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "E85C0D",
          secondary: "FABC3F",
        },
      },
    ],
  },
  plugins: [daisyui],
};
export default config;
