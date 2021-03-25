const transparency = () => {
    const body = document.querySelector('body'),
        transparencySection = document.getElementById('transparency'),
        transparencySlides = document.querySelectorAll('.transparency-item'),
        popupTransparency = document.querySelector('.popup-transparency'),
        popupTransparencySlides = document.querySelectorAll('.popup-transparency-slider__slide'),
        transparencyPopupCounter = document.getElementById('transparency-popup-counter');

    let count = 0;

    body.addEventListener('click', (event) => {
        const target = event.target;

        const searchDisplayState = (arr, displayType) => {
            arr.forEach((item, index) => {
                if (item.style.display === displayType) {
                    count = index;
                }
            });
        };

        const toLeft = (arrSlides, displayType) => {
            searchDisplayState(arrSlides, displayType);
            arrSlides[count].style.display = 'none';
            if (count === 0) {
                arrSlides[arrSlides.length - 1].style.display = displayType;
            } else {
                arrSlides[count - 1].style.display = displayType;
            }
        };

        const toRight = (arrSlides, displayType) => {
            searchDisplayState(arrSlides, displayType);
            arrSlides[count].style.display = 'none';
            if (count === arrSlides.length - 1) {
                arrSlides[0].style.display = displayType;
            } else {
                arrSlides[count + 1].style.display = displayType;
            }
        };

        if (target.closest('#transparency')) {
            if (target.closest('#transparency-arrow_left')) {
                toLeft(transparencySlides, 'flex');
            }

            if (target.closest('#transparency-arrow_right')) {
                toRight(transparencySlides, 'flex');
            }

            if (target.closest('.transparency-item')) {
                popupTransparency.style.visibility = 'visible';
                searchDisplayState(transparencySlides, 'flex');
                popupTransparencySlides.forEach(item => item.style.display = 'none');
                popupTransparencySlides[count].style.display = 'block';
                transparencyPopupCounter.querySelector('.slider-counter-content__total').textContent = popupTransparencySlides.length;
                transparencyPopupCounter.querySelector('.slider-counter-content__current').textContent = count + 1;
            }
        }

        if (target.closest('.popup-transparency')) {
            if (target.closest('.close')) {
                popupTransparency.style.visibility = 'hidden';
            }

            if (target.closest('#transparency_left')) {
                toLeft(popupTransparencySlides, 'block');
                searchDisplayState(popupTransparencySlides, 'block');
                transparencyPopupCounter.querySelector('.slider-counter-content__current').textContent = count + 1;
            }

            if (target.closest('#transparency_right')) {
                toRight(popupTransparencySlides, 'block');
                searchDisplayState(popupTransparencySlides, 'block');
                transparencyPopupCounter.querySelector('.slider-counter-content__current').textContent = count + 1;
            }
        }
    });



    const resizeSlide = () => {
        if (transparencySection.clientWidth <= 1090) {
            transparencySlides.forEach(item => item.style.display = 'none');
            transparencySlides[0].style.display = 'flex';
        }
    };

    window.addEventListener('resize', () => {
        resizeSlide();
    });


    resizeSlide();
};

export default transparency;