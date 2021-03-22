const menu = () => {
    const menuIcon = document.querySelector('.menu__icon'),
        menu = document.querySelector('.popup-dialog-menu');

    menuIcon.addEventListener('click', () => {
        menu.style.right = '639px';
    });
};

export default menu;