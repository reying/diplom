const menu = () => {
    const menuIcon = document.querySelector('.menu__icon'),
        menu = document.querySelector('.popup-dialog-menu'),
        width = document.documentElement.clientWidth,
        height = document.documentElement.clientHeight,
        body = document.querySelector('body');

    // opening the menu
    menuIcon.addEventListener('click', () => {
        if (width >= 576) {
            menu.style.right = '645px';
        } else {
            menu.style.top = `${height}px`;
        }
    });

    const scrollToBlock = (target, event) => {
        event.preventDefault();

        const link = target.firstChild,
            idBlock = link.getAttribute('href').substring(1),
            block = document.getElementById(idBlock);

        block.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    // go to the block
    body.addEventListener('click', (event) => {
        const target = event.target;

        if (target.closest('.popup-menu-nav__item')) {
            if (width >= 576) {
                menu.style.right = '0px';
            } else {
                menu.style.top = '0px';
            }
            scrollToBlock(target.closest('.popup-menu-nav__item'), event);
        }

        if (target.closest('.button-footer')) {
            scrollToBlock(target.closest('.button-footer'), event);
        }
    });
};

export default menu;