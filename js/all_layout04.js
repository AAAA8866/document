$(function() {

    //$('선택').on('이벤트',작동)
    //function() {}
    //$this, $this.(index)

    
    function 팝업창끄기() {
            $(this).parent().hide();
        }
        
    // function 팝업창끄기() {
    //     $('.popUp01').hide();
    // }
    $('.popUp button').on('click', 팝업창끄기);
    //click 대문자로 하면 구동안됨

    
     
})