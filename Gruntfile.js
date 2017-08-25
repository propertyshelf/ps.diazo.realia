module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // we could just concatenate everything, really
        // but we like to have it the complex way.
        // also, in this way we do not have to worry
        // about putting files in the correct order
        // (the dependency tree is walked by r.js)
        less: {
            development: {
                options: {
                    compress: false,
                    paths: [],
                    strictMath: false,
                    sourceMap: true,
                    sourceMapFileInline: true,
                },
                files: {
                    'assets/css/realia.css': 'less/realia.less',
                    'assets/css/realia-blue.css': 'less/realia-blue.less',
                    'assets/css/realia-brown-dark.css': 'less/realia-brown-dark.less',
                    'assets/css/realia-brown.css': 'less/realia-brown.less',
                    'assets/css/realia-gray-blue.css': 'less/realia-gray-blue.less',
                    'assets/css/realia-gray-brown-dark.css': 'less/realia-gray-brown-dark.less',
                    'assets/css/realia-gray-brown.css': 'less/realia-gray-brown.less',
                    'assets/css/realia-gray-green-light.css': 'less/realia-gray-green-light.less',
                    'assets/css/realia-gray-green.css': 'less/realia-gray-green.less',
                    'assets/css/realia-gray-magenta.css': 'less/realia-gray-magenta.less',
                    'assets/css/realia-gray-orange.css': 'less/realia-gray-orange.less',
                    'assets/css/realia-gray-red.css': 'less/realia-gray-red.less',
                    'assets/css/realia-gray-turquiose.css': 'less/realia-gray-turquiose.less',
                    'assets/css/realia-gray-violet.css': 'less/realia-gray-violet.less',
                    'assets/css/realia-green-light.css': 'less/realia-green-light.less',
                    'assets/css/realia-green.css': 'less/realia-green.less',
                    'assets/css/realia-magenta.css': 'less/realia-magenta.less',
                    'assets/css/realia-orange.css': 'less/realia-orange.less',
                    'assets/css/realia-red.css': 'less/realia-red.less',
                    'assets/css/realia-turquiose.css': 'less/realia-turquiose.less',
                    'assets/css/realia-violet.css': 'less/realia-violet.less',
                }
            },
            dist: {
                options: {
                    compress: true,
                    paths: [],
                    strictMath: false,
                    sourceMap: false,
                },
                files: {
                    'assets/css/realia.css': 'less/realia.less',
                    'assets/css/realia-blue.css': 'less/realia-blue.less',
                    'assets/css/realia-brown-dark.css': 'less/realia-brown-dark.less',
                    'assets/css/realia-brown.css': 'less/realia-brown.less',
                    'assets/css/realia-gray-blue.css': 'less/realia-gray-blue.less',
                    'assets/css/realia-gray-brown-dark.css': 'less/realia-gray-brown-dark.less',
                    'assets/css/realia-gray-brown.css': 'less/realia-gray-brown.less',
                    'assets/css/realia-gray-green-light.css': 'less/realia-gray-green-light.less',
                    'assets/css/realia-gray-green.css': 'less/realia-gray-green.less',
                    'assets/css/realia-gray-magenta.css': 'less/realia-gray-magenta.less',
                    'assets/css/realia-gray-orange.css': 'less/realia-gray-orange.less',
                    'assets/css/realia-gray-red.css': 'less/realia-gray-red.less',
                    'assets/css/realia-gray-turquiose.css': 'less/realia-gray-turquiose.less',
                    'assets/css/realia-gray-violet.css': 'less/realia-gray-violet.less',
                    'assets/css/realia-green-light.css': 'less/realia-green-light.less',
                    'assets/css/realia-green.css': 'less/realia-green.less',
                    'assets/css/realia-magenta.css': 'less/realia-magenta.less',
                    'assets/css/realia-orange.css': 'less/realia-orange.less',
                    'assets/css/realia-red.css': 'less/realia-red.less',
                    'assets/css/realia-turquiose.css': 'less/realia-turquiose.less',
                    'assets/css/realia-violet.css': 'less/realia-violet.less',
                }
            }
        },
        postcss: {
            options: {
                map: false,
                processors: [
                    require('autoprefixer')({
                        browsers: ['last 2 versions']
                    })
                ]
            },
            development: {
                options: {
                    map: true,
                },
                src: 'assets/css/*.css'
            },
            dist: {
                map: false,
                src: 'assets/css/*.css'
            }
        },
        watch: {
            scripts: {
                files: [
                    'less/*.less'
                ],
                tasks: ['less:development', 'postcss:development']
            }
        },
        browserSync: {
            html: {
                bsFiles: {
                    src : [
                      'less/*.less'
                    ]
                },
                options: {
                    watchTask: true,
                    debugInfo: true,
                    online: true,
                    server: {
                        baseDir: "."
                    },
                }
            },
            plone: {
                bsFiles: {
                    src : [
                      'less/*.less'
                    ]
                },
                options: {
                    watchTask: true,
                    debugInfo: true,
                    proxy: "localhost:8080",
                    reloadDelay: 3000,
                    // reloadDebounce: 2000,
                    online: true
                }
            }
        }
    });


    // grunt.loadTasks('tasks');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-postcss');

    // CWD to theme folder
    grunt.file.setBase('./src/ps/diazo/realia/diazo_resources');

    grunt.registerTask('release', ['less:dist', 'postcss:dist']);
    grunt.registerTask('compile', ['less:development', 'postcss:development']);
    grunt.registerTask('default', ['compile']);
    grunt.registerTask('bsync', ["browserSync:html", "watch"]);
    grunt.registerTask('plone-bsync', ["browserSync:plone", "watch"]);
};
