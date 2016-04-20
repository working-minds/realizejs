import path from 'path';
import webpack from 'webpack';

export default {
  entry: {
    app: path.resolve(__dirname, 'src/js/realize.js')
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    chunkFilename: '[id].bundle.js'
  },

  resolve: ['', '.js', '.jsx'],

  module: {
    loaders: [
      { test: /\.js[x]?$/, loader: 'babel', include: path.resolve(__dirname, 'src/js'), exclude: /node_modules/ }
    ]
  }
}
