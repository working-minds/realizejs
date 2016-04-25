import path from 'path';
import webpack from 'webpack';
import nodeExternals from 'webpack-node-externals'

export default {
  debug: true,
  devtool: 'inline-source-map',
  target: 'node',

  entry: {
    app: path.resolve(__dirname, 'src/js/main.node.js')
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'realize.node.js',
    libraryTarget: 'commonjs2'
  },

  externals: [nodeExternals()],

  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: [
      path.resolve(__dirname, 'src/js'),
      path.resolve(__dirname, 'node_modules')
    ]
  },

  module: {
    loaders: [
      { test: /\.js[x]?$/, loader: 'babel', include: path.resolve(__dirname, 'src/js'), exclude: /node_modules/ }
    ]
  }
}
