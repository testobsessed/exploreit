
module.exports = function(grunt) {
	var port = grunt.option('port') || 8000;
	// Project configuration
	grunt.initConfig({
		sass: {
			main: {
				files: {
					'theme/default.css': 'theme/source/default.scss'
				}
			}
		},

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
                            if (req.url.match(/\/slides\//)) {
                                // console.log("In grunt. Asked for: " + req.url);
                                directory = req.url.match(/\/(.*)\//)[1]
                                fs.readdir(directory, function(err, files) {
                                    var list = JSON.stringify(files);
                                    // console.log("Replying with: " + list);
                                    res.end(list);
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
			},
			
			theme: {
				files: [ 'theme/source/*.scss', 'theme/template/*.scss' ],
				tasks: 'themes'
			}
			
		}

	});

	grunt.loadNpmTasks( 'grunt-contrib-sass' );
	
	// Theme task
	grunt.registerTask( 'themes', [ 'sass' ] );

	// Dependencies
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-contrib-connect' );

	// Serve presentation locally
	grunt.registerTask( 'serve', [ 'connect', 'watch' ] );

};
