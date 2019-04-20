const pathResolve = require('path').resolve
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const config = require('dotenv').config();

if (config.error)
    throw new Error(config.error);

module.exports = env => ({
    entry: {
        main: [
            'whatwg-fetch',
            pathResolve(`${process.cwd()}/src/Main.jsx`)
        ],
    },
    output: {
        filename: '[name]-bundle.js',
        path: pathResolve(`${process.cwd()}/dist/`),
      publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        },{
            test: /\.(scss|css)$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template : './src/index.html',
            filename: './index.html'
        }),
        new webpack.DefinePlugin({
            __DEV__  : JSON.stringify(env.NODE_ENV === 'development'),
            __PROD__ : JSON.stringify(env.NODE_ENV === 'production'),
            __TEST__ : JSON.stringify(env.NODE_ENV === 'test'),

            API_KEY   : JSON.stringify(process.env.API_KEY),
            API_URL   : JSON.stringify(process.env.API_URL),
            API_TOKEN : JSON.stringify(process.env.API_TOKEN)
        })
    ],
    resolve: {
        extensions: [".js", ".jsx", ".json"],
        alias: {
            "@components": pathResolve(process.cwd(), 'src/components'),
            "@store": pathResolve(process.cwd(), 'src/store'),
            "@styles": pathResolve(process.cwd(), 'src/styles'),
            "@locales": pathResolve(process.cwd(), 'src/i18n'),
            "@constants": pathResolve(process.cwd(), 'src/constants'),
            "@routes": pathResolve(process.cwd(), 'src/routes'),
            "@shared": pathResolve(process.cwd(), 'src/shared')
        }
    },

    mode: env.NODE_ENV,
    devtool: (env.NODE_ENV === 'development') ? 'source-map' : false,
    devServer: {
        port: 8081,
        host: '0.0.0.0',
        overlay: true,
        hot: true,
        contentBase: '/dist',
        historyApiFallback: true
    }
});
