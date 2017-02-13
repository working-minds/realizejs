const path = require('path');

const BIN_CONTEXT = path.join(__dirname, '../dist');
const SRC_CONTEXT = path.join(__dirname, '../src/js');
const NODE_MODULES_CONTEXT = path.join(__dirname, '../node_modules');

module.exports = {
  devtool: 'inline-source-map',

  resolve: {
    modules: [NODE_MODULES_CONTEXT, SRC_CONTEXT],
    extensions: ['.js', '.jsx', '.json'],
    mainFields: ['browser', 'main'],
    mainFiles: ['index'],
    alias: {
      sinon: 'sinon/pkg/sinon.js'
    },
  },

  output: {
    path: path.resolve(BIN_CONTEXT, 'build', 'tests'),
    filename: 'realizejs_tests.js',
    libraryTarget: 'window'
  },

  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        loader: 'babel-loader',
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
    ],
    noParse: [
      /sinon/
    ]
  },

  externals: {
    'jsdom': 'jsdom',
    'react/lib/ExecutionEnvironment': 'ExecutionEnvironment',
    'react/lib/ReactContext': 'ReactContext',
    'text-encoding': 'TextEncoding'
  }
};
