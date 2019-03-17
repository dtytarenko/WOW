const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const maps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
 



gulp.task('css', () => {
  return gulp.src([
    'src/sass/main.scss',
    'src/sass/components/**/*.scss',
    'src/sass/**/*.scss'
  ]) 
		.pipe(plumber()) 
		.pipe(maps.init())
		.pipe(sass()) // для препроцессора css - stylus 
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'],
		{ cascade: true })) // для кроссбраузерности
		.pipe(csso()) // минификация css
		.pipe(rename(
			{suffix:'.min', dirname: ''})) // для переименования конечных файлов css и для изменения конечной структуры проекта
		.pipe(maps.write())
		.pipe(gulp.dest('dist/css/')) // сборка проекта с указанием конечной директории
		.pipe(browserSync.reload({
			stream: true})); // отслеживание ошибок в режиме стрима
});
  
gulp.task('img',() => {
  return gulp.src('src/assets/**/*.*')
  .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
        plugins: [
            {removeViewBox: true},
            {cleanupIDs: false}
        ]
      })
  ]))
  .pipe(gulp.dest('dist/img'))
})

gulp.task('fonts',() => {
  var buildFonts = gulp.src('src/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));
})



gulp.task('html', () => {
  return gulp.src('src/views/*.html')
    .pipe(gulp.dest('dist/'))
    .pipe(browserSync.stream())
});


gulp.task('js', () => {
  return gulp.src('src/*.js')
    .pipe(gulp.dest('dist/'))
    .pipe(browserSync.stream())
});

gulp.task('reload', () => {
  browserSync({
    server: {
      baseDir: 'dist/'
    },
    notify: false,
  });
});

gulp.task('watch', ['reload','css', 'html', 'img', 'fonts', 'js'], () => {
  gulp.watch('src/sass/**/*.scss', ['css']);
  gulp.watch(['src/views/*.html'], ['html'])
  gulp.watch('dist/*.html', browserSync.reload)
});