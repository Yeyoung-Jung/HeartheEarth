$(function () {
    $('.tabcontent > div').hide();
    $('.tabnav a').click(function () {
        $('.tabcontent > div').hide().filter(this.hash).fadeIn();
        $('.tabnav a').removeClass('active');
        $(this).addClass('active');
        return false;
    }).filter(':eq(0)').click();
});

$(function () {
    $(".q_a li").click(function () {
        $(this).children("div").slideToggle()
        $(this).siblings().children("div").slideUp();
        $(this).toggleClass("on").siblings().removeClass("on")
    });
});

AOS.init({
    duration: 1200 //aos 나타나는 속도
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