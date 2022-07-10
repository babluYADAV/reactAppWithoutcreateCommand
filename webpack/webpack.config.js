const path = require("path");

const HtmlWepackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: path.resolve(__dirname, "..", "src/index.js"),
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "..", "./build"),
    filename: "bundle.js",
  },
  mode: "development",
  plugins: [
    new HtmlWepackPlugin({
      template: path.resolve(__dirname, "..", "src/index.html"),
    }),
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    port: 3200,
  },
};
