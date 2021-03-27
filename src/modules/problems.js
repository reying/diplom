const problems = () => {
    const body = document.querySelector('body');

    body.addEventListener('mouseover', (event) => {
        const target = event.target;

        if (target.closest('.problems-item__icon')) {
            const title = target.closest('.problems-item__icon').childNodes[1],
                item = target.closest('.problems-item');

            const offsetTitle = window.pageYOffset + title.getBoundingClientRect().top,
                offsetWindow = window.pageYOffset;

            if (offsetTitle < offsetWindow) {
                item.classList.add('problems-item__buttom');
                title.classList.add('problems-item-popup__buttom');
            }

            item.classList.add('active-item');
        }
    });

    body.addEventListener('mouseout', (event) => {
        const target = event.target;

        if (target.closest('.problems-item__icon')) {
            const title = target.closest('.problems-item__icon').childNodes[1],
                item = target.closest('.problems-item');

            if (title.classList.contains('problems-item-popup__buttom')) {
                item.classList.remove('problems-item__buttom');
                title.classList.remove('problems-item-popup__buttom');
            }

            item.classList.remove('active-item');
        }
    });

    const slider = () => {
        const main = document.querySelector('.problems-slider-wrap'),
            next = document.querySelector('#problems-arrow_right'),
            prev = document.querySelector('#problems-arrow_left'),
            slidesToShow = 3,
            widthSlide = Math.floor(100 / slidesToShow);
        let slides = document.querySelectorAll('.problems-slider__slide'),
            wrap = document.querySelector('.problems-slider');

        const render = () => {
            wrap.innerHTML = '';
            for (let i = 0; i < 3; i++) {
                slides[i].classList.remove('active-item');
                if (i === 1) { slides[i].classList.add('active-item'); }
                wrap.appendChild(slides[i]);
            }
        };

        const rightOffsetSlide = () => {
            const elem = slides[slides.length - 1].cloneNode(true);
            slides.splice(slides.length - 1);
            slides.unshift(elem);
        };

        const leftOffsetSlide = () => {
            const elem = slides[0].cloneNode(true);
            slides.splice(0, 1);
            slides.push(elem);
        };

        const addClass = () => {
            main.classList.add('probl-slider');
            wrap.classList.add('probl-slider__wrap');
            for (let item of slides) {
                item.classList.add('probl-slider__item');
            }
        };

        const addStyle = () => {
            let style = document.getElementById('problemsSliderCarousel-style');

            if (!style) {
                style = document.createElement('style');
                style.id = 'problemsSliderCarousel-style';
            }

            style.textContent = `
          .probl-slider {
              overflow: hidden !important;
          }
  
          .probl-slider__wrap {
              display: flex !important;
              transition: transform 0.5s !important;
              will-change: transform !important;
          }
  
          .probl-slider__item {
              display: flex !important;
              align-items: center;
              justify-content: center;
              flex: 0 0 ${widthSlide}% !important;
              width: 157px;
          }
          `;
            document.head.appendChild(style);
        };

        const prevSlider = () => {
            // wrap.style.transform = `translateX(${widthSlide}%)`;
            rightOffsetSlide();
            render();
        };

        const nextSlider = () => {
            // wrap.style.transform = `translateX(-${2*widthSlide}%)`;

            leftOffsetSlide();
            render();
        };

        const controlSlider = () => {
            prev.addEventListener('click', prevSlider);
            next.addEventListener('click', nextSlider);
        };

        const init = () => {
            addClass();
            addStyle();
            controlSlider();

            const newArr = [];
            slides.forEach(item => newArr.push(item));
            slides = [];
            newArr.forEach(item => slides.push(item));

            rightOffsetSlide();
            render();
        };

        init();
    };

    slider();

};

export default problems;