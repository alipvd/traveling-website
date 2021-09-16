const path = require("path");

module.exports = {
  entry: "./app/assets/scripts/App.js", //Watch - Process and Bundel

  output: {
    //change the output path from main.js on dist to another that we want
    filename: "bundled.js",
    path: path.resolve(__dirname, "app"),
  },
  mode: "development", // to fix mode warning in terminal
  watch: true,
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", { loader: "postcss-loader", }],
      },
    ],
  },
};
