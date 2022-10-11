const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerview: 1,
    pagination: {
        el: '.swiper-pagination',
    },

});
const burger = document.querySelector('.header__burger')
const menu = document.querySelector('.menu')
const body = document.body

burger.addEventListener('click', () => {
    burger.classList.toggle('_active')
    menu.classList.toggle('_active')
    body.classList.toggle('_lock')
})

menu.addEventListener('click', () => {
    menu.classList.remove('_active')
    burger.classList.remove('_active')
    body.classList.remove('_lock')

})