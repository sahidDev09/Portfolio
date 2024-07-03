/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 4s linear infinite",
        "spin-fast": "spin 0.5s linear infinite",
      },
      colors: {
        highlight: {
          btn: "#3DB883",
        },
      },
      fontFamily: {
        founders_bl: ["Founders_bl", "sans-serif"],
        founders_lg: ["Founders_lg", "sans-serif"],
        neue: ["Neue", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
