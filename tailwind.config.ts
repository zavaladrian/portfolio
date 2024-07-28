import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'phone':'425px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
      'wide':'1440px',
      '4k': '2560px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
      'lavender': '#D6B5EE',
      'antwhite' : '#FBFAFF',
      'mblue': '#081D56',
      'glacier': '#BDD3C7',
      'rblue': '#3961EE',
    },
      fontFamily: {
        'playwrite':[ 'Pacifico', 'cursive'],
      }
    },
  },
  plugins: [],
};
export default config;
