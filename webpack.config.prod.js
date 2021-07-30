const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const base = require('./webpack.config.base')

module.exports = {
    ...base,
    mode: 'production',
    plugins: [
        ...base.plugins,
        new MiniCssExtractPlugin({
            // 类似于 webpackOptions.output 中的选项
            // 所有选项都是可选的
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css',
        }),
    ],
    module: {
        rules: [
            ...base.module.rules,
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "/public/path/to/",
                        },
                    },
                    "css-loader",
                ],
            },
        ],
    },
};