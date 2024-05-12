import gulp from 'gulp';
import { generate } from 'critical';

gulp.task('critical', function (cb) {
  return generate({
    inline: true,
    base: '.',
    src: 'index.html',
    css: ['./css/**.css'],
    ignore: ['@font-face', /url\(/],
    target: {
      css: 'critical.css'
    },
    dimensions: [
      {
        height: 200,
        width: 500,
      },
      {
        height: 900,
        width: 1200,
      },
    ],
  });
});

gulp.task('default', gulp.series('critical'));
