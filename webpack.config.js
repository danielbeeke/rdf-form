const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { SourceMapDevToolPlugin } = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const isDevelopment = process.env.NODE_ENV === 'development'
const globImporter = require('node-sass-glob-importer');

let htmlPageNames = isDevelopment ? ['prayer', 'recipe'] : []
let multipleHtmlPlugins = htmlPageNames.map(name => {
  return new HtmlWebpackPlugin({
    template: `./html/${name}.html`,
    filename: `${name}.html`,
  })
})

module.exports = {
  entry: './src/RdfForm.ts',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.scss']
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
      },
      {
        test: /\.s(a|c)ss$/,
        loader: [
          'raw-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment,
              sassOptions: {
                importer: globImporter()
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          to: '.'
        },

      ],
    }),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
    }),
    new SourceMapDevToolPlugin({
      filename: '[file].map'
    }),
    new HtmlWebpackPlugin({
      template: './html/index.html',
      chunks: ['main']
    })
  ].concat(multipleHtmlPlugins)
}
