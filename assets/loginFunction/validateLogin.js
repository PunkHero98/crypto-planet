import { homeViews } from "../../views/homepageViews.js";
import homepageFunction from "../homepageFunction/mainFunction/index.js";
const scriptTag = document.querySelector('script[type=module]')

function validateEmail(email){
    const emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return emailPattern.test(email);
}

function successLogin(obj){
    if(!obj){
        alert('Email or Password is Incorrect !!!');
        return;
    }
    document.querySelector('.loginPage' ,).remove();
    scriptTag.insertAdjacentElement('beforebegin' , homeViews())
    setTimeout (() =>{
        const clicked  = document.querySelector('.leftSide__dashboard');
        clicked?.click();
    } , 100)
    homepageFunction();
}

async function fetchLogin (email , password){
    const user = {
        email: email,
        password: password,
    };

    try{
        console.log(JSON.stringify(user))
        const respone = await fetch('http://localhost:3000/login' , {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
        if(!respone.ok){
            throw new Error(`HTTP error! status: ${respone.status}`);
        }
        const result = await respone.json();
        successLogin(result);
    }catch(err){
        console.error('Error:', err);
        alert('Failed to submit form.');
    }
}
export {validateEmail  , fetchLogin};