$(document).ready(function(){
    // Preloader
    var preloader   = $('#preloader'),
        imagesCount = $('img').length,
        percent     = 100 / imagesCount,
        progress     = 0,
        loadedImg   = 0;

    $(".preloader_img_wrap").circularProgress({
        color: "#C25FFF",
        line_width: 5,
        height: "150px",
        width: "150px",
        percent: 0,
        // counter_clockwise: true,
        starting_position: 50
    }).circularProgress('animate', percent, 1000);
    
    for (let i = 0; i < imagesCount; i++) {
        let img_copy     = new Image();
            img_copy.src     = document.images[i].src;
            img_copy.onload  = img_load;
            img_copy.onerror = img_load;
    }

    function img_load() {
        progress += percent;
        loadedImg++;
        if (progress >= 100 || loadedImg == imagesCount) {
            preloader.delay(400).fadeOut('slow');
        }
        $('.preloader_img_wrap').circularProgress('animate', progress, 500);
    }
});