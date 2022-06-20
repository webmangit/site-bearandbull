export const jslibs = () => {
    return app.gulp.src(app.path.src.jslibs) // получили доступ к нужным файлам с помощью метода src()
        .pipe(app.gulp.dest(app.path.build.jslibs)) //  перенесли файлы в нужную папку, с помощью метода dest()
}