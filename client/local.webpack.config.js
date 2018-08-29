"use strict";
const baseWebpackConfig = require("./webpack.config.js");
const webpackMerge=require("webpack-merge");
const OpenBrowserPlugin = require('open-browser-webpack-plugin')
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = webpackMerge.smart(baseWebpackConfig, {
    "devtool": "cheap-eval-source-map",
    "plugins": [
        new OpenBrowserPlugin({url:'http://localhost:9000/'}),
    ],
    /*"plugins": [
        new HtmlWebpackPlugin({template: path.join(process.cwd(), "index.html")}),
        new webpack.HotModuleReplacementPlugin()
    ],*/
    // for webpack-dev-server
    devServer: {
        //contentBase: path.join(process.cwd(), "src"),
        historyApiFallback: true,
        quiet: false,
        stats: "minimal",
        inline: true,
        setup: function(app) {
            /*app.get('/lectures', function (req, res) {
                let y = req.params;
                res.setHeader();
                res.sendFile(path.join(localServerPath, 'stub-tile.mvt'));
            });*/
        }
    }
});

//console.log(JSON.stringify(config));
module.exports = config;