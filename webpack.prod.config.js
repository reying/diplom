const path = require('path');

module.exports = {
    entry: '.srx/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, './dist')
    },
    mode: 'prodaction',
    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                },
            },
            exclude: /node_modules/,
        }]
    }
};