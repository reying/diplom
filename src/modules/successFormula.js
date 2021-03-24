const successFormula = () => {
    const body = document.querySelector('body');

    body.addEventListener('mouseover', (event) => {
        const target = event.target;

        if (target.matches('.formula-item__icon-inner-text')) {
            const title = target.parentNode.childNodes[1],
                item = target.closest('.formula-item');

            const offsetTitle = window.pageYOffset + title.getBoundingClientRect().top,
                offsetWindow = window.pageYOffset;

            if (offsetTitle < offsetWindow) {
                item.classList.add('formula-item__buttom');
                title.classList.add('formula-item-popup__buttom');
            }

            item.classList.add('active-item');
        }
    });

    body.addEventListener('mouseout', (event) => {
        const target = event.target;

        if (target.matches('.formula-item__icon-inner-text')) {
            const title = target.parentNode.childNodes[1],
                item = target.closest('.formula-item');

            if (title.classList.contains('formula-item-popup__buttom')) {
                item.classList.remove('formula-item__buttom');
                title.classList.remove('formula-item-popup__buttom');
            }

            item.classList.remove('active-item');
        }
    });

    class SliderCarousel {
        constructor({
            main,
            wrap,
            next,
            prev,
            infinity = false,
            position = 1,
            slidesToShow = 3,
            responsive = []
        }) {
            if (!main || !wrap) {
                console.warn('slider-carousel: Необходимо 2 свойства, "main" и "wrap"!');
            }
            this.main = document.querySelector(main);
            this.wrap = document.querySelector(wrap);
            this.slides = document.querySelector(wrap).children;
            this.next = document.querySelector(next);
            this.prev = document.querySelector(prev);
            this.slidesToShow = slidesToShow;
            this.options = {
                position,
                infinity,
                widthSlide: Math.floor(100 / this.slidesToShow),
                maxPosition: this.slides.length - this.slidesToShow
            };
            this.responsive = responsive;
        }

        init() {
            this.addClass();
            this.addStyle();

            if (this.prev && this.next) {
                this.controlSlider();
            }

            if (this.responsive) {
                this.responseInit();
            }
        }

        addClass() {
            this.main.classList.add('slider');
            this.wrap.classList.add('slider__wrap');
            for (let item of this.slides) {
                item.classList.add('slider__item');
            }
        }

        addStyle() {
            let style = document.getElementById('sliderCarousel-style');

            if (!style) {
                style = document.createElement('style');
                style.id = 'sliderCarousel-style';
            }

            style.textContent = `
            .slider {
                overflow: hidden !important;
            }
    
            .slider__wrap {
                display: flex !important;
                transition: transform 0.5s !important;
                will-change: transform !important;
            }
    
            .slider__item {
                display: flex !important;
                align-items: center;
                justify-content: center;
                /*flex: 0 0 ${this.options.widthSlide}% !important;*/
                width: 157px;
                margin: auto 0 !important;
            }
    
            .slider__prev,
            .slider__next {
                margin: 0 10px;
                border: 20px solid transparent;
                background: transparent;
            }
    
            .slider__prev {
                border-right-color: #19b5fe;
            }
    
            .slider__next {
                border-left-color: #19b5fe;
            }
    
            .slider__prev:hover,
            .slider__next:hover,
            .slider__prev:focus,
            .slider__next:focus {
                background: transparent;
                outline: transparent;
            }
            `;
            document.head.appendChild(style);
        }

        controlSlider() {
            this.prev.addEventListener('click', this.prevSlider.bind(this));
            this.next.addEventListener('click', this.nextSlider.bind(this));
        }

        prevSlider() {
            if (this.options.infinity || this.options.position > 0) {
                --this.options.position;
                if (this.options.position < 0) {
                    this.options.position = this.options.maxPosition;
                }
                this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
            }
        }

        nextSlider() {
            if (this.options.infinity || this.options.position < this.options.maxPosition) {
                ++this.options.position;
                if (this.options.position > this.options.maxPosition) {
                    this.options.position = 0;
                }
                this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
            }
        }

        responseInit() {
            const slidesToShowDefault = this.slidesToShow;
            const allResponse = this.responsive.map(item => item.breakpoint);
            const maxResponse = Math.max(...allResponse);

            const checkResponse = () => {
                const widthWindow = document.documentElement.clientWidth;
                if (widthWindow < maxResponse) {
                    for (let i = 0; i < allResponse.length; i++) {
                        if (widthWindow < allResponse[i]) {
                            this.slidesToShow = this.responsive[i].slidesToShow;
                            this.options.widthSlide = Math.floor(100 / this.slidesToShow);
                            this.addStyle();
                        }
                    }
                } else {
                    this.slidesToShow = slidesToShowDefault;
                    this.options.widthSlide = Math.floor(100 / this.slidesToShow);
                    this.addStyle();
                }
            };

            checkResponse();

            window.addEventListener('resize', checkResponse);
        }
    }

    const carousel = new SliderCarousel({
        main: '.formula-slider-wrap',
        wrap: '.formula-slider',
        next: '#formula-arrow_right',
        prev: '#formula-arrow_left',
        infinity: true,
    });
    carousel.init();



};

export default successFormula;