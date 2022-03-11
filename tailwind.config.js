module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '128': '32rem',
        '160': '40rem',
      },
      width: {
        '128': '32rem'
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
