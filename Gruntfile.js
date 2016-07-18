module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*!\n' +
            ' * Realize v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright 2015-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' */\n',
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
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('buildCss', [
    'sass:build',
    'concat:css',
    'cssmin',
    'clean'
  ]);
};
