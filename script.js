let pw1Input = document.querySelector('#password-1');
let pw2Input = document.querySelector('#password-2');

const controlPasswordError = (pw1Input,pw2Input) => {
    if (pw1Input.value !== pw2Input.value) {
        pw1Input.classList.add('input-error');
        pw2Input.classList.add('input-error');
        let referenceElement = document.querySelector('.form-group.password-1 > p')
        let errorMessage = document.getElementById('password-error-message');
        if (!errorMessage) {
            errorMessage = document.createElement('span');
            errorMessage.id = 'password-error-message';
            errorMessage.innerHTML = '* Passwords do not match';
            referenceElement.insertAdjacentElement('afterend', errorMessage);
        }
    } else {
        let errorMessage = document.getElementById('password-error-message');
        pw1Input.classList.remove('input-error');
        pw2Input.classList.remove('input-error');
        errorMessage.remove();
    }
}

pw1Input.addEventListener('input', function(event) {
    controlPasswordError(pw1Input,pw2Input);
});

pw2Input.addEventListener('input', function(event) {
    controlPasswordError(pw1Input,pw2Input);
});