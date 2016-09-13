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

// Copy JS files to /dist
gulp.task('copy-js', function() {
    return gulp.src(['src/js/**/*'])
    .pipe(gulp.dest('dist/js'));
});

// Copy image files to /dist
gulp.task('copy-img', function() {
    return gulp.src(['src/img/**/*'])
    .pipe(gulp.dest('dist/img'));
});

// Watch files for changes
gulp.task('watch', function() {
    gulp.watch('src/**/*', ['scss', 'copy-js', 'copy-img']);
});

// Default task (rebuild on init before watching)
gulp.task('default', ['scss', 'copy-js', 'copy-img', 'watch']);
