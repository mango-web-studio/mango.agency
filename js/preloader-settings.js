$(document).ready(function(){

    // Preloader
    var preloader   = $('#preloader'),
        imagesCount = $('img').length,
        percent     = 100 / imagesCount,
        progress    = 0,
        loadedImg   = 0,
        timeBreak   = 1200;

    $(".preloader_img_wrap").circularProgress({
        color: "#C25FFF",
        line_width: 5,
        height: "200px",
        width: "200px",
        percent: 0,
        // counter_clockwise: true,
        starting_position: 50
    }).circularProgress('animate', percent, 1000);

    for (let i = 0; i < imagesCount; i++) {
        let img_copy         = new Image();
            img_copy.src     = document.images[i].src;
            img_copy.onload  = img_load;
            img_copy.onerror = img_load;
    }

    function img_load() {
        progress += percent;
        loadedImg++;
        if (progress >= 100 || loadedImg == imagesCount) {
            preloader.delay(timeBreak).fadeOut('slow');
        }
        $('.preloader_img_wrap').circularProgress('animate', progress, 500);
    }

    // Adding a classes to run animation on different elements
    if (document.querySelector('.animation') || document.querySelector('.animation_span')) {

        let elements      = document.querySelectorAll('.animation');
        let elements_span = document.querySelectorAll('.animation_span');

        window.setTimeout(() => elements[0].classList.add('animation_design_1'), timeBreak);
        window.setTimeout(() => elements[1].classList.add('animation_design_2'), timeBreak);
        window.setTimeout(() => elements[2].classList.add('animation_text_1'), timeBreak);
        for (let i = 0; i < elements_span.length; i++) {
            window.setTimeout(() => elements_span[i].classList.add('animation_span_appear'), timeBreak);
        }
    }
});