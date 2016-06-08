import gulp from 'gulp';

import deploy from './config/gulp/deploy';

import copy from './config/gulp/copy';
import minifyMarkup from './config/gulp/minify-markup';
import minifyStyles from './config/gulp/minify-styles';

gulp.task('deploy', deploy);

gulp.task('copy', copy);
gulp.task('minifyMarkup', minifyMarkup);
gulp.task('minifyStyles', minifyStyles);

gulp.task('default', [
    'copy',
    'minifyMarkup',
    'minifyStyles',
]);
