var gulp = require('gulp');
var concat = require('gulp-concat');
var tmodjs = require('gulp-tmod');
var uglify = require("gulp-uglify");
var minify = require("gulp-minify-css");
var livereload = require('gulp-livereload');
var htmlmin = require('gulp-htmlmin');
var clean = require('gulp-clean');
var notify = require('gulp-notify');
var del = require('del');

gulp.task('css', function () { //css合拼
    gulp.src(['dist/css/build/**/*.css']).pipe(concat('style.css')).pipe(gulp.dest('./dist/css'))
});

gulp.task('js', function () { //js合拼
    gulp.src(['dist/js/build/**/*.js']).pipe(concat('app.js')).pipe(gulp.dest('./dist/js'));
});

gulp.task('tpl', function () { //模版合拼
    //gulp.src(['dist/template/**/*.html']).pipe(tmodjs({ base: 'dist', combo: true, output: 'dist/js'}))
    gulp.src(['dist/template/**/*.html']).pipe(tmodjs({ output: 'dist/js/',runtime:'template.js'}));
});


gulp.task('auto', function () { //livereload 监听
    //gulp.src(['app/mvc/View/**/*.html','public/js/template.js','public/js/app.js','public/css/style.css']).pipe(livereload());
   // gulp.src(['public/css/style.css','public/js/*.js']).pipe(livereload())
});

gulp.task('watch', ['css','js','tpl','auto'], function () {
    livereload.listen();
    gulp.watch('dist/js/build/**/*.js', ['js']);
    gulp.watch('dist/css/build/*.css', ['css']);
    gulp.watch('dist/template/**/*.html', ['tpl']);
    //gulp.watch(['public/cache/template/**/.cache/public/template/**/*.js'], ['concat']);

    gulp.watch(['dist/**']).on('change', livereload.changed);
    //gulp.watch(['public/css/style.css','public/js/*.js'], ['auto']);
});


gulp.task('clean', function (cb) {

    return del('./static', cb);
    //return gulp.src('./public/dist').pipe(clean()).pipe(notify('had clean dist file'));
});

gulp.task('create', function () {
    var path = './static';
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    gulp.src(['./dist/images/*','./dist/images/**/*.jpg','./dist/images/**/*.png','./dist/images/**/*.gif']).pipe(gulp.dest(path+'/dist/images')).pipe(notify('images lib create completed'));
    gulp.src(['./dist/css/build/font/*']).pipe(gulp.dest(path+'/dist/css/font')).pipe(notify('font lib create completed'));
    gulp.src(['./dist/css/*.css']).pipe(minify()).pipe(gulp.dest(path+'/dist/css')).pipe(notify('css lib create completed'));
    gulp.src(['./dist/css/popup/*.css']).pipe(minify()).pipe(gulp.dest(path+'/dist/css/popup')).pipe(notify('css lib create completed'));
    gulp.src(['./dist/js/lib/**/*.js']).pipe(uglify()).pipe(gulp.dest(path+'/dist/js/lib')).pipe(notify('js lib create completed'));

    gulp.src(['./dist/js/popup/**/*.js']).pipe(uglify()).pipe(gulp.dest(path+'/dist/js/popup')).pipe(notify('js lib create completed'));
    gulp.src(['./dist/js/zip/**/*.js']).pipe(uglify()).pipe(gulp.dest(path+'/dist/js/zip')).pipe(notify('js lib create completed'));
    gulp.src(['./dist/js/*.js']).pipe(uglify()).pipe(gulp.dest(path+'/dist/js')).pipe(notify('js create completed'));

    gulp.src(['./popup.html']).pipe(gulp.dest(path)).pipe(notify('popup page create completed'));
    gulp.src(['./reader.html']).pipe(gulp.dest(path)).pipe(notify('popup page create completed'));
    gulp.src(['./search.html']).pipe(gulp.dest(path)).pipe(notify('popup page create completed'));
    gulp.src(['./background.html']).pipe(gulp.dest(path)).pipe(notify('background page create completed'));
    gulp.src(['./manifest.json']).pipe(gulp.dest(path)).pipe(notify('manifest json create completed'));
});

gulp.task('build', ['clean'],function () {
    gulp.start('create');
});
