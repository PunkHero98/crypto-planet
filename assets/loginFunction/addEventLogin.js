import { validateEmail , validateLogin } from "./validateLogin.js";

export default function addEventLogin(){
    document.querySelector('#login-form').addEventListener('submit' , (event)=>{
        event.preventDefault();
        const email = document.querySelector('#email-input');
        const password = document.querySelector('#password-input');
        if(!validateEmail(email.value)){
            email.classList.remove('stroke');
            email.classList.add('red-stroke');
            email.nextElementSibling.classList.remove('opacity-0');
            return;
        }
        validateLogin(email , password);
    })
    
    document.querySelector('#showPassword-icon').addEventListener('click' , ()=>{
        const password = document.querySelector('#password-input');
        if(password.getAttribute('type') === 'password'){
            password.nextElementSibling.classList.remove('fa-eye-slash');
            password.nextElementSibling.classList.add('fa-eye');
            password.setAttribute('type' , 'text');
        }else{
            password.nextElementSibling.classList.remove('fa-eye');
            password.nextElementSibling.classList.add('fa-eye-slash');
            password.setAttribute('type' , 'password');
        }
    })
}