/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
   keyframes: {
    marquee: {
      "0%": { transform: "translateX(0%)" },
      "100%": { transform: "translateX(-100%)" }, // move full width
    },
  },
  animation: {
    marquee: "marquee 20s linear infinite",
    "marquee-reverse": "marquee 20s linear infinite reverse",
  },


      colors: {
        black: '#000000',
        white: '#ffffff',
        gray: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#cccccc',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        yellow: {
          400: '#facc15',
          500: '#d4af37',
          600: '#ca8a04',
        }
      },
      fontFamily: {
        'serif': ['DM Serif Display', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      letterSpacing: {
        'wider': '0.05em',
        'widest': '0.1em',
      },
      lineHeight: {
        'relaxed': '1.75',
        'loose': '2',
      },
    },
  },
  plugins: [],
};