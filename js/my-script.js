window.onload = function() {

    // Popup for slider
    if (document.getElementById('gallery_popup') || document.getElementById('mobile_gallery_popup')) {
        // For the desktop slider
        let galleryPopup = document.getElementById('gallery_popup'),
            popupClose   = galleryPopup.querySelector('.gallery_popup_close'),
            slidesArr    = document.querySelectorAll('.js_slide_popup');

        popupClose.addEventListener('click', () => galleryPopup.style.display = 'none');

        for (let i = 0; i < slidesArr.length; i++) {
            slidesArr[i].addEventListener('click', function () {
                let currentSrc    = slidesArr[i].querySelector('.content_portfolio_slide_img').src,
                    popupPref     = 'popup_',
                    firstIndex    = currentSrc.lastIndexOf('/'),
                    currentSrcArr = currentSrc.split('');

                let img       = document.createElement('img');
                img.className = 'gallery_popup_img';
                img.alt       = 'preview';

                currentSrcArr.splice(firstIndex + 1, 0, popupPref);
                img.src = currentSrcArr.join('');
                galleryPopup.querySelector('.gallery_popup_inner').innerHTML = '';
                galleryPopup.querySelector('.gallery_popup_inner').appendChild(img);
                galleryPopup.style.display = 'block';
            });
        }
        
        // For the mobile slider
        let mobile_galleryPopup = document.getElementById('mobile_gallery_popup'),
            mobile_popupClose   = mobile_galleryPopup.querySelector('.mobile_gallery_popup_close'),
            mobile_slidesArr    = document.querySelectorAll('.js_mobile_slide_popup');

        mobile_popupClose.addEventListener('click', () => mobile_galleryPopup.style.display = 'none');

        for (let i = 0; i < mobile_slidesArr.length; i++) {
            mobile_slidesArr[i].addEventListener('click', function () {
                let currentSrc    = mobile_slidesArr[i].querySelector('.mobile_content_portfolio_slide_img').src,
                    popupPref     = 'popup_',
                    firstIndex    = currentSrc.lastIndexOf('/'),
                    currentSrcArr = currentSrc.split('');

                let img       = document.createElement('img');
                img.className = 'mobile_gallery_popup_img';
                img.alt       = 'preview';

                currentSrcArr.splice(firstIndex + 1, 0, popupPref);
                img.src = currentSrcArr.join('');
                mobile_galleryPopup.querySelector('.mobile_gallery_popup_inner').innerHTML = '';
                mobile_galleryPopup.querySelector('.mobile_gallery_popup_inner').appendChild(img);
                mobile_galleryPopup.style.display = 'block';
            });
        }
    }
};