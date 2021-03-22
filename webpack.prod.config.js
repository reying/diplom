const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, './dist'),
        enviroment: {
            arrowFunction: false
        }
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