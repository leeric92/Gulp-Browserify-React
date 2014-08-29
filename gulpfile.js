var browserify = require('browserify');
var watchify = require('watchify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');
var uglify = require('gulp-uglify');
var reactify = require ('reactify');

var sourceFile = './src/main.js';
var destFolder = './build/';
var destFile = 'bundle.js';

gulp.task('browserify', function(){
	return browserify (sourceFile)
	.transform(reactify)
	.require('./node_modules/react/react.js', { expose: 'react'})
	.bundle({debug:true})
	.pipe(source(destFile))
	.pipe(streamify(uglify()))
	.pipe(gulp.dest(destFolder));
});

// gulp.task('jshint', function() {
//   gulp.src(sourceFile)
//     .pipe(jshint())
//     .pipe(jshint.reporter('default'));
// });

gulp.task('watch', function(){
	var bundler = watchify(browserify(sourceFile));
	bundler.transform(reactify);
	bundler.on('update', rebundle);

	function rebundle(){
		return bundler.bundle({debug:true})
		.pipe(source(destFile))
		.pipe(streamify(uglify()))
		.pipe(gulp.dest(destFolder));
	}

	return rebundle();
});

gulp.task('default', ['browserify', 'watch']);


