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

    gulp.task('apidoc', function () {
        apidoc.exec(opts);
    });

    return this.queueTask('apidoc');
});
