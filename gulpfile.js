var gulp = require('gulp');
var closure = require('gulp-closure-compiler');

var closureFiles = [
   'bower_components/closure-library/closure/goog/base.js',
   'src/js/*.js'
];

gulp.task('default', function() {

   gulp.src(closureFiles)

      .pipe(closure({
         compilerPath: 'bower_components/closure-compiler/compiler.jar',
         fileName: 'app.js',
         compilerFlags: {
            closure_entry_points: 'app.main',
            only_closure_dependencies: true
         }

      }))

      .pipe(gulp.dest('dist'));

});
