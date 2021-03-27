const popups = () => {
    const body = document.querySelector('body'),
        repairTypesSection = document.querySelector('.popup-repair-types'),
        privacySection = document.querySelector('.popup-privacy'),
        consultationSection = document.querySelector('.popup-consultation');

    body.addEventListener('click', (event) => {
        const target = event.target;

        if (target.closest('.link-list-repair')) {
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

        // popup-consultation
        if (target.closest('.button_wide')) {
            consultationSection.style.visibility = 'visible';
        }
        if (target.closest('.popup-consultation') && target.closest('.close')) {
            consultationSection.style.visibility = 'hidden';
        }

    });
};

export default popups;