import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      colors: {
        primary: {
          DEFAULT: '#B6F09C',
          70: '#0E5A3A',
          60: '#423419',
          50: '#422721',
          40: '#5B60F0',
          30: '#4248f0',
          20: '#8387F5',
          10: '#A1A3F7',
        },

        neutral: {
          95: '#232324',
          90: '#121326',
          85: '#06070D',
          80: '#353650',
          75: '#14191F',
          65: '#161633',
          60: '#161B1D',
          55: '#06061b',
          50: '#0D0F10',
          45: '#4F4F66',
          40: '#686B6E',
          35: '#353D4B',
          30: '#1A1D21',
          20: '#6F767E',
          15: '#020318',
          10: '#191A19',
          5: '#131419',
        },
        base: {
          success: '#3EC621',
          warning: '#DEA600',
          error: '#E54D4D',
          information: '#396BC6',
        },
        blue: {
          20: '#1877F2',
          10: '#156BD9',
        },
        green: {
          20: '#99FFAE',
          10: '#67FE85',
        },
        'custom-blue': 'rgba(53, 54, 80, 0.70)',
      },
    },
  },
  plugins: [],
};
export default config;
