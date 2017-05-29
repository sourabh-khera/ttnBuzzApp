/**
 * Created by sourabh on 3/5/17.
 */

const path = require('path');

module.exports = {
    entry: './src/client/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js',
    },

    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            {test:/\.css$/, loader:'style-loader!css-loader'},
            {
                test: /\.(png|jpg|jpeg|gif|webp|svg|ico)?$/,
                use: [
                    {
                        loader: 'file-loader',

                    },
                ],
            },
        ]
    },
};