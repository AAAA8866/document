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

    $('.visualSlide figure').eq(1).addClass('oo');
    $('.visualSlide').on('afterChange', function (e,s,c){
    $('.visualSlide figure').eq(c+1).addClass('oo').siblings().removeClass('oo');
    if (c===1) {
        $('.msLeft').addClass('oo')
    } else {
        $('.msLeft').removeClass('oo')
    }
    });



    $('.eProductSlide').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:1000,
    });

    $('.eventProduct i:nth-of-type(1)').on('click',function() {
        $('.eProductSlide').slick('slickPause')
    });

    $('.eventProduct i:nth-of-type(2)').on('click',function() {
        $('.eProductSlide').slick('slickPlay')
    });

    $('.aproductSlide').slick({
        arrows: false,
        dots: true,
        slidesToShow: 5,
        centerMode: true,
    });
    
    $('.allProduct i:first-child').on('click', function(){
        $('.aproductSlide').slick('slickPrev')
    });
    
    $('.allProduct i:last-child').on('click', function(){
        $('.aproductSlide').slick('slickNext')
    });

    // let iidx = $('.aproductSlide figure.slick-current');
    // iidx.addClass('on')
    // $('.aproductSlide').on('afterChange', function() {
    //     let iidx = $(.aproductSlide figure.slick-current');
    //     iidx.addClaa('on').siblings().removeClass('on')
    // });

    $("#bgndVideo").YTPlayer({
        videoURL:'https://www.youtube.com/watch?v=qR13PjAwHwY',
        containment:'.movieBg',
        autoPlay:true,
         mute:true, 
         startAt:0, 
         opacity:1,
         showControls:false,
    });

    $('.movieBg i:first-child').on('click', function(){
        $('#bgndVideo').YTPPause();
    });
    
    $('.movieBg i:last-child').on('click', function(){
        $('#bgndVideo').YTPPlay();
    });



    $('.tab_menu li').on('click',function(){
        var idx = $(this).index();
        $(this).addClass('oo').siblings().removeClass('oo');
        $('.tabContent>div').eq(idx).addClass('oo').siblings().removeClass('oo');     
    });

    // tab_menu 안 list 안 a로 잡혀있을때
    // $('.tab_menu li a').on('click',function(){
    //     var idx = $(this).parent().index();
    //     $(this).addClass('oo').siblings().removeClass('oo');
    //     $('.tabContent>div').eq(idx).addClass('oo').siblings().removeClass('oo');     
    // });


    

    

    ////////
})

