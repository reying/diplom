const popups = () => {
    const body = document.querySelector('body'),
        repairTypesSection = document.querySelector('.popup-repair-types'),
        privacySection = document.querySelector('.popup-privacy');

    body.addEventListener('click', (event) => {
        const target = event.target;

        // popup-repair-types
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

        // popup-privacy
        if (target.matches('.link-privacy')) {
            privacySection.style.visibility = 'visible';
        }

        if (target.closest('.popup-privacy') && target.closest('.close')) {
            privacySection.style.visibility = 'hidden';
        }



    });
};

export default popups;