const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body',
});
const extractTextPlugin = new ExtractTextPlugin({
  filename: "styles.css",
  disable: false,
  allChunks: true,
});


module.exports = {
  // entry: './client/mobx-simple.js',
  entry: './client/react-mobx.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  devtool: "#inline-source-map",
  module: {
    loaders: [
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.hbs$/, use: 'handlebars-loader', exclude: /node_modules/ },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
          publicPath: '/dist'
        })
      },
      {
        test: /\.css$/, use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader',
        publicPath: '/dist'
      })
      },
      { test: /\.(eot|svg|ttf|woff|woff2)$/, use: 'file-loader?name=/public/fonts/[name].[ext]' }
    ]
  },
  plugins: [
    htmlWebpackPlugin,
    extractTextPlugin,
    // new webpack.optimize.UglifyJsPlugin(),
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     'NODE_ENV': JSON.stringify('production')
    //   }
    // })
  ],
  resolve: {
    modules: [
      path.resolve('./client'),
      'node_modules',
    ]
  }
};
