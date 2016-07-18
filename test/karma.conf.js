

// Karma configuration
module.exports = function(config) {
  config.set({
    
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../',
    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [
      'mocha',
      'chai-sinon'
    ],

    plugins: [
      'karma-phantomjs-launcher',
      'karma-chai-sinon',
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-webpack',
      'karma-mocha-reporter'
    ],
    // list of files / patterns to load in the browser
    files: [
      {
        pattern: 'test/tests.webpack.js',
        watched: false,
        served: true,
        included: true
      }
    ],

    // list of files to exclude
    exclude: [
    ],
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/tests.webpack.js': ['webpack', 'sourcemap']
    },
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],

    // web server port
    port: 9876,
    // enable / disable colors in the output (reporters and logs)
    colors: true,
    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,
  
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /\.js[x]?$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
              cacheDirectory: true
            }
          },
          {
            test: /\.json$/,
            loader: 'json'
          },
          {
            test: /sinon.*\.js$/,
            loader: "imports?define=>false"
          }
        ],
        noParse: [
          /sinon/
        ]
      },
      resolve: {
        alias: {
          sinon: 'sinon/pkg/sinon.js'
        },
        extensions: ['', '.js', '.jsx', '.json'],
        modulesDirectories: [
          'node_modules',
          'src/js'
        ]
      },
      externals: {
        'jsdom': 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': 'window',
        'text-encoding': 'window'
      }
    },
    webpackServer: {
      noInfo: true
    }
  })
};