
function generateScript(){
    return `
    function onFoCus_Password(){
            const password = document.querySelector('#password-input');
            password.classList.remove('red-stroke');
            password.classList.add('stroke');
            password.nextElementSibling.nextElementSibling.classList.add('opacity-0');
        }

        function onFoCus_Email(){
            const email = document.querySelector('#email-input');
            email.classList.remove('red-stroke');
            email.classList.add('stroke');
            email.nextElementSibling.classList.add('opacity-0');
        }`
}
function generateHTML() {
    return `
    <div class="login flex items-center primary-bg justify-center h-screen font-serif">
        <div class="login-container stroke py-5 px-9 flex flex-col justify-between w-3/12 h-4/6 rounded-[20px]">
            <h3 class="login-container__brand-name secondary-text text-xl cursor-default">CRYPTO PLANET</h3>
            <h2 class="login-container__title text-5xl text-white cursor-default">Login</h2>
            <form id="login-form" class="flex flex-col justify-between h-1/2">
                <div class="login-container__email-Block flex flex-col text-white">
                    <label for="email-input" class="email-Block__label mb-2 text-lg">Email/Phone Number</label>
                    <input id="email-input" type="text" onfocus="onFoCus_Email()" class="stroke primary-bg px-4 rounded-[10px] h-12 text-sm" placeholder="Enter your email">
                    <label id="notification-email" class="text-sm mt-2 text-right text-red-500 opacity-0">Invalid Email</label>
                </div>
                <div class="login-container__password-Block flex flex-col text-white">
                    <label for="password-input" class="password-Block__label mb-2 text-lg">Password</label>
                    <input id="password-input" type="password" onfocus="onFoCus_Password()" class="stroke primary-bg px-4 rounded-[10px] h-12 text-sm" placeholder="Enter your password"><i id="showPassword-icon" class="fa-solid fa-eye-slash absolute right-[48.5rem] top-[30.5rem] text-xl secondary-text"></i>
                    <label id="notification-password" class="text-sm mt-2 mb-2 text-right text-red-500 opacity-0">Invalid password</label>
                </div>
                <button onsubmit="" class="login-container__submit-Btn secondary-bg stroke active:border-[#CFAF30] active:bg-[#181A20] active:text-[#CFAF30] rounded-[10px] h-14 text-3xl font-bold">Continue</button>
            </form>
            <label for="" class="login-container__middle-SerperationBlock  text-white text-3xl text-center mb-[-10px] mt-[-10px] my-4">or</label>
            <button class="login-container__Signup-Btn primary-bg stroke active:border-white  rounded-[10px] h-14 text-white text-xl font-bold">Sign Up</button>
        </div>
    </div>`;
  }

function scriptLoginViews(){
    const newcontent = document.createElement("script");
    newcontent.innerHTML = generateScript();
    return newcontent;
  }

function loginViews (){
    const newcontent = document.createElement("div");
    newcontent.classList.add('loginPage');
    newcontent.innerHTML = generateHTML();
    return newcontent;
}

export {loginViews , scriptLoginViews};