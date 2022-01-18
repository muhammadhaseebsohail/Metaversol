module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'purple': '#BF8AED',

      'blue-9': '#1D1429',
      'blue-10': '#1D1429',
    },
    width: {
      'w-full': '100%',
      '102': '29.125rem',
    },
  },
  plugins: [],
}
