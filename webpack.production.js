const HtmlWebpackPlugin = require("html-webpack-plugin");
const CspHtmlWebpackPlugin = require("csp-html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { merge } = require("webpack-merge");
const base = require("./webpack.config");
const path = require("path");

module.exports = merge(base, {
  mode: "production",
  devtool: false,
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/react/index.html"),
      filename: "index.html",
      base: "react://rse"
    }),
    // You can paste your CSP in this website https://csp-evaluator.withgoogle.com/
    // for it to give you suggestions on how strong your CSP is
    new CspHtmlWebpackPlugin(
      {
        "base-uri": ["'self'"],
        "object-src": ["'none'"],
        "script-src": ["'self'"],
        "style-src": ["'self' 'unsafe-inline'"],
        "frame-src": ["'none'"],
        "worker-src": ["'none'"]
      }, {
            enabled: true,
            nonceEnabled: {
                "style-src": false,
            },
        }
    )
  ],
  optimization: {
    minimize: true,
    minimizer: [
      "...", // This adds default minimizers to webpack. For JS, Terser is used. // https://webpack.js.org/configuration/optimization/#optimizationminimizer
      new CssMinimizerPlugin()
    ]
  }
});
