const portfolio = () => {
    const portfolioSection = document.getElementById('portfolio'),
        portfolioSlider = document.querySelector('.portfolio-slider'),
        popupPortfolio = document.querySelector('.popup-portfolio'),
        popupPortfolioSlider = document.querySelector('.popup-portfolio-slider'),
        popupPortfolioSliderWrap = document.querySelector('.popup-portfolio-slider-wrap'),
        popupLeft = document.getElementById('popup_portfolio_left'),
        popupRight = document.getElementById('popup_portfolio_right'),
        sliderTotal = document.querySelector('#popup-portfolio-counter').querySelector('.slider-counter-content__total'),
        sliderCurrent = document.querySelector('#popup-portfolio-counter').querySelector('.slider-counter-content__current'),
        popupTexts = document.querySelectorAll('.popup-portfolio-text');

    let counter = 0,
        positionX = 0,
        count = 0;

    popupPortfolioSliderWrap.style.overflow = 'hidden';
    popupPortfolioSlider.style.display = 'flex';
    for (let item of popupPortfolioSlider.children) {
        item.style.display = 'flex';
        item.style.flex = '0 0 100%';
    }

    portfolioSection.addEventListener('click', (event) => {
        const target = event.target;

        if (target.closest('#portfolio-arrow_right')) {
            const widthSlide = portfolioSlider.children[counter].offsetWidth;
            positionX += widthSlide;

            for (let item of portfolioSlider.children) {
                item.style.transform = `translateX(-${positionX}px)`;
            }

            if (counter === portfolioSlider.children.length - 4) {
                document.querySelector('#portfolio-arrow_right').style.display = 'none';
            } else {
                document.querySelector('#portfolio-arrow_left').style.display = 'flex';
                counter++;
            }
        }

        if (target.closest('#portfolio-arrow_left')) {
            const widthSlide = portfolioSlider.children[counter].offsetWidth;
            positionX -= widthSlide;

            for (let item of portfolioSlider.children) {
                item.style.transform = `translateX(-${positionX}px)`;
            }

            if (counter === 0) {
                document.querySelector('#portfolio-arrow_left').style.display = 'none';
            } else {
                document.querySelector('#portfolio-arrow_right').style.display = 'flex';
                counter--;
            }
        }

        if (target.closest('.portfolio-slider__slide-frame')) {
            popupPortfolio.style.visibility = 'visible';
            popupLeft.style.display = 'none';
            sliderTotal.textContent = popupPortfolioSlider.children.length;
            popupTexts[0].style.display = 'block';
        }
    });

    popupPortfolio.addEventListener('click', (event) => {
        const target = event.target;

        if (target.closest('.close')) {
            popupPortfolio.style.visibility = 'hidden';
        }

        const showText = (num) => {
            popupTexts.forEach(item => {
                item.style.display = 'none';
            });
            popupTexts[num - 1].style.display = 'block';
        };

        if (target.closest('.popup-arrow_right')) {
            if (count === popupPortfolioSlider.children.length - 2) { popupRight.style.display = 'none'; }
            sliderCurrent.textContent = count + 2;
            showText(count + 2);
            popupPortfolioSlider.children[count].style.display = 'none';
            ++count;
            popupLeft.style.display = 'block';
        }

        if (target.closest('#popup_portfolio_left')) {
            if (count === 1) { popupLeft.style.display = 'none'; }
            sliderCurrent.textContent = count;
            showText(count);
            --count;
            popupRight.style.display = 'block';
            popupPortfolioSlider.children[count].style.display = 'block';
        }
    });
};

export default portfolio;