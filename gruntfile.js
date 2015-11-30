var webpackConfig = require('./webpack.config.js'),
    path = require('path'),
    js = path.resolve('./transpiler/javascript');

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
            firebase: {
                cwd: './',
                src: 'node_modules/firebase/**',
                dest: 'dist/vendor/firebase',
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
            options: webpackConfig,
            main: {
                entry: path.join(js , 'app.js'),
                output: {
                    path: __dirname + "/dist/app",
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