import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        secondary: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
        },
        // Couleurs inspirées de l'île Maurice
        turquoise: {
          50: '#f0fdfe',
          100: '#ccf7fb',
          200: '#99eff7',
          300: '#5ee2f0',
          400: '#2dcce3',
          500: '#14b8d4',
          600: '#0e91b2',
          700: '#127490',
          800: '#155e75',
          900: '#164e63',
        },
        coral: {
          50: '#fff5f3',
          100: '#ffe8e3',
          200: '#ffd5cc',
          300: '#ffb8a8',
          400: '#ff8f75',
          500: '#ff6b4a',
          600: '#ed4822',
          700: '#c83a19',
          800: '#a5331a',
          900: '#872f1c',
        },
        tropical: {
          50: '#f0fdf9',
          100: '#ccfbef',
          200: '#99f6e0',
          300: '#5feacd',
          400: '#2dd4b8',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
