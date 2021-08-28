const path = require('path');
const PrettierPlugin = require("prettier-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
    mode: "production",
    devtool: 'source-map',
    entry: './src/index.ts',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'build'),
        library: "pixair-image",
        libraryTarget: 'umd',
        clean: true
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({ extractComments: false }),
            new OptimizeCSSAssetsPlugin({
                cssProcessorOptions: {
                    map: {
                        inline: false
                    }
                }
            })
        ],
    },
    devServer: {
        open: true,
        hot: true,
        host: "localhost",
        static: [
            {
                directory: path.join(__dirname, 'demo')
            },
            {
                directory: path.join(__dirname, 'build'),
                publicPath: '/build',
            },
        ],
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.(m|j|t)s$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: "css-loader", options: { sourceMap: true } },
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
                use: ['url-loader'],
            }
        ]
    },
    plugins: [
        new PrettierPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/index.css'
        }),
    ],
    resolve: {
        extensions: ['.ts', '.js', '.json']
    }
};