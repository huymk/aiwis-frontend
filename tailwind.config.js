/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#6d8777",
        // "primary-color": "#45624e",
        "navbar-start": "#D0ECFF",
        "navbar-end": " #E2F4FC",
        "pallete-end": "#9fd6f9",
        bgpurple: "#D5D6FF",
        bgcyan: "#CDF2FF",
        gradientOrangeStart: "#EDDDD4",
        gradientOrangeEnd: "#FFDDCB",
        background: "#FBFBFD",
        pallete: "#1097da",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
