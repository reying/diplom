const repairTypes = () => {
    const body = document.querySelector('body'),
        repairTypesSection = document.getElementById('repair-types'),
        sliders = document.querySelector('.repair-types-slider'),
        navListRepair = document.querySelector('.nav-list-repair'),
        popup = document.querySelector('.popup-repair-types'),
        popupNavListRepair = document.querySelector('.nav-list-popup-repair'),
        popupHeadDate = document.querySelector('.popup-repair-types-content__head-date'),
        switchInner = document.getElementById('switch-inner'),
        popupContentTable = document.querySelector('.popup-repair-types-content-table');

    document.querySelector('.slider-counter-content__total').textContent = sliders.children[0].children.length;
    document.querySelector('#nav-arrow-repair-left_base').style.display = 'none';

    let count = 0,
        counter = 0,
        positionX = 0,
        popupNavCounter = 0,
        popupNavPositionX = 0;

    for (let i = 1; i < sliders.children.length; i++) {
        sliders.children[i].style.display = 'none';
    }

    body.addEventListener('click', (event) => {
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
        if (target.closest('#repair-types') && target.closest('.slider-arrow')) {
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

        if (target.closest('.popup-repair-types-nav__item')) {
            for (let item of popupNavListRepair.children) { item.classList.remove('active'); }
            target.classList.add('active');
            switchInner.textContent = target.textContent;
            for (let i = 0; i < popupNavListRepair.children.length; i++) {
                if (popupNavListRepair.children[i].matches('.active')) {
                    for (let table of popupContentTable.children) {
                        table.style.display = 'none';
                    }
                    popupContentTable.children[i].style.display = 'block';
                }
            }
        }

        if (target.closest('.link-list-repair') && target.closest('a')) {
            for (let table of popupContentTable.children) {
                table.style.display = 'none';
            }
            popupContentTable.children[0].style.display = 'block';
            if (popupNavCounter === 0) { document.querySelector('#nav-arrow-popup-repair_left').style.display = 'none'; }
        }

        if (target.closest('#nav-arrow-popup-repair_left')) {
            const widthSlide = popupNavListRepair.children[popupNavCounter].offsetWidth + 10;
            popupNavPositionX -= widthSlide;
            popupNavListRepair.style.transform = `translateX(-${popupNavPositionX}px)`;

            if (popupNavCounter === 0) {
                document.querySelector('#nav-arrow-popup-repair_left').style.display = 'none';
            } else {
                document.querySelector('#nav-arrow-popup-repair_right').style.display = 'block';
                popupNavCounter--;
            }
        }
        if (target.closest('#nav-arrow-popup-repair_right')) {
            const widthSlide = popupNavListRepair.children[popupNavCounter].offsetWidth + 10;
            popupNavPositionX += widthSlide;
            popupNavListRepair.style.transform = `translateX(-${popupNavPositionX}px)`;

            if (popupNavCounter === popupNavListRepair.children.length - 4) {
                document.querySelector('#nav-arrow-popup-repair_right').style.display = 'none';
            } else {
                document.querySelector('#nav-arrow-popup-repair_left').style.display = 'block';
                popupNavCounter++;
            }
        }

    });

    // popup get data
    const getData = () => {
        return fetch('./db/db.json');
    };

    const promise = getData();

    promise.then((response) => {
            if (response.status !== 200) {
                throw new Error('status network not 200');
            }
            return response.json();
        })
        .then((data) => {
            const writingServicesList = () => {
                const servicesList = [];

                data.forEach(item => {
                    if (item.title) {
                        servicesList.push(item.title);
                    }
                });
                popupNavListRepair.innerHTML = '';

                servicesList.forEach((item, index) => {
                    const button = document.createElement('button');

                    button.classList.add('button_o', 'popup-repair-types-nav__item');
                    if (index === 0) {
                        button.classList.add('active');
                        switchInner.textContent = item;
                    }

                    button.textContent = item;

                    popupNavListRepair.append(button);
                });
            };

            const recordUpdateDate = () => {
                popupHeadDate.firstChild.textContent = data[0].date;
            };

            const writingPriceList = () => {
                popupContentTable.textContent = '';
                data.forEach(item => {
                    if (item.title) {
                        const table = document.createElement('table'),
                            tbody = document.createElement('tbody');

                        table.classList.add('popup-repair-types-content-table__list');

                        item.priceList.forEach((elem, index) => {
                            const tr = document.createElement('tr');
                            tr.classList.add('mobile-row');

                            if (index === 0) {
                                tr.classList.add('showHide');
                            }

                            tr.innerHTML = `
                            <td class="repair-types-name">${elem.typeService}</td>
                            <td class="repair-types-value">${elem.units}</td>
                            <td class="repair-types-value">${elem.cost} руб.</td>
                            `;

                            tbody.append(tr);
                        });

                        table.append(tbody);
                        popupContentTable.append(table);
                    }
                });
            };

            const init = () => {
                writingServicesList();
                recordUpdateDate();
                writingPriceList();
            };
            init();
        })
        .catch((error) => console.error(error));

};

export default repairTypes;