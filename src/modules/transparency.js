const transparency = () => {
    const transparencySection = document.getElementById('transparency'),
        transparencySlides = document.querySelectorAll('.transparency-item');

    let count = 0;

    transparencySection.addEventListener('click', (event) => {
        const target = event.target;

        const checkFlex = () => {
            transparencySlides.forEach((item, index) => {
                if (item.style.display === 'flex') {
                    item.style.display = 'none';
                    count = index;
                }
            });
        };

        if (target.closest('#transparency-arrow_left')) {
            checkFlex();

            if (count === 0) {
                transparencySlides[transparencySlides.length - 1].style.display = 'flex';
            } else {
                transparencySlides[count - 1].style.display = 'flex';
            }
        }

        if (target.closest('#transparency-arrow_right')) {
            checkFlex();

            if (count === transparencySlides.length - 1) {
                transparencySlides[0].style.display = 'flex';
            } else {
                transparencySlides[count + 1].style.display = 'flex';
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