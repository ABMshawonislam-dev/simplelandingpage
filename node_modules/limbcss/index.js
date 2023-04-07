/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const buttons = require("./src/limbComponents/bootstrap/button");
const navbar = require("./src/limbComponents/bootstrap/navbar");

const limbcss = plugin(function ({ addComponents, theme }) {
  addComponents(buttons(theme));
  addComponents(navbar(theme));
});

module.exports = limbcss;
