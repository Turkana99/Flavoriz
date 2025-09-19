/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "login-background": "url('src/assets/images/bg1.jpg')",
      },
      colors: {
        mainColor: "#FFA319",
      },
    },
  },
  plugins: [],
};
