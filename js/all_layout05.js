$(function() {

//.slideUp( [duration ] [, swing or easing ] [, complete ] )
// slideUp, slideDown, slideToggle 

$('.xi-close').on('click', function(){
    $('.headerWrap').slideToggle(800, 'swing');
})





function tabMenu() {
    var IDX = $(this).index();
    $('tabLink li').removeClass('active');
    $(this).addClass('active');
    $('.tabContents>div').removeClass('active');
    // $('.tabContents>div').eq(IDX).addClass('active').siblings().removeClass('active');
}

$('.tabLink li').on('click',tabMenu);

$('.topBannerToggle i').on('click, tableMenu')
    $('.headerWrap')
})