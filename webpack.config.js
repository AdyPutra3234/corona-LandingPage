const dotenv = require('dotenv');
const webpack = require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry : './src/index.js',
    output : {
        path : path.resolve(__dirname , 'dist/'),
        filename : 'index.bundle.js'
    },
    module : {
        rules : [
            {
                test :/\.css$/,
                use : [
                    {loader : 'style-loader'},
                    {loader : 'css-loader'},
                ]
            },
            {
                test : /\.(png|jpg)$/,
                loader : 'file-loader',
                include : path.join(__dirname, 'src/')
            }
        ]
    },
    plugins : [ 

        new CleanWebpackPlugin(),

        new HTMLWebpackPlugin ({
            template : 'src/index.html',
            filename : 'index.html'
        }),

        new webpack.DefinePlugin({
            'process.env' : JSON.stringify(dotenv.config().parsed)
        }),

    ],

    devServer : {
        historyApiFallback: true,
        index : 'index.html',
        compress : true,
        port : process.env.PORT || 5050
    } 
}