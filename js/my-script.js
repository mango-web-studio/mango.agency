window.onload = function() {

    if (document.querySelector('.js_slide_popup')) {
        let galleryPopup = document.getElementById('gallery_popup'),
            popupClose   = galleryPopup.querySelector('.gallery_popup_close'),
            slidesArr    = document.querySelectorAll('.js_slide_popup');

        popupClose.addEventListener('click', () => galleryPopup.style.display = 'none');

        for (let i = 0; i < slidesArr.length; i++) {
            slidesArr[i].addEventListener('click', function () {
                let currentSrc      = slidesArr[i].querySelector('.content_portfolio_slide_img').src,
                    charIndex       = currentSrc.lastIndexOf('/'),
                    popupImgPref    = 'popup_',
                    popupImgPrefArr = popupImgPref.split(''),
                    currentSrcArr   = currentSrc.split('');

                let img = document.createElement('img');
                img.className = 'gallery_popup_img';
                img.alt       = 'preview';

                currentSrcArr.splice(charIndex + 1, 0, ...popupImgPrefArr);
                img.src = currentSrcArr.join('');
                galleryPopup.querySelector('.gallery_popup_inner').innerHTML = '';
                galleryPopup.querySelector('.gallery_popup_inner').appendChild(img);
                galleryPopup.style.display = 'block';
            });
        }
    }
};