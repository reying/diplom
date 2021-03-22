const menu = () => {
    const menu = document.querySelector('.popup-dialog-menu'),
        width = document.documentElement.clientWidth,
        height = document.documentElement.clientHeight,
        body = document.querySelector('body');

    const scrollToBlock = (link, event) => {
        event.preventDefault();

        const idBlock = link.getAttribute('href').substring(1),
            block = document.getElementById(idBlock);

        if (idBlock) {
            block.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // go to the block
    body.addEventListener('click', (event) => {
        const target = event.target;

        // open the menu
        if (target.closest('.menu__icon')) {
            if (width >= 576) {
                menu.style.right = '645px';
            } else {
                menu.style.top = `${height}px`;
            }
        }

        const closeMenu = () => {
            if (width >= 576) {
                menu.style.right = '0px';
            } else {
                menu.style.top = '0px';
            }
        };

        if (target.closest('.close-menu')) { closeMenu(); }

        if (target.closest('.menu-link')) {
            closeMenu();
            scrollToBlock(target.closest('.menu-link'), event);
        }

        if (target.closest('.button-footer')) {
            scrollToBlock(target.closest('.button-footer').firstChild, event);
        }
    });
};

export default menu;