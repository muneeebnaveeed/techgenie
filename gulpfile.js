const gulp = require("gulp");
const postcss = require("gulp-postcss");

const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const gulpSass = require("gulp-sass");

const rename = require("gulp-rename");

const sass = () => {
    return gulp
        .src("./src/styles/main.scss")
        .pipe(gulpSass())
        .pipe(rename("build.css"))
        .pipe(gulp.dest("./public"));
};

const tailwind = () => {
    return gulp
        .src("./src/styles/tailwind-raw.scss")
        .pipe(postcss([tailwindcss, autoprefixer]))
        .pipe(rename("tailwind.scss"))
        .pipe(gulp.dest("./src/styles"));
};

const watch_tailwind = () => {
    gulp.watch("./tailwind.config.js", gulp.series(tailwind, sass));
    gulp.watch("./src/styles/tailwind-raw.scss", gulp.series(tailwind, sass));
};

const watch_sass = () => {
    return gulp.watch("./src/styles/**/*.scss", sass);
};

const watch = () => {
    watch_tailwind();
    watch_sass();
};

module.exports = { tailwind, watch_tailwind, sass, watch_sass, watch };
