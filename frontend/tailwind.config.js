module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/preline/dist/*.js"],
  theme: {},
  plugins: [
    "preline/plugin",
    require("autoprefixer"),
    require("autoprefixer"),
    "daisyui",
    require("flowbite/plugin"),
  ],
};
