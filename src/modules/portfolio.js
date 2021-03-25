const portfolio = () => {
    const portfolioSection = document.getElementById('portfolio');

    let counter = 0,
        positionX = 0;

    portfolioSection.addEventListener('click', (event) => {
        const target = event.target;

        const portfolioSlider = document.querySelector('.portfolio-slider');

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
    });
};

export default portfolio;