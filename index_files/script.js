//  slider
const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 50,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 3,
            spaceBetween: 50
        },
        // when window width is >= 640px
    }
});

// faq

// Получить элементы с классом collapsible
let questions = document.querySelectorAll('.faq__question')
var i

// Добавить обработчик события click для каждой кнопки

questions.forEach(quest => quest.addEventListener('click', function () {
    // Переключить класс active для кнопки
    this.classList.toggle('active')
    // Получить следующий элемент-сосед для кнопки
    var content = this.nextElementSibling
    // Переключить свойство display для содержимого
    // if (content.style.display === 'block') {
    //     content.style.display = 'none'
    // } else {
    //     content.style.display = 'block'
    // }
}
))
