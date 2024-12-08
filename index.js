import { loginViews ,scriptLoginViews } from './views/loginViews.js';
import addEventLogin from './assets/loginFunction/addEventLogin.js';
import { homeViews } from './views/homepageViews.js';
const scriptTag = document.querySelector('script[type=module]')
if(!localStorage.getItem('email')){
    scriptTag.insertAdjacentElement('beforeBegin' , loginViews());
    scriptTag.insertAdjacentElement('beforeBegin' , scriptLoginViews())
    addEventLogin();
}else{
    document.body.appendChild(homeViews());
}
