module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundColor: {
        'kp-blue': '#1ab1e5'
      },
      colors: {
        'kp-blue': '#1ab1e5',
        'kp-blue-dark': '#046e89',
        'kp-blue-light': '#f5f8f9'
      }
    }
  },
  plugins: []
}
