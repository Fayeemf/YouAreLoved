$(document).ready(function () {
    
$(window).resize(function () {

    $('.bgImg').css({
        position: 'absolute',
        left: ($(window).width()
            - $('.bgImg').outerWidth()) / 2,
        top: ($(window).height()
            - $('.bgImg').outerHeight()) / 2
    });

});

// To initially run the function:
$(document).ready();

});