// Include gulp
var gulp = require('gulp');

// Include plugins
var nodesass = require('gulp-sass');
var postcss = require('gulp-postcss');
var cssnano = require('cssnano');
var autoprefixer = require('autoprefixer');
var flexbugsfixes = require('postcss-flexbugs-fixes');

// Turn sass into css, prefix, minify and bless
gulp.task('scss', function () {
  var processors = [
    autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false,
      remove: false
    }),
    flexbugsfixes(),
    cssnano()
  ];

  return gulp.src('src/scss/**/*.scss')
    .pipe(nodesass({
        includePaths: [
            'node_modules/reeeset/dist',
            'node_modules/bootstrap/scss'
        ]
    }).on('error', nodesass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest('dist/css/'));
});

// Watch files for changes
gulp.task('watch', function() {
    gulp.watch('src/scss/**/*.scss', ['scss']);
});

// Default task (recompile on init before watching)
gulp.task('default', ['scss', 'watch']);
