// Gruntfile.js

// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
// Source :
// 1. https://scotch.io/tutorials/a-simple-guide-to-getting-started-with-grunt#grunt-setup-and-configuration
// 2. http://gruntjs.com/configuring-tasks
module.exports = function(grunt) {

    // ===========================================================================
    // CONFIGURE GRUNT ===========================================================
    // ===========================================================================
    grunt.initConfig({

        // get the configuration info from package.json ----------------------------
        // this way we can use things like name and version (pkg.name)
        pkg: grunt.file.readJSON('package.json'),

        // all of our configuration will go here
        // configure jshint to validate js files -----------------------------------
        jshint: {
            options: {
                reporter: require('jshint-stylish') // use jshint-stylish to make our errors look and read good
            },

            // when this task is run, lint the Gruntfile and all js files in src
            build: ['Gruntfile.js', 'src/**/*.js']
        },
        //
        // // configure uglify to minify js files -------------------------------------
        uglify: {
            options: {
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
            },
            my_target: {
                files: {
                    'dist/js/magic.min.js': 'src/**/*.js'
                }
            }
        },
        // compile less stylesheets to css -----------------------------------------
        less: {
            build: {
                files: {
                    'dist/css/pretty.css': 'src/css/pretty.less'
                }
            }
        },
        // configure cssmin to minify css files ------------------------------------
        cssmin: {
            options: {
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
            },
            build: {
                files: {
                    'dist/css/style.min.css': 'src/css/style.css'
                }
            }
        },

        obfuscator: {
            files: "src/**/*.js",
            entry: 'src/js/magic.js',
            out: 'dist/js/obfuscated.js',
            strings: true,
            root: __dirname
        },

        // configure watch to auto update ----------------
        watch: {
            // Live Reload CSS/JS
            // options: {
            //     livereload: true
            // },

            // for stylesheets, watch css and less files
            // only run less and cssmin
            stylesheets: {
                files: ['src/css/*.css', 'src/css/*.less'],
                tasks: ['less', 'cssmin']
            },

            // for scripts, run jshint and uglify
            scripts: {
                files: 'src/**/*.js',
                tasks: ['jshint', 'uglify']
            }
        },
        connect: {
            server: {
                options: {
                    port: 9000,
                    hostname: '*',
                    base: 'app',
                    // Not Set keepalive to true.
                    // Keepalive will block all subsequent tasks from running.
                    // So long as connect is followed by watch the server won't terminate.
                    // keepalive: true,
                    open: {
                        target: 'http://localhost:9000' // URL you want to run
                    },
                    // onCreateServer: function(server, connect, options) {
                    //     console.log('Server Running');
                    // }
                }
            }
        }
    });

    // ============= // CREATE TASKS ========== //
    grunt.registerTask('preview', ['connect', 'watch']);

    // Remove build directory contents
    grunt.registerTask('clean_build', function() {
        grunt.file.delete('app/build/');
        grunt.file.mkdir('app/build/');
    });

    // ===========================================================================
    // LOAD GRUNT PLUGINS ========================================================
    // ===========================================================================
    // we can only load these if they are in our package.json
    // make sure you have run npm install so our app can find these
    // load npm tasks
    var npmTasks = [
        'grunt-contrib-jshint',
        'grunt-contrib-uglify',
        'grunt-contrib-less',
        'grunt-contrib-cssmin',
        'grunt-contrib-watch',
        'grunt-obfuscator',
        'grunt-contrib-connect'
    ];

    npmTasks.forEach(function(taskName) {
        if(!grunt.task._tasks[taskName]) {
            grunt.loadNpmTasks(taskName);
        }
    });
    // grunt.loadNpmTasks('grunt-contrib-jshint');
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    // grunt.loadNpmTasks('grunt-contrib-less');
    // grunt.loadNpmTasks('grunt-contrib-cssmin');
    // grunt.loadNpmTasks('grunt-contrib-watch');
    // grunt.loadNpmTasks('grunt-obfuscator');
    // grunt.loadNpmTasks('grunt-contrib-connect');

};
