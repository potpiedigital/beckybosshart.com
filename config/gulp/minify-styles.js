import gulp from 'gulp';
import gcleanCss from 'gulp-clean-css';
import gsourcemaps from 'gulp-sourcemaps';

export default () => {
    return gulp
        .src(['source/**/*.css'])
        .pipe(gsourcemaps.init())
        .pipe(gcleanCss())
        .pipe(gsourcemaps.write('./'))
        .pipe(gulp.dest('public'));
}
