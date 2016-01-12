module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*!\n' +
            ' * Realize v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright 2015-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' */\n',

    watch: {
      scripts: {
        files: [
          'src/js/**/*.js',
          'src/js/**/*.jsx',
          'src/css/**/*.css'
        ],
        tasks: ['build'],
        options: {
          interrupt: true
        }
      }
    },

    jshint: {
      files: ['Gruntfile.js', 'src/js/**/*.jsx', 'src/js/**/*.js']
    },

    babel: {
      options: {
        sourceMaps: false,
        presets: ['es2015', 'stage-2', 'react']
      },
      build: {
        files: [
          {
            expand: true,
            cwd: 'src/js',
            src: ['**/*.jsx', '**/*.js'],
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

    concat: {
      options: {
        banner: '<%= banner %>',
        sourceMap: true,
        stripBanners: false
      },
      js: {
        src: [
          'tmp/js/config.js',
          'tmp/js/serializer.js',
          'tmp/js/utils.js',
          'tmp/js/propTypes.js',
          'tmp/js/i18n/i18n.js',
          'tmp/js/i18n/locales/**/*.js',
          'tmp/js/theme/theme.js',
          'tmp/js/theme/mappings/**/*.js',
          'tmp/js/actions/**/*.js',
          'tmp/js/stores/**/*.js',
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
  grunt.loadNpmTasks('grunt-contrib-concat');
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
    'concat:js',
    'concat:css',
    'uglify',
    'cssmin',
    'usebanner:build',
    'clean'
  ]);

  grunt.registerTask('default', ['build']);
};
