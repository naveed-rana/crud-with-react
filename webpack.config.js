const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
      {
        test: /.jpg$/,
        loader: ['url-loader', 'img-loader']
      },
      {
        test: /.css$/,
        loader: ['style-loader', 'css-loader']
      },
      {
        test: /.jsx$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }

    ],
  }

};
