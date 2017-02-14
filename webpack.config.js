const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const SRC_CONTEXT = path.join(__dirname, 'src');
const BIN_CONTEXT = path.join(__dirname, 'dist');

module.exports = {
  devtool: 'source-map',

  entry: [
    path.resolve(SRC_CONTEXT, 'index.js'),
  ],

  output: {
    path: path.resolve(BIN_CONTEXT, 'build'),
    filename: 'realizejs.js',
    chunkFilename: '[id].realizejs.js',
    library: 'Realize',
    libraryTarget: 'window',
  },

  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    lodash: '_',
    moment: 'moment',
    numeral: 'numeral',
    jquery: '$',
    'materialize-css': 'Materialize',
  },

  resolve: {
    modules: ['node_modules', 'src'],
    descriptionFiles: ['package.json'],
    mainFields: ['browser', 'main'],
    mainFiles: ['index'],
  },

  module: {
    rules: [
      {
        test: /\.s(a|c)ss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { importLoaders: 1 } },
            { loader: 'sass-loader' },
          ],
        }),
      },
      {
        test: /\.js[x]?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new ExtractTextPlugin('realizejs.css'),
  ],
};
