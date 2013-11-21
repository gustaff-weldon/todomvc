/* global module:false */
module.exports = function(grunt) {
    var port = grunt.option('port') || 8080;
    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        connect: {
            server: {
                options: {
                    port: port,
                    base: '.'
                }
            }
        },

        watch: {
            main: {
                files: [ 'Gruntfile.js', 'js/reveal.js', 'css/reveal.css' ],
                tasks: 'default'
            },
            theme: {
                files: [ 'css/theme/source/*.scss', 'css/theme/template/*.scss' ],
                tasks: 'themes'
            }
        }

    });

    // Dependencies
    grunt.loadNpmTasks( 'grunt-contrib-watch' );
    grunt.loadNpmTasks( 'grunt-contrib-connect' );


    // Serve presentation locally
    grunt.registerTask( 'serve', [ 'connect', 'watch' ] );

};