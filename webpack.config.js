const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { SourceMapDevToolPlugin, optimize } = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const isDevelopment = process.env.NODE_ENV === 'development'
const globImporter = require('node-sass-glob-importer');

let htmlPageNames = isDevelopment ? ['prayer', 'recipe', 'index'] : []
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
    filename: 'RdfForm.js'
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
    new optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
    }),
  ].concat(multipleHtmlPlugins)
}

if (isDevelopment) {
  module.exports.plugins.push(new SourceMapDevToolPlugin({
      filename: '[file].map'
    })
  )

  module.exports.plugins.push(    new CopyWebpackPlugin({
      patterns: [{
        from: 'public',
        to: '.'
      }]})
  )
}
