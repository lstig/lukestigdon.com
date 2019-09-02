const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = env => ({
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(svelte)$/,
                use: {
                    loader: 'svelte-loader',
                    options: {
                        emitCss: true
                    }
                }
            },
            { test: /\.html$/, loader: 'html-loader' }
        ]
    },
    plugins: [ new MiniCssExtractPlugin() ],
    devtool: false
});

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