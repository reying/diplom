const showNumbers = () => {
    const arrow = document.querySelector('.header-contacts__arrow'),
        numberAccord = document.querySelector('.header-contacts__phone-number-accord'),
        links = numberAccord.querySelectorAll('a');

    arrow.addEventListener('click', () => {
        numberAccord.style.top = '30px';
        links.forEach(item => item.style.opacity = 1);
    });
};

export default showNumbers;