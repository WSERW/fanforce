//  slider
const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 50,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
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
