var gulp = require('gulp');
var closure = require('gulp-closure-compiler');
var del = require('del');

var closureFiles = [
   'bower_components/closure-library/closure/goog/**/*.js',
   'src/js/**/*.js'
];

gulp.task('clean', function(cb) {
   del(['build'], cb);
});

gulp.task('index', ['clean'], function() {
   gulp.src('src/index.html')
      .pipe(gulp.dest('build'));
});

gulp.task('css', ['clean'], function() {
   gulp.src('src/css/*.css')
      .pipe(gulp.dest('build/css'));
});

gulp.task('js', ['clean'], function() {
   gulp.src('src/js/app-init.js')
      .pipe(gulp.dest('build'));
});

gulp.task('closure', function() {

   gulp.src(closureFiles)

      .pipe(closure({
         compilerPath: 'bower_components/closure-compiler/compiler.jar',
         fileName: 'app.js',
         compilerFlags: {
            closure_entry_point: 'app.main',
            only_closure_dependencies: true,
            compilation_level: 'WHITESPACE_ONLY',
            formatting: 'PRETTY_PRINT'
         }

      }))

      .pipe(gulp.dest('build'));

});

gulp.task('default', ['index', 'closure', 'js', 'css']);
