// script for changing password attribute
let password= document.querySelector('#password');
let togglePassword= document.querySelector('#togglePassword');

    togglePassword.addEventListener('click', (e) =>{
        e.preventDefault();
        let type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);

        this.classList.toggle('fa-eye-slash');
    });