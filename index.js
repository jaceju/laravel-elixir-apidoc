'use strict';

var gulp = require('gulp');
var Elixir = require('laravel-elixir');
var _ = require('underscore');
var apidoc = require('gulp-apidoc');

Elixir.extend('apidoc', function (options) {

    options = _.extend({
        src: 'app/',
        dest: 'public/docs/api'
    }, options);

    new Elixir.Task('apidoc', function () {
        apidoc.exec({
            src: options.src,
            dest: options.dest
        });
    }).watch(options.src + '**/*.php');

});
