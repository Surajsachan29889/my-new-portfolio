import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     colors:{
      pri:"#FF7BA9",
      sec:"#C1F4C5",
      tri:"#F2F1EB",
      four:"#65C18C",
      five:"#FFBED8"

     }
    },
  },
  plugins: [nextui()],

};
export default config;
