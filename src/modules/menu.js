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

    const scrollToBlock = (link, event) => {
        event.preventDefault();
        const idBlock = link.getAttribute('href').substring(1),
            block = document.getElementById(idBlock);

        block.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    // go to the block
    body.addEventListener('click', (event) => {
        const target = event.target;

        if (target.matches('a[href*="#"]')) {
            if (width >= 576) {
                menu.style.right = '0px';
            } else {
                menu.style.top = '0px';
            }
            scrollToBlock(target, event);
        }

        if (target.matches('.button-footer')) {
            const link = target.firstChild;
            scrollToBlock(link, event);
        }
    });
};

export default menu;