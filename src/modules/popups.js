const popups = () => {
    const body = document.querySelector('body'),
        repairTypesSection = document.querySelector('.popup-repair-types');

    body.addEventListener('click', (event) => {
        const target = event.target;

        // if (!target.closest('.popup-dialog-repair-types') && getComputedStyle(repairTypesSection).visibility === 'visible') {
        //     repairTypesSection.style.visibility = 'hidden';
        // }

        if (target.closest('.link-list-menu') || target.closest('.link-list-repair')) {
            if (target.closest('a')) {
                event.preventDefault();
                repairTypesSection.style.visibility = 'visible';
            }
        }

        if (target.closest('.popup-repair-types') && target.closest('.close')) {
            repairTypesSection.style.visibility = 'hidden';
        }

    });
};

export default popups;