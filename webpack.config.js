const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');

const envConfig = env => require(`./webpack.${env.mode}.js`)(env);

module.exports = env => {
    return webpackMerge(
        {
            mode: env.mode,
            resolve: {
                alias: {
                    svelte: path.resolve('node_modules', 'svelte')
                },
                extensions: ['.mjs', '.js', '.svelte'],
                mainFields: ['svelte', 'browser', 'module', 'main']
            },
            output: {
                path: path.join(__dirname, '/public'),
                filename: '[name].js',
                chunkFilename: '[name].[id].js'
            },
            plugins: [
                new webpack.ProgressPlugin(),
                new HtmlWebpackPlugin({
                    template: './src/index.html',
                    minify: true
                })
            ]
        },
        envConfig(env)
    );
};
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const path = require('path');

// const mode = process.env.NODE_ENV || 'development';
// const prod = mode === 'production';

// module.exports = {
//     resolve: {
        // alias: {
        //     svelte: path.resolve('node_modules', 'svelte')
        // },
        // extensions: ['.mjs', '.js', '.svelte'],
        // mainFields: ['svelte', 'browser', 'module', 'main']
//     },
//     output: {
//         path: path.join(__dirname, '/public'),
//         filename: '[name].js',
//         chunkFilename: '[name].[id].js'
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.svelte$/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: 'svelte-loader',
//                     options: {
//                         emitCss: true,
//                         hotReload: true
//                     }
//                 }
//             },
//             {
//                 test: /\.css$/,
//                 exclude: /node_modules/,
//                 use: [
//                     {
//                         loader: MiniCssExtractPlugin.loader,
//                         options: { hmr: !prod }
//                     },
//                     'css-loader?sourceMap=true'
//                 ]
//             }
//         ]
//     },
//     mode,
//     plugins: [
//         new MiniCssExtractPlugin({
//             filename: '[name].css',
//             chunkFilename: '[name].[id].css'
//         })
//     ],
//     devtool: prod ? false: 'source-map'
// };