import * as nodePath from 'path'; // импортируем модуль path

const rootFolder = nodePath.basename(nodePath.resolve()); // путь к папке с проектом
const buildFolder = `./dist` // путь к папке с результатом
const srcFolder = `./src` // путь к папке с исходниками

// ОБЪЕКТ ПУТЕЙ КО ВСЕМ ПАПКАМ И ФАЙЛАМ ПРОЕКТА
export const path = {
    // Объект путей к файлам папки с результатом 
    build: {
        js: `${buildFolder}/js/`,
        jslibs: `${buildFolder}/js/libs/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        images: `${buildFolder}/img/`,
        fonts: `${buildFolder}/fonts/`,
        files: `${buildFolder}/files/`,
        mailer: `${buildFolder}/phpmailer/`,
        sendmail: `${buildFolder}/`,
    },
    // Объект путей к файлам папки с исходниками 
    src: {
        js: `${srcFolder}/js/app.js`,
        jslibs: `${srcFolder}/js/libs/**/*.*`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/img/**/*.svg`,
        scss: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/*.html`, // pug
        files: `${srcFolder}/files/**/*.*`,
        svgicons: `${srcFolder}/svgicons/*.svg`,
        mailer: `${srcFolder}/phpmailer/**/*.*`,
        sendmail: `${srcFolder}/sendmail.php`,
    },
    // Объект путей, за изменениями которых следит gulp
    watch: {
        js: `${srcFolder}/js/**/*.js`,
        jslibs: `${srcFolder}/js/libs/**/*.*`,
        scss: `${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/**/*.html`, // pug
        images: `${srcFolder}/**/*.{jpg,jpeg,png,svg,gif,webp,ico}`,
        files: `${srcFolder}/files/**/*.*`
    },
    // Дополнительный набор путей
    clean: buildFolder, // clean будет равна папки с результатом
    buildFolder: buildFolder, // сама папка с результатом
    srcFolder: srcFolder, // папка с исходниками
    rootFolder: rootFolder, // название текущей папки с проектом
    ftp: `test` // папка на удаленном ftp сервере
}