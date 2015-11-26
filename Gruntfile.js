module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*!\n' +
            ' * WKM Frontend v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright 2015-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' */\n',

    watch: {
      scripts: {
        files: [
          'src/js/config.js',
          'src/js/serializer.js',
          'src/js/utils.js',
          'src/js/propTypes.js',
          'src/js/i18n/i18n.js',
          'src/js/i18n/locales/**/*.js',
          'src/js/theme/theme.js',
          'src/js/theme/mappings/**/*.js',
          'src/jsx/**/*.jsx',
          'src/css/**/*.css',
          'src/scss/**/*.scss'
        ],
        tasks: ['build'],
        options: {
          interrupt: true
        }
      }
    },

    jshint: {
      files: ['Gruntfile.js', 'src/jsx/**/*.jsx', 'src/js/**/*.js']
    },

    babel: {
      options: {
        sourceMaps: true,
        presets: ['es2015', 'stage-2', 'react']
      },
      build: {
        files: [
          {
            expand: true,
            cwd: 'src/jsx',
            src: ['**/*.jsx'],
            dest: 'tmp/js',
            ext: '.js'
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

    concat_sourcemap: {
      options: {
        sourcesContent: true
      },
      js: {
        src: [
          'src/js/config.js',
          'src/js/serializer.js',
          'src/js/utils.js',
          'src/js/propTypes.js',
          'src/js/i18n/i18n.js',
          'src/js/i18n/locales/**/*.js',
          'src/js/theme/theme.js',
          'src/js/theme/mappings/**/*.js',
          'tmp/js/mixins/**/*.js',
          'tmp/js/components/**/*.js'
        ],
        dest: 'dist/js/<%= pkg.name %>.js'
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

    usebanner: {
      build: {
        options: {
          position: 'top',
          banner: '<%= banner %>',
          linebreak: true
        },
        files: {
          src: [
            'dist/**/*.css',
            'dist/**/*.js'
          ]
        }
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
  grunt.loadNpmTasks('grunt-concat-sourcemap');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-jsxhint');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-banner');

  grunt.registerTask('build', [
    'babel:build',
    'sass:build',
    'concat_sourcemap:js',
    'concat_sourcemap:css',
    'uglify',
    'cssmin',
    'usebanner:build',
    'clean'
  ]);

  grunt.registerTask('default', ['build']);
};
