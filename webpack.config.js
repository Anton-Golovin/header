const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/main.js",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "./dist/js/"),
    filename: "main.js"
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: "../index.html",
      template: path.resolve(__dirname, "./src/main.html")
    })
  ]
};
