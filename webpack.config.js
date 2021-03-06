const path = require('path');

module.exports = {
  entry: './client/src/index.jsx',
  output: {
    path: path.resolve(__dirname, './client/public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env',
              '@babel/preset-react'],
          },
        },
      },
      {
        test: [/\.css$/, /\.s[ac]ss$/i],
        use: ['style-loader', 'css-loader',  'sass-loader',],
      },
    ],
  },
};
