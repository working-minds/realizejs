import path from 'path';
import webpack from 'webpack';
import nodeExternals from 'webpack-node-externals'

export default {
  debug: true,
  /* devtool: 'source-map', */
  target: 'web',

  entry: {
    app: path.resolve(__dirname, 'src/js/index.js')
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'realize.js'
  },

  externals: [nodeExternals()],

  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: [
      path.resolve(__dirname, 'node_modules')
    ]
  },

  module: {
    loaders: [
      { test: /\.js[x]?$/, loader: 'babel', include: path.resolve(__dirname, 'src/js'), exclude: /node_modules/ }
    ]
  }
}
