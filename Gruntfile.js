var LIVERELOAD_PORT = 35729,
	lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT}),
	mountFolder = function (connect, dir) {
		return connect.static(require('path').resolve(dir));
	},
// change this to '0.0.0.0' to access the server from outside
// change this to 'localhost' to access the server from inside only
	hostname = '0.0.0.0';

module.exports = function (grunt) {
	'use strict';

	// load all grunt tasks
	// Homepage: http://gruntjs.com/
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
	
	grunt.initConfig({
		// Watch relevant files
		// Grunt plugin Homepage: https://github.com/gruntjs/grunt-contrib-watch
		watch: {
			options: {
				nospawn: true
			},
			gruntfile: {
				files: 'Gruntfile.js',
				tasks: ['jshint:gruntfile'],
			},
			css: {
				files: ['sass/*.scss'],
				tasks: ['compass:dev'],
				options: {
					livereload: true
				}
			},
			scripts: {
				files: ['public/js/**/*.js'],
				tasks: 'jshint:app',
			},
			livereload: {
				options: {
					livereload: LIVERELOAD_PORT
				},
				files: [
					'public/*.html',
					'public/css/main.css',
					'public/js/**/*.js',
					'public/img/**/*.{png,jpg,jpeg,gif,webp,svg}'
				]
			}
		},

		// CLean build directory
		// Grunt plugin Homepage: https://github.com/gruntjs/grunt-contrib-clean
		clean: {
			build: ["build"]
		},

		// process Compass/SASS files
		// Grunt plugin Homepage: https://github.com/gruntjs/grunt-contrib-compass
		compass: {
			dev: {
				options: {
					config: 'config.rb'
				}
			}
		},

		// Launch a web server to test the app
		// Grunt plugin Homepage: https://github.com/gruntjs/grunt-contrib-connect
		connect: {
			options: {
				port: 8007,
				hostname: hostname
			},
			// Reload if configured (in the html ouput)
			// Node package Homepage: https://github.com/intesso/connect-livereload
			livereload: {
				options: {
					middleware: function (connect) {
						return [
							mountFolder(connect, 'public'),
							lrSnippet
						];
					}
				}
			},
			// Lauch a web server for the "build" directory content, instead of "public" directory content
			dist: {
				options: {
					open: true,
					base: 'build',
					livereload: false
				}
			}
		},

		// Lint JS files
		// Grunt plugin Homepage: https://github.com/gruntjs/grunt-contrib-jshint
		jshint: {
			app: {
				src: [
					'public/js/app/**/*.js',
					'public/js/util/*.js'
				],
			},
			gruntfile: {
				src: ['Gruntfile.js' ],
			}
		},

		// Build a custom modernizr.js file
		// Grunt plugin Homepage: https://github.com/Modernizr/grunt-modernizr
		modernizr: {
		
			dist: {
				"devFile" : "public/bower_components/modernizr/modernizr.js",
		
				"outputFile" : "build/bower_components/modernizr/modernizr.js",
		
				"extra" : {
					"shiv" : true,
					"printshiv" : false,
					"load" : true,
					"mq" : false,
					"cssclasses" : true
				},
		
				"extensibility" : {
					"addtest" : false,
					"prefixed" : false,
					"teststyles" : false,
					"testprops" : false,
					"testallprops" : false,
					"hasevents" : false,
					"prefixes" : false,
					"domprefixes" : false
				},
		
				"uglify" : true,
		
				// Define any tests you want to implicitly include.
				"tests" : [],
		
				// By default, this task will crawl your project for references to Modernizr tests.
				// Set to false to disable.
				"parseFiles" : true,
		
				// When parseFiles = true, this task will crawl all *.js, *.css, *.scss files, except files that are in node_modules/.
				// You can override this by defining a "files" array below.
				"files" : {
					"src": [
						'build/js/**/*.js',
						'build/css/*.css'
					]
				},
		
			}
		
		},

		// Open the default browser to test the ouput (either "public" or "build", serves for both)
		// Grunt plugin Homepage: https://github.com/jsoverson/grunt-open
		open: {
			server: {
				path: 'http://' + hostname + ':<%= connect.options.port %>'
			}
		},

		// Optimize requireJS modules with r.js
		// Grunt plugin Homepage: https://github.com/gruntjs/grunt-contrib-requirejs
		requirejs: {
			compile: {
				options: {
					"appDir": "public/",
					"dir": "build/",
					"baseUrl": "js/",
					"optimize": "uglify",
					"fileExclusionRegExp": new RegExp("^(src|.*LICENSE\\.txt|bower\\.json|test|.*\\.md|feature-detects|media)$"),
					"paths": {
						"jquery": "empty:",
						"underscore": "empty:",
						"text": "empty:",
						"imagesloaded": "empty:",
						"qtip": "empty:",
						"logLevels": "util/logLevels",
						"logger": "util/logger",
						"logConf": "app/log-conf",
						"cookieManager":  "util/cookieManager",
						"app": "app/app",
						"main": "app/main"
					},

					"modules": [{ "name": "main" }]
				}
			}
		}
	});

	// Build (optimize JS and CSS in "build" directory)
	grunt.registerTask('build', function (target) {
		grunt.task.run([
			'clean:build',
			'requirejs',
			'modernizr'
		]);
			
	});

	// Lint JS files, process SASS files,
	// launch a web server with the "public" directory as root
	// open the default browser with the default page of the app,
	// and watch any relevant file change (will reload the page automatically if configured properly in the HTML output)
	grunt.registerTask('server', function (target) {
		grunt.task.run([
			'jshint',
			'compass:dev',
			'connect:livereload',
			'open',
			'watch'
		]);
	});

	// Launch a web server with the "build" directory as root
	// open the default browser with the default page of the app,
	grunt.registerTask('server-dist', function (target) {
		grunt.task.run([
			'connect:dist:keepalive',
			'open'
		]);
	});
};
