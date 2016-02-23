'use strict';

var gulp = require('gulp');
var elixir = require('laravel-elixir');
var _ = require('underscore');
var apidoc = require('gulp-apidoc');

elixir.extend('apidoc', function (options) {

    var opts = _.extend({
        src: 'app/',
        dest: 'docs/api'
    }, options);

    if (typeof this.queueTask === 'function') {
        gulpTask(opts);
        return this.queueTask('apidoc');
    } else if (typeof elixir.Task === 'function') {
        new elixir.Task('apidoc', function() {
            gulpTask(opts);
        });
    }
});

var gulpTask = function (opts) {
    gulp.task('apidoc', function () {
        apidoc.exec(opts);
    });
};
