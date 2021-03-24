const repairTypes = () => {
    const repairTypesSection = document.getElementById('repair-types'),
        slider = document.querySelector('.repair-types-slider');

    // console.log(slider.children);

    // for (let i=1;i<)

    // for (let item of slider.children) {
    //     item.style.display = 'none';
    // }


    repairTypesSection.addEventListener('click', (event) => {
        const target = event.target;

        if (target.closest('.repair-types-nav__item')) {
            document.querySelectorAll('.repair-types-nav__item').forEach(item => item.classList.remove('active'));
            target.closest('.repair-types-nav__item').classList.add('active');
        }
    });
};

export default repairTypes;