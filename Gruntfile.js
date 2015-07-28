module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*!\n' +
            ' * WKM Frontend v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright 2015-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' */\n',

    jshint: {
      files: ['Gruntfile.js', 'src/jsx/**/*.jsx']
    },

    react: {
      build: {
        files: [
          {
            expand: true,
            cwd: 'src/jsx',
            src: ['src/jsx/**/*.jsx'],
            dest: 'src/js',
            ext: '.js'
          }
        ]
      }
    },

    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: false
      },
      js: {
        src: ['src/js/**/*.js'],
        dest: 'dist/js/<%= pkg.name %>.js'
      },
      css: {
        src: ['src/css/**/*.css'],
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
    }
  });

  // Load dos plugins Grunt do NPM
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-jsxhint');
  grunt.loadNpmTasks('grunt-react');


  grunt.registerTask('build', ['react:build', 'concat:js', 'concat:css', 'uglify', 'cssmin']);
  grunt.registerTask('default', ['build']);
};
