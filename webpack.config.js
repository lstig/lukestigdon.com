const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const glob = require('glob');

const PATHS = {
    dist: path.join(__dirname, '/dist'),
    src: path.join(__dirname, '/src')
}

module.exports = env => ({
    mode: env.production ? 'production' : 'development',
    output: {
        path: PATHS.dist,
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
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
            inject: 'head',
            hash: true,
            template: `${PATHS.src}/index.html`,
            filename: 'index.html'
        }),
        new PurgecssPlugin({
            paths: glob.sync(`${PATHS.src}/**/*`,  { nodir: true })
        }),
        new CopyPlugin({
            patterns: [ `${PATHS.src}/CNAME` ]
        }),
        new CleanWebpackPlugin()
    ],
    devtool: env.production ? false: 'source-map',
    devServer: {
        contentBase: PATHS.dist
    }
});
