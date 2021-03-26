const designs = () => {
    const designsSection = document.getElementById('designs'),
        designsNavItems = document.querySelectorAll('.designs-nav__item'),
        designsSlides = document.querySelector('.designs-slider').children,
        previewBlocks = document.querySelectorAll('.preview-block'),
        navListDesigns = document.getElementById('designs-list');

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


    designsSection.addEventListener('click', (event) => {
        const target = event.target;

        if (target.closest('.designs-nav__item')) {
            designsNavItems.forEach(item => item.classList.remove('active'));
            target.classList.add('active');

            searchActive(designsNavItems);
            showActive(currentSlide, designsSlides);

            previewBlocks.forEach((item, index) => {
                item.classList.remove('visible');
                if (index === currentSlide) { item.classList.add('visible'); }
            });
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

            for (let slide of designsSlides[currentSlide].children) { slide.style.display = 'none'; }
            designsSlides[currentSlide].children[currentPreview].style.display = 'block';
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
    });

    const init = () => {
        showActive(0, designsSlides);
        document.querySelector('#nav-arrow-designs_left').style.display = 'none';
    };

    init();
};

export default designs;