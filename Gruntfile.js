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
            js: {
                files: 'jquery.cbmobileadstyle.js',
                tasks: ['uglify']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['uglify']);

};