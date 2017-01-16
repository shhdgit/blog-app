const path = require('path')
const ROOT = path.resolve(__dirname, '../')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main: `${ROOT}/src/index`
  },
  output: {
    path: `${ROOT}/public`,
    filename: 'dist/[name].js',
    chunkFilename: 'dist/chunks/[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    alias: {
      'public': `${ROOT}/public`,
      'src': `${ROOT}/src`,
      'components': `${ROOT}/src/components`,
      'views': `${ROOT}/src/components/views`,
      'api': `${ROOT}/src/api`,
      'routes': `${ROOT}/src/routes`
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        include: `${ROOT}/src/`,
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: `${ROOT}/public/index.origin.html`,
      inject: true
    }),
    new webpack.DllReferencePlugin({
      context: `${ROOT}/config`,
      manifest: require('../config/vendor1.manifest.json')
    }),
    new webpack.DllReferencePlugin({
      context: `${ROOT}/config`,
      manifest: require('../config/vendor2.manifest.json')
    })
  ]
}
