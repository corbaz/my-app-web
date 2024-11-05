/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./frontend/dist/**/*.*",
    "./frontend/src/**/*.html",
    "./frontend/src/**/*.css",
    "./frontend/src/**/*.js",
    "./frontend/src/**/*.ts",
    "./frontend/src/**/*.jsx",
    "./frontend/src/**/*.tsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
