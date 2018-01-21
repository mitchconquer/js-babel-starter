"use static";

const webpack = require("webpack");
const path = require("path");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = {
  entry: "./app/main.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "main.bundle.js"
  },
  devtool: "source-map",
  devServer: {
    inline: true,
    overlay: {
      errors: true,
      warnings: true
    },
    contentBase: [path.join(__dirname), path.join(__dirname, "build")]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        query: {
          presets: ["env"]
        }
      }
    ]
  },
  stats: "errors-only",
  plugins: [
    new BrowserSyncPlugin(
      {
        host: "localhost",
        port: 3000,
        proxy: "http://localhost:8080/"
      },
      { reload: false }
    )
  ]
};
