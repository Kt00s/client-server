let packgeJSON = require('./package.json');
let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    build: path.join(__dirname, 'target', 'classes', 'META-INF', 'resources', 'webjars', packgeJSON.name, packgeJSON.version)
};

module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'app': './src/main.ts'
    },
    output:{
        path: PATHS.build,
        filename: "[name].js"       // название создаваемого файла
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module:{
        rules:[   //загрузчик для ts
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
                options: { configFileName: path.resolve(__dirname, 'tsconfig.json') }
            }
        ]
    },

};