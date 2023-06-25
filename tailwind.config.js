/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding:'16px',
    },
    extend: {
      colors: {
        light: "#FAFCFE",
        primary: "#51B1A6",
        dark: "#24243F",
        text: "#5A5A75",
        subText: "#8C8CA1",
      },
      boxShadow: {
        button: '0 0 15px 0 rgba(0, 0, 0, 0.11)',
        card: '0 0 20px 0 rgba(0, 0, 0, 0.3)',
      },
      screen: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

