
module.exports = function(grunt) {
	var port = grunt.option('port') || 8000;
	// Project configuration
	grunt.initConfig({

		connect: {
			server: {
				options: {
					port: port,
					base: '.',
                    middleware: function(connect, options) {
                      return [
                        connect.static(options.base),
                        function (req, res, next) {
                            var fs = require('fs');
                            if (req.url == '/slides/') {
                                fs.readdir("slides", function(err, files) { 
                                    res.end(JSON.stringify(files));
                                });
                            } else {
                                next();
                            }
                         }
                      ];
                    }
				}
			}
		},

		watch: {
			main: {
				files: [ 'slides/*.md' ],
				tasks: 'default'
			}
		}

	});

	// Dependencies
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-contrib-connect' );

	// Serve presentation locally
	grunt.registerTask( 'serve', [ 'connect', 'watch' ] );

};
