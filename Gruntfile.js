module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    /* Convert ES6 to ES5 */
    babel: {
      options: {
        presets: ['babel-preset-env'],
        sourceMap: true
      },
      scripts: {
        files: [{
          expand: true,
          cwd: 'client/scripts/',
          src: '**/*.*',
          dest: 'temp',
          ext: '.js'
        }]
      }
    },
    /* Combine files for easier sourcing */
    concat: {
      options: {
        sourceMap: true,
        sourceMapIncludeSources: true
      },
      clientapp: {
        src: ['temp/*.js', 'temp/controllers/*.js', 'temp/services/*.js', 'temp/classes/*.js'],
        dest: 'server/public/scripts/clientapp.js'
      }
    },
    /* Copy vendor, html and css files */
    copy: {
      vendors: {
        // Required but not getting into at this point
        expand: true,
        // Current working directory, where are the files?
        cwd: 'client/vendors/',
        // List of files to copy
        src: ['*.*'],
        // Destination, where should we put them?
        dest: 'server/public/vendors/'
      },
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
      tasks: ['babel', 'concat', 'copy']
    }
  });
  // LOAD PLUGIN: Bring the plugin into the project
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // REGISTER TASK: Actually use the plugin
  grunt.registerTask('default', ['babel', 'concat', 'copy', 'watch']);
};
