const menu = () => {
    const menuIcon = document.querySelector('.menu__icon'),
        menu = document.querySelector('.popup-dialog-menu'),
        width = document.documentElement.clientWidth,
        height = document.documentElement.clientHeight;

    menuIcon.addEventListener('click', () => {
        if (width >= 576) {
            menu.style.right = '645px';
        } else {
            menu.style.top = `${height}px`;
        }
    });
};

export default menu;