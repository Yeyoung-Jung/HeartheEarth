$(function () {
    var swiper = new Swiper('.gallery-center_inner ', {
        slidesPerView: 4,//보여지는 갤러리 수
        spaceBetween: 10,//갤러리 사이 간격
        centeredSlides: true,//센터모드
        speed: 1500,//버튼을 슬라이드가 넘어가는 시간
        autoplay: {
            delay: 2500,//자동으로 넘어가기 전 머무르는 시간
            disableOnInteraction: false,
        },
        loop: true,//슬라이드 무한반복
        navigation: {//화살표 버튼
            nextEl: '.gallery-center .swiper-button-next',
            prevEl: '.gallery-center .swiper-button-prev',
        },
        pagination: {//블릿 버튼
            el: '.gallery-center .swiper-pagination',
            clickable: true,
        },
    });
});

$(function () {
    var swiper = new Swiper('.flowslide_inner ', {
        slidesPerView: 5,//보여지는 갤러리 수
        spaceBetween: 0,//갤러리 사이 간격
        speed: 3000,//버튼을 슬라이드가 넘어가는 시간
        autoplay: {
            delay: 0,//자동으로 넘어가기 전 머무르는 시간
            disableOnInteraction: false,
        },
        loop: true,//슬라이드 무한반복
    });

    $('.flowslide .swiper-slide').on('mouseover', function () {
        swiper.autoplay.stop();
    });
    $('.flowslide .swiper-slide').on('mouseout', function () {
        swiper.autoplay.start();
    });
});

$(function () {
    var swiper = new Swiper('.flowslide_inner2 ', {
        slidesPerView: 1,//보여지는 갤러리 수
        spaceBetween: 20,//갤러리 사이 간격
        speed: 10000,//버튼을 슬라이드가 넘어가는 시간
        autoplay: {
            delay: 0,//자동으로 넘어가기 전 머무르는 시간
            disableOnInteraction: false,
        },
        loop: true,//슬라이드 무한반복
    });

    $('.flowslide2 .swiper-slide').on('mouseover', function () {
        swiper.autoplay.stop();
    });
    $('.flowslide2 .swiper-slide').on('mouseout', function () {
        swiper.autoplay.start();
    });
});

AOS.init({
    duration: 3000 //aos 나타나는 속도
});

$(function(){
    $(".menu_icon, .circle_button").click(function(){
        $(".menu").toggleClass("up");
    });
    // $(".circle_button").click(function(){
    //     $(".menu").removeClass("up");
    // });
});


$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('.topbutton').fadeIn();
    } else {
        $('.topbutton').fadeOut();
    }
});