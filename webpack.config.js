const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const SRC_CONTEXT = path.join(__dirname, 'src');
const BIN_CONTEXT = path.join(__dirname, 'dist');

module.exports = {
  devtool: 'source-map',

  resolve: {
    modules: ['node_modules', 'src/js'],
    descriptionFiles: ['package.json'],
    mainFields: ['browser', 'main'],
    mainFiles: ['index'],
  },

  entry: {
    realizejs: path.resolve(SRC_CONTEXT, 'index.js'),
  },

  output: {
    path: path.resolve(BIN_CONTEXT, 'build'),
    filename: '[name].js',
    chunkFilename: '[id].realizejs.js',
    library: 'Realize',
    libraryTarget: 'umd',
  },

  externals: {
    jquery: {
      commonjs: 'jquery',
      commonjs2: 'jquery',
      amd: 'jquery',
      window: '$',
      root: '$',
    },
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      window: '_',
      root: '_',
    },
    'materialize-css': {
      commonjs: 'materialize-css',
      commonjs2: 'materialize-css',
      amd: 'materialize-css',
      window: 'Materialize',
      root: 'Materialize',
    },
    moment: {
      commonjs: 'moment',
      commonjs2: 'moment',
      amd: 'moment',
      window: 'moment',
      root: 'moment',
    },
    numeral: {
      commonjs: 'numeral',
      commonjs2: 'numeral',
      amd: 'numeral',
      window: 'numeral',
      root: 'numeral',
    },
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      window: 'React',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      window: 'ReactDOM',
      root: 'ReactDOM',
    },
    'react-addons-css-transition-group': {
      commonjs: 'react-addons-css-transition-group',
      commonjs2: 'react-addons-css-transition-group',
      amd: 'react-addons-css-transition-group',
      root: ['React', 'addons', 'CSSTransitionGroup'],
    },
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
    new webpack.IgnorePlugin(/\.\/locale/, /moment/),
    new webpack.IgnorePlugin(/\.\/locales/, /numeral/),
  ],
};
