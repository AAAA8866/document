$(function() {
    ///////

    // $('.xi-close').on('click',function(){
    //     $('.topBanner').slideToggle(800, 'swing');
    


    function topBannerHandler() {
        // $('.topBanner').slideToggle(800,'swing');
        $('.topBanner').hide();
    }
    $('.topBanner .container i').on('click',topBannerHandler) 


    $('.visualSlide').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:2000,
        // Speed:300,
        dots:true
    });
    ////////
})

