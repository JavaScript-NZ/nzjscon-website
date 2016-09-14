// Include gulp
import gulp from 'gulp'

// Include plugins
import nodesass from 'gulp-sass'
import postcss from 'gulp-postcss'
import cssnano from 'cssnano'
import autoprefixer from 'autoprefixer'
import flexbugsfixes from 'postcss-flexbugs-fixes'
import babel from 'gulp-babel'

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
    })
    .on('error', nodesass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest('dist/css/'))
})

// Transpile ES6 into /dist
gulp.task('transpile-js', () => {
  return gulp.src(['src/js/**/*.js'])
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('dist/js'))
})

gulp.task('js-polyfills', function(){
  return gulp.src([
      'src/libs/**/*.js',
      'node_modules/babel-polyfill/dist/polyfill.js'
    ])
    .pipe(gulp.dest('dist/libs'))
})

// Copy image files to /dist
gulp.task('copy-img', () => {
  return gulp.src(['src/img/**/*'])
    .pipe(gulp.dest('dist/img'))
})

// Watch files for changes
gulp.task('watch', () => {
  gulp.watch('src/**/*', ['scss', 'transpile-js', 'copy-img'])
})

// Build
gulp.task('build', ['scss', 'js-polyfills', 'transpile-js', 'copy-img'])

// Default task (rebuild on init before watching)
gulp.task('default', ['build', 'watch'])
