//  slider
const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 50,
    // Navigation arrows
    navigation: {
        nextEl: '.slider-button-next',
        prevEl: '.slider-button-prev',
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


// nav burger
let navToggler = document.querySelector('.nav__toggler')
let nav = document.querySelector('.nav')
let isNav = false
navToggler.addEventListener('click', function () {
    isNav = !isNav
    nav.classList.toggle('active')
    if (isNav) {
        document.body.style.overflow = 'hidden'
    }
    else {
        document.body.style.overflow = 'visible'
    }
})


// cookie

cookieBtn = document.querySelector('.cookie__btn')
cookieWrapper = document.querySelector('.cookie__wrapper')
cookieBtn.addEventListener('click', function () {
    cookieWrapper.remove()
})


// modal

modalOpenBtns = document.querySelectorAll('.modal__open')
modalBtn = document.querySelector('.modal__btn')
modalWrapper = document.querySelector('.modal__wrapper')

modalOpenBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        modalWrapper.classList.add('active')
    })
});

modalBtn.addEventListener('click', function () {
    modalWrapper.classList.remove('active')
})

// success

successOpenBtns = document.querySelectorAll('.banner__button')
successBtn = document.querySelector('.success__btn')
successWrapper = document.querySelector('.success__wrapper')

successOpenBtns.forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.preventDefault()
        successWrapper.classList.add('active')
        modalWrapper.classList.remove('active')
    })
});

successBtn.addEventListener('click', function () {
    successWrapper.classList.remove('active')
})