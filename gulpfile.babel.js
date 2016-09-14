// Include gulp
import gulp from 'gulp'

// Include plugins
import nodesass from 'gulp-sass'
import postcss from 'gulp-postcss'
import cssnano from 'cssnano'
import autoprefixer from 'autoprefixer'
import flexbugsfixes from 'postcss-flexbugs-fixes'

// Turn sass into css, prefix, minify and bless
gulp.task('scss', () => {
  const processors = [
    autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false,
      remove: false
    }),
    flexbugsfixes(),
    cssnano()
  ]

  return gulp.src('src/scss/**/*.scss')
    .pipe(nodesass({
        includePaths: [
            'node_modules/reeeset/dist',
            'node_modules/bootstrap/scss'
        ]
    }).on('error', nodesass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest('dist/css/'))
})

// Copy JS files to /dist
gulp.task('copy-js', () => {
    return gulp.src(['src/js/**/*'])
    .pipe(gulp.dest('dist/js'))
})

// Copy image files to /dist
gulp.task('copy-img', () => {
    return gulp.src(['src/img/**/*'])
    .pipe(gulp.dest('dist/img'))
})

// Watch files for changes
gulp.task('watch', () => {
    gulp.watch('src/**/*', ['scss', 'copy-js', 'copy-img'])
})

// Default task (rebuild on init before watching)
gulp.task('default', ['scss', 'copy-js', 'copy-img', 'watch'])

// Build with no watch
gulp.task('build', ['scss', 'copy-js', 'copy-img'])
