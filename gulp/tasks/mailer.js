export const mailer = () => {
    return app.gulp.src(app.path.src.mailer) // получили доступ к нужным файлам с помощью метода src()
        .pipe(app.gulp.dest(app.path.build.mailer)) //  перенесли файлы в нужную папку, с помощью метода dest()
}