const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                // loads .html files
                test: /\.(html)$/,
                include: [path.resolve(__dirname, "app/src")],
                use: {
                    loader: "html-loader",
                    options: {
                        sources: {
                            "list": [{
                                "tag": "img",
                                "attribute": "data-src",
                                "type": "src"
                            }]
                        }
                    }
                }
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                    },
                },
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
        modules: [path.join(__dirname, './src'), 'node_modules'],
    },
    plugins: [
        // fix "process is not defined" error;
        // https://stackoverflow.com/a/64553486/1837080
        new webpack.ProvidePlugin({
            process: "process/browser.js",
        }),
        new ReactRefreshWebpackPlugin()
    ]
};
