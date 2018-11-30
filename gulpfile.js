const { src, dest, series, parallel } = require("gulp");
const sass = require("gulp-sass");
const babel = require("gulp-babel");
const del = require("del");
const pump = require("pump");

async function clean() {
    await del(["public"]);
}

function css(callback) {
    pump([
        src("data/css/*.scss"),
        sass(),
        dest("public/css")
    ], callback);
}

function js(callback) {
    pump([
        src("data/js/*.js"),
        babel(),
        dest("public/js")
    ], callback);
}

function html(callback) {
    pump([
        src("data/**/*.html"),
        dest("public")
    ], callback);
}

exports.css = css;
exports.js = js;
exports.html = html;
exports.default = series(clean, parallel(css, js, html));
