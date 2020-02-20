$(document).ready(function () {

    // Burger button in header menu
    $('#nav-icon1').click(function(){
        $(this).toggleClass('open');

        $('.hidden-menu').slideToggle(300, function(){
            if($(this).css('display') === 'none') {
                $(this).removeAttr('style');
            }});



    });
});