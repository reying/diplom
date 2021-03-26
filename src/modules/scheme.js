const scheme = () => {
    const body = document.querySelector('body'),
        schemeNavItems = document.querySelectorAll('.scheme-nav__item'),
        schemeSlides = document.querySelectorAll('.scheme-slider__slide'),
        schemeDescriptionBlocks = document.querySelectorAll('.scheme-description-block'),
        schemeList = document.getElementById('scheme-list');

    let numActiveItem = 0,
        counter = 0,
        positionX = 0;

    const checkState = () => {
        schemeNavItems.forEach((item, index) => {
            if (item.classList.contains('active')) {
                numActiveItem = index;
            }
        });
    };

    const makeItNone = (arr) => {
        arr.forEach(item => item.style.display = 'none');
    };

    body.addEventListener('click', (event) => {
        const target = event.target;

        if (target.closest('.scheme-nav__item')) {
            schemeNavItems.forEach(item => item.classList.remove('active'));
            target.classList.add('active');

            checkState();

            makeItNone(schemeSlides);
            schemeSlides[numActiveItem].style.display = 'block';

            schemeDescriptionBlocks.forEach(item => item.classList.remove('visible-content-block'));
            schemeDescriptionBlocks[numActiveItem].classList.add('visible-content-block');
        }

        if (target.closest('#nav-arrow-scheme_left')) {
            const widthSlide = schemeList.children[counter].offsetWidth + 10;
            positionX -= widthSlide;
            schemeList.style.transform = `translateX(-${positionX}px)`;

            if (counter === 0) {
                document.querySelector('#nav-arrow-scheme_left').style.display = 'none';
            } else {
                document.querySelector('#nav-arrow-scheme_right').style.display = 'block';
                counter--;
            }
        }

        if (target.closest('#nav-arrow-scheme_right')) {
            const widthSlide = schemeList.children[counter].offsetWidth + 10;
            positionX += widthSlide;
            schemeList.style.transform = `translateX(-${positionX}px)`;

            if (counter === schemeList.children.length - 4) {
                document.querySelector('#nav-arrow-scheme_right').style.display = 'none';
            } else {
                document.querySelector('#nav-arrow-scheme_left').style.display = 'block';
                counter++;
            }
        }
    });

    document.querySelector('#nav-arrow-scheme_left').style.display = 'none';
};

export default scheme;