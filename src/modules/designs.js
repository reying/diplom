const designs = () => {
    const body = document.querySelector('body'),
        designsSection = document.getElementById('designs'),
        designsNavItems = document.querySelectorAll('.designs-nav__item'),
        designsSlides = document.querySelector('.designs-slider').children,
        previewBlocks = document.querySelectorAll('.preview-block'),
        navListDesigns = document.getElementById('designs-list'),
        popupDesignsSection = document.querySelector('.popup-design'),
        popupDesignSlides = document.querySelector('.popup-design-slider').children,
        popupDesignText = document.querySelectorAll('.popup-design-text'),
        navListPopupDesigns = document.getElementById('nav-list-popup-designs');

    let currentSlide = 0,
        currentPreview = 0,
        counter = 0,
        positionX = 0;

    const searchActive = (arr) => {
        arr.forEach((item, index) => {
            if (item.classList.contains('active')) {
                currentSlide = index;
            }
        });
    };

    const showActive = (index, arr) => {
        for (let slide of arr) { slide.style.display = 'none'; }
        arr[index].style.display = 'block';
    };

    const showSlider = () => {
        showActive(currentSlide, designsSlides);
        previewBlocks.forEach((item, index) => {
            item.classList.remove('visible');
            if (index === currentSlide) { item.classList.add('visible'); }
        });
    };

    const showSlide = (slides) => {
        for (let slide of slides[currentSlide].children) { slide.style.display = 'none'; }
        slides[currentSlide].children[currentPreview].style.display = 'block';
    };


    body.addEventListener('click', (event) => {
        const target = event.target;

        if (target.closest('#designs')) {

            if (target.closest('.designs-nav__item')) {
                currentPreview = 0;
                designsNavItems.forEach(item => item.classList.remove('active'));
                target.classList.add('active');

                searchActive(designsNavItems);

                showSlider();

                designsSection.querySelector('.slider-counter-content__total').textContent = designsSlides[currentSlide].children.length;
            }

            if (target.closest('.preview-block__item')) {
                const items = target.parentNode.parentNode.children;

                for (let item of items) { item.children[0].classList.remove('preview_active'); }
                target.parentNode.children[0].classList.add('preview_active');

                for (let i = 0; i < items.length; i++) {
                    if (items[i].children[0].classList.contains('preview_active')) {
                        currentPreview = i;
                    }
                }

                showSlide(designsSlides);
            }

            if (target.closest('#nav-arrow-designs_left')) {
                const widthSlide = navListDesigns.children[counter].offsetWidth + 10;
                positionX -= widthSlide;
                navListDesigns.style.transform = `translateX(-${positionX}px)`;

                if (counter === 0) {
                    document.querySelector('#nav-arrow-designs_left').style.display = 'none';
                } else {
                    document.querySelector('#nav-arrow-designs_right').style.display = 'block';
                    counter--;
                }
            }

            if (target.closest('#nav-arrow-designs_right')) {

                const widthSlide = navListDesigns.children[counter].offsetWidth + 10;
                positionX += widthSlide;
                navListDesigns.style.transform = `translateX(-${positionX}px)`;

                if (counter === navListDesigns.children.length - 4) {
                    document.querySelector('#nav-arrow-designs_right').style.display = 'none';
                } else {
                    document.querySelector('#nav-arrow-designs_left').style.display = 'block';
                    counter++;
                }
            }

            if (target.closest('#design_left')) {
                console.log('click');
                if (currentPreview === 0) {
                    currentPreview = designsSlides[currentSlide].children.length - 1;
                } else {
                    currentPreview--;
                }

                showSlide(designsSlides);
                designsSection.querySelector('.slider-counter-content__current').textContent = currentPreview + 1;
            }

            if (target.closest('#design_right')) {
                if (currentPreview === designsSlides[currentSlide].children.length - 1) {
                    currentPreview = 0;
                } else {
                    currentPreview++;
                }

                showSlide(designsSlides);
                designsSection.querySelector('.slider-counter-content__current').textContent = currentPreview + 1;
            }

            if (target.closest('.link-list-designs')) {
                if (target.closest('a')) {
                    event.preventDefault();

                    popupDesignsSection.style.visibility = 'visible';

                    popupDesignsSection.querySelector('.slider-counter-content__total').textContent = popupDesignSlides[currentSlide].children.length;

                    document.querySelector('#nav-arrow-popup-designs_left').style.display = 'none';

                    designsNavItems[currentSlide + 5].classList.add('active');
                }
            }
        }

        if (target.closest('.popup-design')) {
            if (target.closest('.close')) {
                showSlider();
                designsNavItems[currentSlide].classList.add('active');
                popupDesignsSection.style.visibility = 'hidden';
            }

            if (target.closest('.designs-nav__item')) {
                currentPreview = 0;
                designsNavItems.forEach(item => item.classList.remove('active'));
                target.classList.add('active');

                searchActive(designsNavItems);
                currentSlide = currentSlide % 5;
                showActive(currentSlide, popupDesignSlides);

                popupDesignText.forEach((item, index) => {
                    item.classList.remove('visible-content-block');
                    if (index === currentSlide) { item.classList.add('visible-content-block'); }
                });

                showSlide(popupDesignSlides);
                popupDesignsSection.querySelector('.slider-counter-content__current').textContent = currentPreview + 1;
                popupDesignsSection.querySelector('.slider-counter-content__total').textContent = popupDesignSlides[currentSlide].children.length;
            }

            if (target.closest('#popup_design_left')) {
                if (currentPreview === 0) {
                    currentPreview = popupDesignSlides[currentSlide].children.length - 1;
                } else {
                    currentPreview--;
                }

                showSlide(popupDesignSlides);
                popupDesignsSection.querySelector('.slider-counter-content__current').textContent = currentPreview + 1;
            }
            if (target.closest('#popup_design_right')) {
                if (currentPreview === popupDesignSlides[currentSlide].children.length - 1) {
                    currentPreview = 0;
                } else {
                    currentPreview++;
                }

                showSlide(popupDesignSlides);
                popupDesignsSection.querySelector('.slider-counter-content__current').textContent = currentPreview + 1;
            }

            if (target.closest('#nav-arrow-popup-designs_left')) {
                const widthSlide = navListPopupDesigns.children[counter].offsetWidth + 10;
                positionX -= widthSlide;
                navListPopupDesigns.style.transform = `translateX(-${positionX}px)`;

                if (counter === 0) {
                    document.querySelector('#nav-arrow-popup-designs_left').style.display = 'none';
                    document.querySelector('#nav-arrow-popup-designs_right').style.display = 'block';
                } else {
                    document.querySelector('#nav-arrow-popup-designs_right').style.display = 'block';
                    counter--;
                }
            }
            if (target.closest('#nav-arrow-popup-designs_right')) {
                const widthSlide = navListPopupDesigns.children[counter].offsetWidth + 10;
                positionX += widthSlide;
                navListPopupDesigns.style.transform = `translateX(-${positionX}px)`;

                if (counter === navListPopupDesigns.children.length - 4) {
                    document.querySelector('#nav-arrow-popup-designs_right').style.display = 'none';
                    document.querySelector('#nav-arrow-popup-designs_left').style.display = 'block';
                } else {
                    document.querySelector('#nav-arrow-popup-designs_left').style.display = 'block';
                    counter++;
                }
            }
        }


    });



    const init = () => {
        showActive(0, designsSlides);
        document.querySelector('#nav-arrow-designs_left').style.display = 'none';
        showActive(0, popupDesignSlides);
        showSlide(popupDesignSlides);
    };

    init();
};

export default designs;