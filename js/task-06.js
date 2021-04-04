const validation = document.querySelector('#validation-input');

const validPassword = (e) => {
    if (Number(validation.dataset.length) === e.currentTarget.value.length) {
        validation.classList.remove('invalid');
        validation.classList.add('valid');
    }
    else {
        validation.classList.remove('valid');
        validation.classList.add('invalid');
        
    }
};

validation.addEventListener('blur', validPassword)