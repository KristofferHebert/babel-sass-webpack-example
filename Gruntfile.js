var path = require("path");

module.exports = function(grunt){
    grunt.loadNpmTasks('grunt-closure-compiler');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-http-server');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-webpack');

    grunt.initConfig({
        webpack: {
            suite: {
                entry: "./src/Main",

                output: {
                    path: __dirname,
                    filename: "build/bundle.js",
                    sourceMapFilename: "[file].map"
                },

                module: {
                    loaders: [
                        { 
                            test: /\.js$/,   
                            loader: 'babel-loader?optional=runtime', 
                            exclude: /node_modules/
                        }
                    ]
                },

                plugins: [
                    // new webpack.PrefetchPlugin("react")
                ],

                devtool: 'inline-source-map'
            }
        },

        sass: {            
            options: {
                style: 'expanded',
                sourceMap: true
            },
            dist: {
                files: {
                    './build/bundle.css': './src/*.sass'
                }
            }
        },

        watch: {
            scripts: {
                files: ['src/*.js', 'src/*/*.js'],
                tasks: ['webpack']
            },

            styles: {
                files: ['src/*.sass', 'src/*/*.sass'],
                tasks: ['sass']
            }
        },

        "closure-compiler": {
            main: {
                js: "build/bundle.js",
                jsOutputFile: "build/bundle.min.js",
                options: {
                    compilation_level: "SIMPLE_OPTIMIZATIONS",
                    language_in: "ECMASCRIPT5_STRICT",
                    create_source_map: "build/bundle.min.js.map",
                    source_map_format: "V3",
                    source_map_location_mapping: "build|/build"
                }
            }
        },

        'http-server': {
            dev: {
                root: './',
                port: 8000,
                host: '0.0.0.0',
                showDir : true,
                autoIndex: true,
                runInBackground: true
            }
        },
    });

    grunt.registerTask('build',   ['webpack', 'closure-compiler', 'sass']);
    grunt.registerTask('default', ['build', 'http-server', 'watch']);
};