module.exports = {
  extends: ["next/core-web-vitals"],
  plugins: ["tailwindcss"],
  rules: {
    "tailwindcss/classnames-order": "warn",
    "tailwindcss/no-contradicting-classname": "error",
    "tailwindcss/no-custom-classname": "error",
  },
};