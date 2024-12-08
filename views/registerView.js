function generateRegisterHTML(){
    return `<div class="register flex items-center primary-bg justify-center h-screen font-serif">
        <div class="register-container stroke py-5 px-9 flex flex-col  w-5/12 h-4/6 rounded-[20px]">
            <div class="register_tittle mb-12">
                <h3 class="login-container__brand-name secondary-text text-xl cursor-default">CRYPTO PLANET</h3>
                <h2 class="login-container__title text-5xl text-white cursor-default">Register</h2>
            </div>
            <form action="http:localhost:3000/register" id="register_form" method="post" class="flex flex-wrap justify-between">
                <div class="register_form__emailBlock flex flex-col text-white w-5/12 mt-2">
                    <label for="email_register" class="mb-2 text-lg">Enter your Email</label>
                    <input type="text"  id="email_register" class=" stroke primary-bg px-4 rounded-[10px] h-12 text-sm" placeholder="Enter your email">
                    <label for="" class="email_for_notification text-sm mt-2 primary-text flex justify-between "><span>----------</span><button class="stroke text-xs text-slate-400 rounded px-4 py-1" disabled><i class="fa fa-refresh fa-spin mr-2 hidden"></i>Check</button></label>
                </div>
                <div class="register_form__DoBBlock flex flex-col text-white w-5/12 mt-2">
                    <label for="DoB_register" class="mb-2 text-lg">Date of Birth</label>
                    <div class="DoB_block flex gap-2 justify-between">
                        <input type="number" tabindex="3" id="DoB__register_day" min="1" max="31" class="stroke primary-bg px-4 rounded-[10px] h-12 w-4/12 text-base text-center" placeholder="DD">
                        <input type="number" tabindex="4" id="DoB__register_month" min="1" max="12" class="stroke primary-bg px-4 rounded-[10px] h-12 w-4/12 text-base text-center" placeholder="MM">
                        <input type="number" tabindex="5" id="DoB__register_year" min="1980" max="2100" class="stroke primary-bg px-4 rounded-[10px] h-12 w-4/12 text-base text-center" placeholder="YY">
                    </div>
                    <label for="" class="DoB_for_notification text-sm mt-2 text-red-500 opacity-0">Invalid Date</label>
                </div>
                <div class="register_form__passwordBlock flex flex-col text-white w-5/12 mt-2">
                    <label for="password_register" class="mb-2 text-lg">Enter your Password</label>
                    <i class="show_pass_icon fa-regular fa-eye-slash absolute top-[30.5rem] left-[54rem] text-slate-400"></i>
                    <input type="password" tabindex="1" id="password_register" class="stroke primary-bg px-4 rounded-[10px] h-12 text-sm" placeholder="Enter your email">
                    <div class="password_for_notification flex justify-between">
                        <div class="proccess_bar w-8/12 flex items-center">
                            <div class="bar bg-green-500 h-1 rounded ml-1"></div>
                        </div>
                        <label for="" class="password_check_label text-xs py-1"><i class="fa-solid fa-circle mr-2 "></i><span>---</span></label>
                    </div>
                </div>
                <div class="register_form__countryBlock flex flex-col text-white w-5/12 mt-2">
                    <label for="country_register" class="mb-2 text-lg">Country</label>
                    <input type="text" tabindex="6" id="country_register" class="stroke primary-bg px-4 rounded-[10px] h-12 text-sm" placeholder="Enter your email">
                    <label for="" class="country_for_notification text-sm mt-2 text-red-500 opacity-0">You can use this email</label>
                </div>
                <div class="register_form__confirmBlock flex flex-col text-white w-5/12 mt-2">
                    <label for="confirm_pass_register" class="mb-2 text-lg">Confirm your Password</label>
                    <input type="password" tabindex="2" id="confirm_pass_register" class="stroke primary-bg px-4 rounded-[10px] h-12 text-sm" placeholder="Enter your email">
                    <label for="" class="confirm_for_notification text-sm mt-2 text-red-500 opacity-0">--------</label>
                </div>
                <div class="register_form__phoneBlock flex flex-col text-white w-5/12 mt-2">
                    <label for="phone_register" class="mb-2 text-lg">Phone Number</label>
                    <input type="text" tabindex="7" id="phone_register" class="stroke primary-bg px-4 rounded-[10px] h-12 text-sm" placeholder="Enter your email">
                    <label for="" class="phone_for_notification text-sm mt-2 text-red-500 opacity-0">You can use this email</label>
                </div>
            </form>
            <div class="register__btnBlock topStroke flex justify-between mt-2 py-6">
                <label for="" tabindex="-1" class="btnBlock__back text-white rounded-[10px] w-5/12 h-14 text-2xl font-bold flex justify-center items-center px-4">Back</label>
                <button tabindex="8" class="login-container__submit-Btn secondary-bg stroke active:border-[#CFAF30] active:bg-[#181A20] active:text-[#CFAF30] rounded-[10px] w-5/12 h-14 text-3xl font-bold" disabled>Continue</button>
            </div>
        </div>
    </div>`
};

function registerViews (){
    const newcontent = document.createElement("div");
    newcontent.classList.add('registerPage');
    newcontent.innerHTML = generateRegisterHTML();
    return newcontent;
}

export {registerViews};