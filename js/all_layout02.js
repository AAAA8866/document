$(function() {
    ///////////////
    
    // var left = 1;

    // function mainSlide() {
    //     $('.mainSlide').css({left:-(left*100)+"%"})
    //     left=left+1;
    //     if(left===3) {left=0}
    // }

    $('.mainSlide').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:1000,
        dots:true
    });

    $('.mainVisual .slideArrows i:first-child').on('click',function() {
        $('.mainSlide').slick('slickPrev')
    });
    $('.mainVisual .slideArrows i:last-child').on('click',function() {
        $('.mainSlide').slick('slickNext')
    });
    // setInterval(mainSlide,2000)
    ///////////////
});