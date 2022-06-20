module.exports = {
  darkMode:'class',
  prefix: '',
  content: [
    "./pages/**/*.{ts,tsx}",
    "./features/**/*.{ts,tsx}",
    "./layouts/**/*.{ts,tsx}",
  ],
  theme: {
    fontFamily:{
      sans: ["ui-sans-serif", "system-ui"],
      kaushan:["kaushan Script"],
    },
    boxShadow:{
      
    }
    extend: {
      colors: {
        primary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          DEFAULT: '#0f766e',
        },
        green:{
          DEFAULT:"#00f260",
        },
        dark:{
          DEFAULT:"#010101",
          100:"#0a0b1e",
          200:"#16181d",
          300:"#16181d",
          500:"#0f1115",
          700:"#202125", 
        },
      },
    },
  },
  variants:{
    extend:{
      boxShadow:["dark"]
    },
  },
  plugins: [],
  corePlugins: {
    // ...
   rotate: true,
  },
}