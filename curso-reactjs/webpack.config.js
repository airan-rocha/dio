const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  // entry: './src/index.js',
  entry: './teste.js',
  output: {
    path: path.resolve(__dirname, 'dist'), 
    filename: 'bundle.js',
  },
  module: {
      rules: [
          {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                  loader: "babel-loader"
              }
          }
      ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    })
  ]
};