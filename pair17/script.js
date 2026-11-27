let form = document.querySelector('#register-form');
let userName = document.querySelector('#userName');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let confirmPassword = document.querySelector('#confirmPassword');
let terms = document.querySelector('#terms');
let results = document.querySelector('#results');


function showError(input, errorId, message){
    input.classList.remove('valid');
    input.classList.add('invalid');
    input.setAttribute('aria-invalid', 'true');
    document.querySelector('#errorId').textContent = message;
    return false;

}

function showSuccess(input, errorId){
    input.classList.remove('invalid');
    input.classList.add('valid');
    input.setAttribute('aria-invalid', 'false');
    document.querySelector(errorId).textContent = "";
}
function validateName(){
    if(userName.value.trim.length < 2){
        return showError(userName, '#userName-error', 'Введіть мін 2 символи');
    }
    return showSuccess(userName);
}
function validateEmail(){
    if(email.value.trim() === ''){
        return showError(email, '#email-error', 'Введіть коректну пошту')

    }
    return showSuccess(email);
}

function validatePassword(){
    if(password.value.trim().length < 8 || password.value.trim() === '' ){
        return showError(password, '#password-error', 'Пароль мінімум 8 символів')
    }
    return showSuccess(password);
}
function validateConfirmPassword(){
    if(confirmPassword.value.trim() === '' || confirmPassword !== password.value){
        return showError(confirmPassword, '#confirm-error', 'Паролі не співпадають')
    }
    return showSuccess(confirmPassword);

}

form.addEventListener('submit', function(event){
    event.preventDefault();
    result.textContent = '';
})