const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
 
module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js"
  },
  module: {
    rules: [
      /* rules buat component */
      {
        test: /\.css$/i,
        exclude: /styles/,
        use: [
          {
            loader: 'to-string-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      /* rules buat global style */
      {
        test: /\.css$/,
        include: /styles/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    })
  ]
}