const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.navbar__menu');
const icon = document.querySelector('.navbar__icon');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icon.classList.toggle('active');
    
});



$(function() {
    ///////////


    $('.mainSlide').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:3000,
        Speed:300,
        dots:false
    });

    $('.mainVisual .slideArrows i:first-child').on('click',function() {
        $('.mainSlide').slick('slickPrev')
    });
    $('.mainVisual .slideArrows i:last-child').on('click',function() {
        $('.mainSlide').slick('slickNext')
    });

    ///////////
})