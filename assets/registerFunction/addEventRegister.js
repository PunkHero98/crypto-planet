import { validateEmail } from "../loginFunction/validateLogin.js";
import { checkPasswordStrength , isValidDate } from "./validateRegister.js";
import { loginViews , scriptLoginViews } from "../../views/loginViews.js";
import addEventLogin from "../loginFunction/addEventLogin.js";
function addEventRegister(){
    const elements = {
        page:  document.querySelector('.registerPage'),
        email: document.querySelector('.register_form__emailBlock input'),
        password: document.querySelector('.register_form__passwordBlock input'),
        confirmPassword: document.querySelector('.register_form__confirmBlock input'),
        country: document.querySelector('.register_form__countryBlock input'),
        phone: document.querySelector('.register_form__phoneBlock input'),
        doB: {
            day: document.querySelector('#DoB__register_day'),
            month: document.querySelector('#DoB__register_month'),
            year: document.querySelector('#DoB__register_year'),
        },
        emailCheckBtn: document.querySelector('.register_form__emailBlock input').nextElementSibling,
        showPassIcon: document.querySelector('.register_form__passwordBlock input').previousElementSibling,
        continueBtn: document.querySelector('.register__btnBlock button'),
        emailNotificationIcon: document.querySelector('.email_for_notification .fa'),
        passwordStrengthBar: document.querySelector('.password_for_notification .proccess_bar div'),
        passwordStrengthLabel: document.querySelector('.password_for_notification label'),
        passwordStrengthLabelSpan : document.querySelector('.password_for_notification label span'),
        backBtn: document.querySelector('label.btnBlock__back'),
        };
    elements.page.addEventListener('blur', (event) => {
        if (event.target.tagName === 'INPUT') {
            if (event.target.classList.contains('text-red-500') || event.target.value === "") {
                elements.continueBtn.setAttribute('disabled', 'true');
                return;
            }
        }
        elements.continueBtn.removeAttribute('disabled');
    }, true);

    elements.page.addEventListener('keydown' , (e) =>{
        const inputs = [
            elements.email , elements.password , elements.confirmPassword , elements.doB.day , elements.doB.month , elements.doB.year , elements.country , elements.phone 
        ]
        if(e.key === 'Tab'){
            e.preventDefault();
            const focusable = Array.from(inputs);
            const index = focusable.indexOf(document.activeElement);
            const nextIndex = (index + 1 ) % focusable.length;
            focusable[nextIndex].focus();
        }
    })
    elements.continueBtn.addEventListener('click' ,async function(){
        const doB = elements.doB.month.value+'-'+elements.doB.day.value+'-'+elements.doB.year.value;
        const data = {
            email: elements.email.value,
            password: elements.password.value,
            country: elements.country.value,
            dateOfBirth: doB,
            phone: elements.phone.value,
        }

        try{
            const result = await fetch('http://localhost:3000/register' ,{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if(!result.ok){
                throw new Error(`HTTP error! status: ${result.status}`);
            }
            const respone = await result.json();
            console.log(respone);
            if(!respone){
                return alert('Registration fail , please try again  !! ');
            }
            alert('Registration successfully !! back to login page in 3 seconds');
            setTimeout(() => {
                const scriptTag = document.querySelector('script[type=module]');

                scriptTag.insertAdjacentElement('beforeBegin' , loginViews());
                scriptTag.insertAdjacentElement('beforeBegin' , scriptLoginViews());
                document.querySelector('.registerPage').remove();
                addEventLogin(); 
            }, 2000);
        }catch(err){
            console.error('Error:', error);
            alert('Failed to submit form.');
        }
    })

    elements.email.addEventListener('blur' , function(){
        if(!validateEmail(this.value)){
            this.nextElementSibling.children[0].innerHTML = "Invalid Email";
            this.nextElementSibling.classList.remove('primary-text');
            this.nextElementSibling.classList.add('text-red-500');
            this.nextElementSibling.children[1].setAttribute('disabled' , 'true');
            this.nextElementSibling.children[1].classList.add('text-slate-400');
            this.nextElementSibling.children[1].classList.remove("text-white");
            return ;
        }
            this.nextElementSibling.children[1].removeAttribute('disabled');
            this.nextElementSibling.children[1].classList.remove('text-slate-400');
            this.nextElementSibling.children[1].classList.add("text-white");
            this.nextElementSibling.classList.remove('text-red-500');
            this.nextElementSibling.classList.add('primary-text');

    })

    elements.emailCheckBtn.addEventListener('click' , async function(e){
        e.preventDefault();
        elements.emailNotificationIcon.classList.remove('hidden');
        const data = {
            email: elements.email.value,
        }
        try{
            const result = await fetch('http://localhost:3000/register/validate_email' , {
                method: 'POST',
                headers:{
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(data),
            });
            if(!result.ok){
                throw new Error(`HTTP error! status: ${result.status}`);
            };
            const respone = await result.json();
            const intervalId = setInterval(() => {
                elements.emailNotificationIcon.classList.add('hidden');
            
                if (respone) {
                elements.emailCheckBtn.children[0].innerHTML = 'Email already existed';
                elements.emailCheckBtn.classList.remove('primary-text');
                elements.emailCheckBtn.classList.add('text-red-500');
                clearInterval(intervalId);
                return;
                }
            
                elements.emailCheckBtn.children[0].innerHTML = 'You can use this email';
                elements.emailCheckBtn.classList.remove('primary-text');
                elements.emailCheckBtn.classList.add('text-green-500');
                clearInterval(intervalId);
            }, 2000);
            console.log(respone);
        }catch(err){
            console.error('Error:', err);
            alert('Failed to submit form.');
        }
    });

    elements.password.addEventListener('keypress' , function(e){
        checkPasswordStrength(this.value , elements.passwordStrengthBar , elements.passwordStrengthLabel , elements.passwordStrengthLabelSpan);
    });
    elements.password.addEventListener('blur' , function(e){
        if(this.value.length <= 1){
            this.value = '';
            elements.passwordStrengthBar.classList.remove('w-[30%]','w-[60%]','w-[90%]' , 'bg-green-500' ,  'bg-yellow-500',  'bg-red-500');
            elements.passwordStrengthLabel.classList.remove('text-green-500' , 'text-yellow-500' , 'text-red-500');
            
            elements.passwordStrengthLabel.classList.add('text-white');
            elements.passwordStrengthLabelSpan.innerHTML = '---';
            return;
        }
        checkPasswordStrength(this.value , elements.passwordStrengthBar , elements.passwordStrengthLabel , elements.passwordStrengthLabelSpan);

    });


    elements.confirmPassword.addEventListener('blur' , function(){
        if(!(this.value === elements.password.value)){
            this.nextElementSibling.innerHTML = "The password not match";
            this.nextElementSibling.classList.remove('opacity-0');
            this.nextElementSibling.classList.add('text-red-500');
            return;
        }
        this.nextElementSibling.innerHTML = '----';
        this.nextElementSibling.classList.remove('text-red-500');
        this.nextElementSibling.classList.add('opacity-0');
    })

    elements.showPassIcon.addEventListener('click' , function(){
        if(elements.password.getAttribute('type') === 'password'){
            this.classList.remove('fa-eye-slash' , 'text-slate-400');
            this.classList.add('fa-eye' , 'text-white');
            elements.password.setAttribute('type' , 'text');
        }else{
            this.classList.add('fa-eye-slash' , 'text-slate-400');
            this.classList.remove('fa-eye' , 'text-white');
            elements.password.setAttribute('type' , 'password');
        }
    })

    elements.doB.year.addEventListener('blur' , function(){
        const day = parseInt(elements.doB.day.value, 10);
        const month = parseInt(elements.doB.month.value, 10);
        const year = parseInt(elements.doB.year.value, 10);

        if (isValidDate(year, month, day)) {
            this.parentElement.nextElementSibling.classList.remove('text-red-500');
            this.parentElement.nextElementSibling.classList.add('opacity-0');
            this.parentElement.nextElementSibling.innerHTML = '----';
        } else {
            this.parentElement.nextElementSibling.classList.add('text-red-500');
            this.parentElement.nextElementSibling.classList.remove('opacity-0');
            this.parentElement.nextElementSibling.innerHTML = 'Invalid Day';
        }
    })

    elements.backBtn.addEventListener('click' , function (){
        const scriptTag = document.querySelector('script[type=module]');

        scriptTag.insertAdjacentElement('beforeBegin' , loginViews());
        scriptTag.insertAdjacentElement('beforeBegin' , scriptLoginViews());
        document.querySelector('.registerPage').remove();
        addEventLogin();
    });


}

export default addEventRegister;