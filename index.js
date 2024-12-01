import {loginViews , scriptLoginViews } from './views/loginViews.js';
import addEventLogin from './assets/loginFunction/addEventLogin.js';
import { homeViews } from './views/homepageViews.js';


if(!localStorage.getItem('email')){
    document.body.appendChild(loginViews());
    document.body.appendChild(scriptLoginViews());
    addEventLogin();
}else{
    document.body.appendChild(homeViews());
}

 