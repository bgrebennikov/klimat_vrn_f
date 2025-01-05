import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing:{
        'vh-80': '80vh'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'gray-150': '#ECECEC',
      }
    },
    fontFamily: {
      'gilroy-bold': 'gilroy-bold',
      'manrope': 'manrope-regular',
      'manrope-medium': 'manrope-medium',
      'manrope-bold': 'manrope-bold'
    },
  },
  plugins: [],
  darkMode: 'selector'
};
export default config;
