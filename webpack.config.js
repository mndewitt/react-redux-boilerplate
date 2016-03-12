const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.IgnorePlugin(/react\/lib\/ReactContext/)
    ],
    module: {
        loaders: [
            {
                test: /\.js?/,
                exclude: [/node_modules/, /styles/],
                loaders: ['babel'],
                include: [
                    path.join(__dirname, 'src'),
                    path.join(__dirname, 'test')
                ]
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            }
        ]
    },
    externals: {
        jsdom: 'window',
        cheerio: 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': 'window',
        'text-encoding': 'window'
    },
};
