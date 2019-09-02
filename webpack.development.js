module.exports = env => ({
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(svelte)$/,
                use: {
                    loader: 'svelte-loader',
                    options: {
                        hotReload: true
                    }
                }
            },
            { test: /\.html$/, loader: 'html-loader' }
        ]
    },
    devtool: 'source-map'
});
