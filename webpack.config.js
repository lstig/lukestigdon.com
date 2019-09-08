const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const glob = require('glob');

const PATHS = {
    pub: path.join(__dirname, '/public'),
    src: path.join(__dirname, '/src')
}

module.exports = env => ({
    mode: env.mode,
    output: {
        path: PATHS.pub,
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.[contenthash].css',
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: `${PATHS.src}/index.html`,
            filename: 'index.html'
        }),
        new PurgecssPlugin({
            paths: glob.sync(`${PATHS.src}/**/*`,  { nodir: true })
        }),
        new CopyPlugin([
            `${PATHS.src}/CNAME`
        ]),
        new CleanWebpackPlugin()
    ],
    devtool: env.mode === 'development' ? 'source-map' : false
});
