import type {Config} from "tailwindcss";
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'grad': 'linear-gradient(0.25turn,#AA00FF, #EA00FF)',
      },
    },
  },

  darkMode: "class",
  plugins: [
    function ({addUtilities, theme, e}) {
      const newUtilities = {
        '.text-grad': {
          background: theme('backgroundImage.grad'),
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        '.bg-grad': {
          background: theme('backgroundImage.grad')
        }
      }
      addUtilities(newUtilities);
    }, nextui()
  ],
};
export default config;
