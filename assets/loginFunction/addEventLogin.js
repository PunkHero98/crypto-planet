import { fetchLogin, validateEmail } from "./validateLogin.js";
import { registerViews } from "../../views/registerView.js";
import addEventRegister from "../registerFunction/addEventRegister.js";
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
        fetchLogin(email.value , password.value);
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

    document.querySelector('.login-container__Signup-Btn').addEventListener('click' , function(){
        const scriptTag = document.querySelector('script[type=module]');

        scriptTag.insertAdjacentElement('beforeBegin' , registerViews());
        document.querySelector('script.login_script').remove();
        document.querySelector('.loginPage').remove();
        addEventRegister();
    })
}