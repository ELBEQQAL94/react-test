module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Saira', 'sans-serif']
    },
    extend: {
      boxShadow: {
        '3xl': '-12px -12px 32px #18191C, 12px 12px 32px rgba(24, 25, 28, 0.8), inset 2px 2px 2px rgba(83, 92, 136, 0.5)',
        '2xl': '-4px -4px 15px rgba(24, 25, 28, 0.2), 4px 4px 15px rgba(32, 34, 38, 0.2), inset 2px 2px 2px rgba(83, 92, 136, 0.1)'
      },
    },
  },
  plugins: [],
}
