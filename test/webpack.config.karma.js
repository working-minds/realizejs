const path = require('path');

const BIN_CONTEXT = path.join(__dirname, 'dist');

module.exports = {
  devtool: 'inline-source-map',

  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      sinon: 'sinon/pkg/sinon.js'
    },
  },

  output: {
    path: path.resolve(BIN_CONTEXT, 'build', 'tests'),
    filename: 'realizejs_tests.js'
  },

  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        loader: 'babel-loader',
        exclude: 'node_modules',
        options: {
          cacheDirectory: true
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /sinon.*\.js$/,
        loader: "imports-loader?define=>false"
      }
    ]
  },

  externals: {
    'jsdom': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': 'window',
    'text-encoding': 'window'
  }
};
