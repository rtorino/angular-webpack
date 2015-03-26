'use strict';

var path = require('path');
var webpack = require('webpack');

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
  // externals: {
  //   'angular': 'angular',
  //   'angular-ui-router': 'angular-ui-router'
  // },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', "sass?includePaths[]=" + styleRoot]
      },
      // {
      //   test: /\.html$/,
      //   loader: 'ngtemplate!html'
      // },
      {
        test: /\.woff$/,
        loader: 'url?prefix=font/&limit=5000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf$/,
        loader: 'file?prefix=font/'
      },
      {
        test: /\.eot$/,
        loader: 'file?prefix=font/'
      },
      {
        test: /\.svg$/,
        loader: 'file?prefix=font/'
      }
    ],
    noParse: [
      path.join(bowerRoot, '/angular'),
      path.join(bowerRoot, '/angular-route'),
      path.join(bowerRoot, '/angular-ui-router'),
      path.join(bowerRoot, '/angular-mocks'),
      path.join(bowerRoot, '/jquery')
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
    new webpack.ResolverPlugin([
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
    ], ['normal', 'loader']),
    new webpack.ContextReplacementPlugin(/.*$/, /a^/),
    new webpack.ProvidePlugin({
      'angular': 'exports?window.angular!bower/angular'
    })
  ],
  devtool: '#source-map'
};
