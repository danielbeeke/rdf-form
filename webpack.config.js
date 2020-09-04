const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { SourceMapDevToolPlugin } = require("webpack");
const CopyWebpackPlugin = require('copy-webpack-plugin');

let htmlPageNames = ['profile', 'vcard'];
let multipleHtmlPlugins = htmlPageNames.map(name => {
  return new HtmlWebpackPlugin({
    template: `./src/${name}.html`,
    filename: `${name}.html`,
  })
});

module.exports = {
  entry: './src/RdfForm.ts',
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
    new SourceMapDevToolPlugin({
      filename: "[file].map"
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      chunks: ['main']
    })
  ].concat(multipleHtmlPlugins)
}
