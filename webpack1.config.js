const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: path.resolve(__dirname, 'src/app.js'),
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {exclude: ['.gitignore']}),
    new HtmlWebpackPlugin({ title: 'CSS Duplication' })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader:'css-loader',
            options: { modules:true, localIdentName:'[path][name]__[local]' }
          },
        ]
      }
    ]
  },
  resolve: {
    modules: ['src', 'node_modules']
  }
};
