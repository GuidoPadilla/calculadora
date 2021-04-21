const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESlintWebpackPlugin = require('eslint-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        use: ['babel-loader'],
      },
      {
        test: /\.(jsx?)$/,
        use: ['@linaria/webpack-loader'],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: process.env.NODE_ENV !== 'production',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  devServer: {
    contentBase: './dist',
  },
  plugins: [new HtmlWebpackPlugin({
    templateContent: `
<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title> Calculadora GuidoPadilla 19200</title>
    </head>
    <body>
      <div id="root"></div>
    </body>
</html>`,
  }),
  new MiniCssExtractPlugin({
    filename: 'styles.css',
  }),
  new ESlintWebpackPlugin({
  })],
}
