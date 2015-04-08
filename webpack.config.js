'use strict';

var path = require('path');
var webpack = require('webpack');
var BowerWebpackPlugin = require('bower-webpack-plugin');

var appRoot = path.join(__dirname, '/src');
var bowerRoot = path.join(__dirname, '/bower_components');
var styleRoot = appRoot + '/assets/styles';

module.exports = {
  cache: true,
  debug: true,
  entry: [appRoot + '/app.js'],
  output: {
    path: './dist',
    filename: 'bundle.js',
    chunkFilename: "[id].bundle.js"
  },
  externals: {
    'angular': 'angular',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      },
      {
        test: /\.(woff|svg|ttf|eot)([\?]?.*)$/, 
        loader: 'file-loader?name=[name].[ext]'
      }
    ],
    noParse: [
      path.join(bowerRoot, '/angular'),
      path.join(bowerRoot, '/videojs')
    ]
  },
  resolve: {
    modulesDirectories: [
      'node_modules',
      'bower_components'
    ],
    alias: {
      bower: bowerRoot
    },
    extensions: ['', '.js', '.scss', '.css'],
    root: appRoot
  },
  plugins: [
    new BowerWebpackPlugin({
      searchResolveModulesDirectories: false
    }),
    new webpack.ResolverPlugin([
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
    ], ['normal', 'loader']),
    new webpack.ContextReplacementPlugin(/.*$/, /a^/)
  ],
  devtool: 'eval'
};
