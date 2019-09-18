$(function() {

    $('.horizontal_scroll').mousewheel(function(event, delta, deltaX, deltaY) {
        event.preventDefault();

        if ( navigator.platform.toUpperCase().indexOf('MAC') >= 0 ) {
            if(Math.abs(deltaY) >= 500) deltaY /= 500;
            this.scrollLeft -= deltaY;
        } else {
            if(Math.abs(deltaY) >= 50) deltaY /= 50;
            this.scrollLeft -= (deltaY * 50);
        }

    });

});