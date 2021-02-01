const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

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
        new HTMLWebpackPlugin ({
            template : 'src/index.html',
            filename : 'index.bundle.html'
        })
    ],
    devServer : {
        index : 'index.bundle.html',
        compress : true,
        port : 9090
    } 
}