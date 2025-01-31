const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'astral.min.js',
    path: path.resolve(__dirname, 'dist/'),
    library: {
      name: 'Astral',
      type: 'umd',
    },
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts?/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    minimize: true,
  },
  target: 'web',
  mode: 'production',
  devtool: 'source-map', // Add the devtool option here
};
