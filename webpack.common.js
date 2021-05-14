const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.json5', '.png'],
    // keep this synchronized with the tsconfig.json#compilerOptions.paths
    alias: {
      Data: path.resolve(__dirname, 'data'),
    },
  },
  module: {
    rules: [
      {
        test: /\.json5$/,
        loader: 'json5-loader',
        type: 'javascript/auto',
      },
      {
        test: /\.png/,
        type: 'asset/resource',
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
  ],
}
