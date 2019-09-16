$(function() {

    let scroll = null;

    $('.horizontal_scroll').mousewheel(function(event, delta) {
        event.preventDefault();

        if(Math.abs(delta) >= 50) delta /= 50;

        this.scrollLeft -= (delta * 50);
    });

});