import { user } from "../database.js";
import { homeViews } from "../../views/homepageViews.js";
function validateEmail(email){
    const emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return emailPattern.test(email);
}

function validateLogin(email , password){
    if(!(email.value === user.email)){
        password.classList.remove('stroke');
        password.classList.add('red-stroke');
        password.nextElementSibling.classList.remove('opacity-0');
        password.nextElementSibling.innerHTML = 'Wrong Email';
        return;
    }
    if(!(password.value === user.password)){
        password.classList.remove('stroke');
        password.classList.add('red-stroke');
        password.nextElementSibling.nextElementSibling.classList.remove('opacity-0');
        password.nextElementSibling.nextElementSibling.innerHTML = 'Wrong Password';
        return;
    }
    document.querySelector('.loginPage').remove();
    document.body.appendChild(homeViews());
}

export {validateEmail , validateLogin};