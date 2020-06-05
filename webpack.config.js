const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    mode: "development",
    entry: "./index.js",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname,"./dist")
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [
                    "babel-loader"
                // "eslint-loader"
            ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "better-react",
            template: "./index.html"
        })
    ],
    devServer: {
        port: 3006,
        open: true
    }

}