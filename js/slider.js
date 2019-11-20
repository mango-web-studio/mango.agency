$(document).ready(function(){
    $('.content_portfolio_slider').slick({
        centerMode: true,
        centerPadding: '20%',
        arrows: false,
        infinite: false,
        respondTo: 'window',
        easing:'linear',
        slidesToShow: 1
    });
    $('.mobile_content_portfolio_slider').slick({
        swipeToSlide: true,
        centerMode: true,
        centerPadding: '30px',
        arrows: false,
        infinite: false,
        respondTo: 'window',
        slidesToShow: 1
    });

    // To smooth the scroll of the slider
    const slider = $(".content_portfolio_slider");
    let scrollCount = null;
    let scroll = null;
    slider.on('wheel', (function(e) {
        e.preventDefault();

        clearTimeout(scroll);
        scroll = setTimeout(function(){ scrollCount = 0; }, 30);
        if(scrollCount) return 0;
        scrollCount = 1;

        if (e.originalEvent.deltaY > 0) {
            $(this).slick('slickNext');
        } else {
            $(this).slick('slickPrev');
        }
    }));

    // Press Esc to close the menu
    const checkbox = $("#menu_checkbox");
    $(document).on('keydown', function(e) {
        if (e.keyCode == 27) {
            checkbox.prop("checked", false);
        }
    });
});