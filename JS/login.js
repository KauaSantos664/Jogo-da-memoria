const input = document.querySelector('.login__input');
const button = document.querySelector('.login__button');
const form = document.querySelector('.login-form');

const validateInput = ({ target }) => {
    if (target.value.length> 1) {
        button.removeAttribute('disabled'); 
     }else {
        button.setAttribute('disabled', '');
    }
}
 
input.addEventListener('input', validateInput);
