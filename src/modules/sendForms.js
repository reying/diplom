const sendForms = () => {
    const body = document.querySelector('body'),
        checkboxs = document.querySelectorAll('.checkbox__input'),
        popupThank = document.querySelector('.popup-thank'),
        popupConsultation = document.querySelector('.popup-consultation');

    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    };

    const sendData = (event, form) => {
        event.preventDefault();

        const formData = new FormData(form);
        let body = {};
        formData.forEach((val, key) => { body[key] = val; });

        postData(body)
            .then(response => {
                if (response.status !== 200) {
                    throw new Error('status network not 200');
                }
                popupConsultation.style.visibility = 'hidden';
                popupThank.style.visibility = 'visible';
                setTimeout(() => popupThank.style.visibility = 'hidden', 5000);
            })
            .catch(error => {
                console.error(error);
            });

        const formInputs = form.querySelectorAll('input');
        formInputs.forEach(item => item.value = '');
    };

    body.addEventListener('submit', (event) => {
        const target = event.target;

        if (target.closest('form')) {
            sendData(event, target.closest('form'));
        }

    });

    body.addEventListener('click', (event) => {
        const target = event.target;

        if (target.closest('.close-thank')) { popupThank.style.visibility = 'hidden'; }

        if (target.closest('form')) {
            const checkboxInput = target.closest('form').querySelector('.checkbox__input'),
                checkboxLabel = target.closest('form').querySelector('.checkbox__label');

            if (target.closest('.button') && checkboxInput.checked === false) {
                checkboxLabel.style.backgroundColor = 'red';
            }

            if (target.closest('.checkbox__label')) {
                if (checkboxInput.checked === false) {
                    checkboxLabel.style.backgroundColor = 'green';
                } else {
                    checkboxLabel.style.backgroundColor = 'transparent';
                }
            }
        }
    });

    checkboxs.forEach(item => item.required = true);
};

export default sendForms;