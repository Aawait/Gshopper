const gulp = require('gulp');
const sass = require('gulp-sass');
const htmlmin = require('gulp-htmlmin');
const cssmin = require('gulp-clean-css');
const rename = require('gulp-rename');
const jsmin = require('gulp-uglify');


// 创建压缩html任务
function buildHtml(done){
    gulp.src('./dist/views/*.html')
    .pipe(htmlmin({
        removeComments : true, // 清空html注释
        collapseWhitespace : true, // 压缩html
        removeEmptyAttributes : true, // 删除所有标签空属性
        minifyCSS : true,  // 压缩页面css
        minifyJS : true   // 压缩页面js
    }))
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('./dist/views'))
    done();
}

module.exports.buildHtml = buildHtml;


// 创建压缩css任务
function buildCss(done){
    gulp.src('./src/css/*.css')
    .pipe(cssmin())
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('./dist/css'))
    done();
}

module.exports.buildCss = buildCss;

// 创建压缩js任务
function buildJs(done){
    gulp.src('./src/js/*.js')
    .pipe(gulp.dest('./dist/js'))
    done();
}

module.exports.buildJs = buildJs;



