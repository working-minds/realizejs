module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*!\n' +
            ' * Realize v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright 2015-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' */\n',

    watch: {
      development: {
        files: [
          'src/js/**/*.js',
          'src/js/**/*.jsx',
          'src/css/**/*.css'
        ],
        tasks: ['buildDevelopment'],
        options: {
          interrupt: true
        }
      },
      release: {
        files: [
          'src/js/**/*.js',
          'src/js/**/*.jsx',
          'src/css/**/*.css'
        ],
        tasks: ['buildRelease'],
        options: {
          interrupt: true
        }
      }
    },

    jshint: {
      files: ['Gruntfile.js', 'src/js/**/*.jsx', 'src/js/**/*.js']
    },

    browserify: {
      options: {
        banner: '<%= banner %>',
        transform: [
          ['babelify', {
            presets: ['es2015', 'stage-2', 'react']
          }],
          'require-globify'
        ],
        browserifyOptions: {
          insertGlobalVars: {
            React: function() { return 'require("react")'; },
            ReactDOM: function() { return 'require("react-dom")'; },
            Reflux: function() { return 'require("reflux")'; },
            Realize: function() { return 'require("realize/realize.js")'; }
          }
        }
      },
      js: {
        files: [
          {
            src: ['src/js/**/*.jsx', 'src/js/**/*.js'],
            dest: 'dist/js/<%= pkg.name %>.js'
          }
        ]
      }
    },

    sass: {
      build: {
        files: [
          {
            expand: true,
            cwd: 'src/scss',
            src: ['**/*.scss'],
            dest: 'tmp/css',
            ext: '.css'
          }
        ]
      }
    },

    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: false
      },
      css: {
        src: [
          'tmp/css/**/*.css',
          'src/css/**/*.css'
        ],
        dest: 'dist/css/<%= pkg.name %>.css'
      }
    },

    uglify: {
      options: {
        preserveComments: 'some'
      },
      build: {
        src: 'dist/js/<%= pkg.name %>.js',
        dest: 'dist/js/<%= pkg.name %>.min.js'
      }
    },

    cssmin: {
      build: {
        files: [
          {
            expand: true,
            cwd: 'dist/css',
            src: ['<%= pkg.name %>.css'],
            dest: 'dist/css',
            ext: '.min.css'
          }
        ]
      }
    },

    clean: {
      build: {
        src: ["tmp"]
      }
    }
  });

  // Load dos plugins Grunt do NPM
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-jsxhint');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('buildRelease', [
    'browserify:js',
    'sass:build',
    'concat:css',
    'uglify',
    'cssmin',
    'clean'
  ]);

  grunt.registerTask('buildDevelopment', [
    'browserify:js',
    'sass:build',
    'concat:css',
    'clean'
  ]);

  grunt.registerTask('default', ['buildRelease']);
};
