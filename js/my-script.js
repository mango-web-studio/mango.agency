window.onload = function() {
    /* stylization of "select" elements */
    let divWrapSelects, selElmnt, a, b, c;
    /* look for any elements with the class "select_wrap": */
    divWrapSelects = document.getElementsByClassName("select_wrap");
    for (let i = 0; i < divWrapSelects.length; i++) {
        selElmnt = divWrapSelects[i].getElementsByTagName("select")[0];
        /* for each element, create a new DIV that will act as the selected item: */
        a = document.createElement("div");
        a.setAttribute("class", "select-selected");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        divWrapSelects[i].appendChild(a);
        /* for each element, create a new DIV that will contain the option list: */
        b = document.createElement("div");
        b.setAttribute("class", "select-items select-hide");
        for (let j = 0; j < selElmnt.length; j++) {
            /* for each option in the original select element, create a new DIV that will act as an option item: */
            c = document.createElement("div");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.setAttribute('data-filter', selElmnt.options[j].getAttribute('value'));
            // added a class atribute to hide the first "option" of the "select" element
            if ( j == selElmnt.selectedIndex ) {
                c.setAttribute("class", "select-hide");
            }
            c.addEventListener("click", function() {
                /* when an item is clicked, update the original select box, and the selected item: */
                let y, s, h, tarrifInput;
                s = this.parentElement.parentElement.getElementsByTagName("select")[0];
                // div element with class name "select-selected"
                h = this.parentElement.previousSibling;
                for (let i = 0; i < s.length; i++) {
                    if (s.options[i].innerHTML == this.innerHTML) {
                        s.selectedIndex = i;
                        if (this.closest('.choose_tarrif_plan')) {
                            // the input element with class name "tarrif_input"
                            tarrifInput = this.parentElement.parentElement.parentElement.nextElementSibling.querySelector('input');
                            if (tarrifInput) {
                                // write in the input element value of the slected option
                                tarrifInput.value = `${s[s.selectedIndex].getAttribute('data-price')} uah`;
                            }
                        }
                        h.innerHTML = this.innerHTML;
                        y = this.parentElement.getElementsByClassName("select-hide");
                        for (let k = 0; k < y.length; k++) {
                            y[k].removeAttribute("class");
                        }
                        this.setAttribute("class", "same-as-selected select-hide");
                        break;
                    }
                }
                h.click();
            });
            b.appendChild(c);
        }
        divWrapSelects[i].appendChild(b);

        a.addEventListener("click", function(e) {
            /* when the select box is clicked, close any other select boxes, and open/close the current select box: */
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
        });
    }

    function closeAllSelect(elmnt) {
        /* a function that will close all select boxes in the document, except the current select box: */
        let x, y, arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        for (let i = 0; i < y.length; i++) {
            if (elmnt == y[i]) {
                arrNo.push(i);
            } else {
                y[i].classList.remove("select-arrow-active");
            }
        }
        for (let i = 0; i < x.length; i++) {
            if (arrNo.indexOf(i)) {
                x[i].classList.add("select-hide");
            }
        }
    }
    /* if the user clicks anywhere outside the select box, then close all select boxes: */
    document.addEventListener("click", closeAllSelect);


// Press Esc to close the menu.
    document.addEventListener("keydown", function(e) {
        if (e.keyCode === 27) {
            // let menuCheckbox = document.getElementById('menu_checkbox');
            menu_checkbox.checked = false;
        }
    });


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

    // Filter for slider
    let filter = document.getElementById('filter');
    if (filter) {
        let slidesArr  = document.querySelectorAll('.content_portfolio_slide'),
            filterWrap = filter.parentElement,
            divItemArr = filterWrap.querySelectorAll('.select-items div');

        for (let i = 0; i < divItemArr.length; i++) {
            if (divItemArr[i].getAttribute('data-filter') == 'all') {
                divItemArr[i].addEventListener('click', function() {
                    for (let i = 0; i < slidesArr.length; i++) {
                        slidesArr[i].classList.remove('slide-hide');
                    }
                });
            }
            if (divItemArr[i].getAttribute('data-filter') == 'design') {
                divItemArr[i].addEventListener('click', function() {
                    for (let i = 0; i < slidesArr.length; i++) {
                        slidesArr[i].classList.remove('slide-hide');
                        if (slidesArr[i].getAttribute('data-filter') !== 'design') {
                            slidesArr[i].classList.add('slide-hide');
                        }
                    }
                });
            }
            if (divItemArr[i].getAttribute('data-filter') == 'development') {
                divItemArr[i].addEventListener('click', function() {
                    for (let i = 0; i < slidesArr.length; i++) {
                        slidesArr[i].classList.remove('slide-hide');
                        if (slidesArr[i].getAttribute('data-filter') !== 'development') {
                            slidesArr[i].classList.add('slide-hide');
                        }
                    }
                });
            }
            if (divItemArr[i].getAttribute('data-filter') == 'seo') {
                divItemArr[i].addEventListener('click', function() {
                    for (let i = 0; i < slidesArr.length; i++) {
                        slidesArr[i].classList.remove('slide-hide');
                        if (slidesArr[i].getAttribute('data-filter') !== 'seo') {
                            slidesArr[i].classList.add('slide-hide');
                        }
                    }
                });
            }
        }
    }
};