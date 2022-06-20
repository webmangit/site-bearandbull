export const sendmail = () => {
    return app.gulp.src(app.path.src.sendmail) // получили доступ к нужным файлам с помощью метода src()
        .pipe(app.gulp.dest(app.path.build.sendmail)) //  перенесли файлы в нужную папку, с помощью метода dest()
}