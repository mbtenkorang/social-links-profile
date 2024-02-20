/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      colors: {
        "primary-green": "hsl(75, 94%, 57%)",
        "neutral-white": "hsl(0, 0%, 100%)",
        "neutral-grey": "hsl(0, 0%, 20%)",
        "dark-grey": "hsl(0, 0%, 12%)",
        offblack: "hsl(0, 0%, 8%)",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans"],
    },
  },
  plugins: [],
};
