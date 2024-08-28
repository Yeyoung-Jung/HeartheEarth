
AOS.init({
    duration: 3000 //aos 나타나는 속도
});

$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('.topbutton').fadeIn();
    } else {
        $('.topbutton').fadeOut();
    }
});
$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('.topbutton').fadeIn();
    } else {
        $('.topbutton').fadeOut();
    }
});

$(function(){
    $(".menu_icon, .circle_button").click(function(){
        $(".menu").toggleClass("up");
    });
    // $(".circle_button").click(function(){
    //     $(".menu").removeClass("up");
    // });
});