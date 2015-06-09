var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var typescript = require('gulp-tsc');
var tsd = require('gulp-tsd');

var root = require('path').normalize(__dirname);
var paths = {
    ts: {
        src: root + '/src/scripts/**/*.ts',
        test: root + '/test/**/*.ts'
    },
    html: root + '/client/app/**/*.html',
    dist: root + '/dist'
};

gulp.task('browserify', ['ts:client'], function() {
    var bundler = browserify({
        entries: './client/app/main.js'
    });

    var bundle = function() {
        return bundler
            .transform(stringify(['.html']))
            .bundle()
            .pipe(source('main.js'))
            .pipe(gulp.dest(paths.dist));
    };

    return bundle();
});

gulp.task('ts:src', function(cb) {
    return gulp.src([paths.ts.src])
        .pipe(typescript())
        .pipe(gulp.dest('src/scripts'));
        
    // task must finish successfully for browserify to run
    cb(err);   
});

gulp.task('ts:test', function(cb) {
    return gulp.src([paths.ts.test])
        .pipe(typescript())
        .pipe(gulp.dest('test'));

    // task must finish successfully for browserify to run
    cb(err);
});

gulp.task('watch', function() {
    gulp.watch([paths.ts.src], ['ts:src']);
    gulp.watch([paths.ts.test], ['ts:test', 'browserify']);
});

gulp.task('tsd:src', function(callback) {
    tsd({
        command: 'reinstall',
        config: './tsd.client.json'
    }, callback);
});

gulp.task('tsd:test', function(callback) {
    tsd({
        command: 'reinstall',
        config: './tsd.server.json'
    }, callback);
});

gulp.task('default', ['watch']);
gulp.task('postinstall', ['tsd:src', 'tsd:test', 'ts:src', 'ts:test']);