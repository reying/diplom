const repairTypes = () => {
    const repairTypesSection = document.getElementById('repair-types'),
        sliders = document.querySelector('.repair-types-slider'),
        navListRepair = document.querySelector('.nav-list-repair');

    document.querySelector('.slider-counter-content__total').textContent = sliders.children[0].children.length;
    document.querySelector('#nav-arrow-repair-left_base').style.display = 'none';

    let count = 0,
        counter = 0,
        positionX = 0;

    for (let i = 1; i < sliders.children.length; i++) {
        sliders.children[i].style.display = 'none';
    }

    repairTypesSection.addEventListener('click', (event) => {
        const target = event.target;

        if (target.closest('.repair-types-nav__item')) {
            document.querySelectorAll('.repair-types-nav__item').forEach(item => item.classList.remove('active'));
            target.closest('.repair-types-nav__item').classList.add('active');

            for (let item of sliders.children) { item.style.display = 'none'; }

            const num = target.closest('.repair-types-nav__item').classList[2].replace(/\D+/i, ''),
                slider = document.querySelector(`.types-repair${num}`);

            slider.style.display = 'block';
            for (let i = 0; i < slider.children.length; i++) {
                slider.children[i].style.display = 'none';
                if (i === 0) { slider.children[i].style.display = 'block'; }
            }
            document.querySelector('.slider-counter-content__current').firstChild.textContent = 1;
            document.querySelector('.slider-counter-content__total').textContent = slider.children.length;
            count = 0;
        }

        if (target.closest('.slider-arrow')) {
            let slider;

            const sliders = document.querySelector('.repair-types-slider').children;

            for (let item of sliders) {
                if (item.style.display !== 'none') { slider = item; }
            }

            for (let i = 1; i < slider.children.length; i++) {
                slider.children[i].style.display = 'none';
                slider.children[i].style.position = 'absolute';
                slider.children[i].style.top = 0;
            }

            if (target.closest('.slider-arrow_left')) {
                slider.children[count].style.display = 'none';

                if (count === 0) {
                    count = slider.children.length - 1;
                } else {
                    count--;
                }

                slider.children[count].style.display = 'block';
            }

            if (target.closest('.slider-arrow_right')) {
                slider.children[count].style.display = 'none';
                if (count === slider.children.length - 1) {
                    count = 0;
                } else {
                    count++;
                }
                slider.children[count].style.display = 'block';
            }

            document.querySelector('.slider-counter-content__current').firstChild.textContent = count + 1;
        }

        if (target.closest('#nav-arrow-repair-left_base')) {
            const widthSlide = navListRepair.children[counter].offsetWidth + 10;
            positionX -= widthSlide;
            navListRepair.style.transform = `translateX(-${positionX}px)`;

            if (counter === 0) {
                document.querySelector('#nav-arrow-repair-left_base').style.display = 'none';
            } else {
                document.querySelector('#nav-arrow-repair-right_base').style.display = 'block';
                counter--;
            }
        }

        if (target.closest('#nav-arrow-repair-right_base')) {

            const widthSlide = navListRepair.children[counter].offsetWidth + 10;
            positionX += widthSlide;
            navListRepair.style.transform = `translateX(-${positionX}px)`;

            if (counter === navListRepair.children.length - 4) {
                document.querySelector('#nav-arrow-repair-right_base').style.display = 'none';
            } else {
                document.querySelector('#nav-arrow-repair-left_base').style.display = 'block';
                counter++;
            }
        }
    });
};

export default repairTypes;