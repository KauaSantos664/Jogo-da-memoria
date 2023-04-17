const input = document.querySelector('.login__input');
const button = document.querySelector('.login__button');


const validateInput = ({ target }) => {
    if (target.value.length> 1) {
        button.removeAttribute('disabled'); 
     }else {
        button.setAttribute('disabled', '');
    }
}

