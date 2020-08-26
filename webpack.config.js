const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { SourceMapDevToolPlugin } = require("webpack");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/RdfForm.js',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  devtool: false,
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.min.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public', to: '.' },
      ],
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new SourceMapDevToolPlugin({
      filename: "[file].map"
    }),
  ]
}
