import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        greenlight: {
          50: '#f5fff5',
          100: '#e6fae6',
          200: '#cff7cd',
          300: '#b5efb3',
          400: '#a8e6a3',
          500: '#7dcb78',
          600: '#5fa75c',
          700: '#3f7c3f',
          800: '#295229',
          900: '#183318',
        },
        neutral: {
          50: '#ffffff',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#0a0a0a',
        },
      },
    },
  },
  plugins: [],
};
export default config;
