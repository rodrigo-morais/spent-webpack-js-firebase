module.exports = function (grunt) {

    grunt.initConfig({
        babel: {
            options: {
                sourceMap: true,
                modules: 'amd'
            },
            dist: {
                files: {
                    'transpiler/javascript/app.js': 'javascript/app.js',
                    'transpiler/javascript/config.js': 'javascript/config.js'
                }
            }
        },
        copy: {
            main: {
                cwd: './',
                src: 'index.html',
                dest: 'dist/',
                expand: true,
                flatten: true,
                filter: 'isFile'
            },
            jquery: {
                cwd: './',
                src: 'vendor/jquery/dist/*',
                dest: 'dist/vendor/jquery/dist',
                expand: true,
                flatten: true,
                filter: 'isFile'
            },
            bootstrap: {
                cwd: './',
                src: 'vendor/bootstrap/dist/**',
                dest: 'dist',
                expand: true
            },
            mousewheel: {
                cwd: './',
                src: 'vendor/jquery-mousewheel/**',
                dest: 'dist',
                expand: true
            },
            assets: {
                cwd: './',
                src: 'assets/**',
                dest: 'dist',
                expand: true
            }
        },
        webpack: {
            main: {
                entry: "./transpiler/javascript/app.js",
                output: {
                    path: "dist/app/",
                    filename: "main.js",
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-webpack');

    grunt.registerTask('default', ['babel', 'copy', 'webpack']);

};