module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  
  grunt.initConfig({
    jasmine: {
      src: 'underscore.calculate.js',
      options: {
        vendor: [
          'bower_components/underscore/underscore.js'
        ],
        helpers: 'spec/helper.js',
        specs: 'spec/**/*.spec.js'
      },
    }
  });
  
  grunt.registerTask('test', ['jasmine']);
};