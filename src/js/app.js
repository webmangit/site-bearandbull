import * as flsFunctions from './modules/functions.js'
import * as burger from './modules/burger.js'
import * as transfer from './modules/transfer.js'
import * as spoller from './modules/spoller.js'

// Проверка поддержки браузером webp
flsFunctions.isWebp()
// Обеспечение работы меню бургера
burger.isBurger()
// Перенос HTML-элементов из одного места страницы в любое другое при смене размера экрана
transfer.isTransfer()
// Обеспечение работы споллера
spoller.isSpoller()


// НЕБОЛЬШИЕ СКРИПТЫ
// inputmask
const mainForm = document.querySelector('.form__body');
const telSelector = mainForm.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+7 (999) 999-99-99')
inputMask.mask(telSelector);


// Отправка формы на почту
const form = document.getElementById('form');
form.addEventListener('submit', formSend);

function formSend() {
    let formData = new FormData(form);
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log('Отправлено');
            }
        }
    }
    xhr.open('POST', 'sendmail.php', true);
    xhr.send(formData);
    form.reset();
}


