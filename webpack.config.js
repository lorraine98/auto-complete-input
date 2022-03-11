const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "src", "index"),
  output: {
    path: path.join(__dirname, "dist"),
    chunkFilename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /.(j|t)s$/,
        include: [path.resolve(__dirname, "src")],
        exclude: [path.resolve(__dirname, "node_modules")],
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/,
        use: ["file-loader"],
      },
    ],
  },
  resolve: { extensions: [".json", ".js", ".ts"] },
  plugins: [
    new HtmlWebpackPlugin({ template: "./index.html" }),
    new CleanWebpackPlugin(),
  ],
  devtool: "source-map",
};
