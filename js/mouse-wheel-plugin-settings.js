$(function() {

    $('.horizontal_scroll').mousewheel(function(event, delta, deltaX, deltaY) {
        event.preventDefault();

        if ( navigator.platform.toUpperCase().indexOf('MAC') >= 0 ) {
            if(Math.abs(delta) >= 500) delta /= 500;
            this.scrollLeft -= delta;
        } else {
            if(Math.abs(delta) >= 50) delta /= 50;
            this.scrollLeft -= (delta * 50);
        }

    });

});