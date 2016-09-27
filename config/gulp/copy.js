import gulp from 'gulp';

export default () => {
    return gulp
        .src(['source/*.{ico,icns,pdf,txt}'])
        .pipe(gulp.dest('public'));
}
