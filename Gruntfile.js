module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    /* Convert ES6 to ES5 */
    babel: {
        options: {
            presets: ['babel-preset-env']
        },
        scripts: {
            files: [{
                expand: true,
                cwd: 'client/scripts',
                /* Name our ES6 files with *.es6 */
                src: '**/*.es6',
                /* Copy into a folder named temp */
                dest: 'temp',
                ext: '.js'
            }]
        }
    },
    /* Combine files for easier sourcing */
    concat: {
      /* Combine controllers into a single file */
      controllers: {
        src: ['temp/controllers/*.js'],
        dest: 'temp/controllers.js',
      },
      /* Combine services into a single file */
      services: {
        src: ['temp/services/*.js', 'temp/factories/*.js'],
        dest: 'temp/services.js',
      }
    },
    /* Minify the files */
    uglify: {
      options: {
          sourceMap: true,
      },
      files: {
        expand: true,
        /* Minify everything in the temp folder */
        cwd: 'temp',
        src: '*.js',
        dest: 'server/public/scripts',
        ext : '.min.js'
      }
    },
    /* Copy vendor, html and css files */
    copy: {
      // name of the task e.g. angular
      angular: {
        // Required but not getting into at this point
        expand: true,
        // Current working directory, where are the files?
        cwd: 'node_modules/angular/',
        // List of files to copy
        src: ['angular.min.js', 'angular.min.js.map'],
        // Destination, where should we put them?
        dest: 'server/public/vendors/'
      },
      angularRoute: {
        // Required but not getting into at this point
        expand: true,
        // Current working directory, where are the files?
        cwd: 'node_modules/angular-route/',
        // List of files to copy
        src: ['angular-route.min.js', 'angular-route.min.js.map'],
        // Destination, where should we put them?
        dest: 'server/public/vendors/'
      },
      htmlcss: {
        // Required but not getting into at this point
        expand: true,
        // Current working directory, where are the files?
        cwd: 'client/views/',
        // List of files to copy
        src: ['**/*.*'], // Could use ['*.html'] or ['*.*']
        // Destination, where should we put them?
        dest: 'server/public/views/'
      },
      favicon: {
        // Required but not getting into at this point
        expand: true,
        // Current working directory, where are the files?
        cwd: 'client/',
        // List of files to copy
        src: ['*.ico'], // Could use ['*.html'] or ['*.*']
        // Destination, where should we put them?
        dest: 'server/public/'
      }
    },
    // No sub tasks for watch
    watch: {
      // What files am I looking at
      files: ['client/**/*.*'],
      // What tasks should I complete
      tasks: ['babel', 'concat', 'uglify', 'copy']
    }
  });
  // LOAD PLUGIN: Bring the plugin into the project
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // REGISTER TASK: Actually use the plugin
  grunt.registerTask('default', ['babel', 'concat', 'uglify', 'copy', 'watch']);
};
