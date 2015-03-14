module.exports = function (grunt) {

  var pkg = grunt.file.readJSON('package.json');

  grunt.initConfig({

    uglify: {
      dist: {
        files: {
          'jquery.cbmobileadstyle.min.js': 'jquery.cbmobileadstyle.js'
        }
      }
    },

    watch: {
      options: {
        spawn: false
      },
      js: {
        files: ['jquery.cbmobileadstyle.js'],
        tasks: ['uglify']
      }
    },

    jshint: {
      all: ['jquery.cbmobileadstyle.js']
    }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('hint', ['jshint']);

};