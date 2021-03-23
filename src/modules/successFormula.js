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
};

export default successFormula;