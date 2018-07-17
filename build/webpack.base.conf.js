const path = require('path');
const WebpackBar = require('webpackbar');
const utils = require('./utils');
const config = require('../config');

const resolve = dir => path.join(__dirname, '..', dir);

module.exports = {
  entry: {
    app: './site/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [
      resolve('src'),
      resolve('site'),
      resolve('node_modules')
    ],
    alias: {
      'src': resolve('src'),
      'assets': resolve('src/assets'),
      'components': resolve('src/components'),
      'routes': resolve('src/routes'),
      'views': resolve('src/views')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('site'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('site'), resolve('test')],
        options: {
          cacheDirectory: true
        }
      },
      {
        test: /\.md?$/,
        use: [
          'babel-loader',
          'react-md-doc-loader',
          'react-md-doc-loader/lib/md-doc-loader.js',
        ],
        include: [resolve('site')],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [new WebpackBar()]
};
