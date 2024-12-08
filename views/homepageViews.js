function generateHome(){
    return `<div class="homepage-container primary-bg h-full w-full px-6 py-5 font-serif">
            <div class="homepage-container__navbar flex text-white justify-between items-center">
                <div class="navbar__brandblock">
                    <h1 class="secondary-text text-3xl">CRYPTO PLANET</h1>
                </div>
                <div class="navbar__main-menu w-2/6 mr-96 flex justify-between items-center">
                    <a href="" class="main-menu_buy">Buy Crypto</a>
                    <a href="" class="main-menu_market">Markets</a>
                    <a href="" class="main-menu_trade">Trade</a>
                    <a href="" class="main-menu_earn">Earn</a>
                    <a href="" class="main-menu_square">Square</a>
                    <a href="" class="main-menu_more">More</a>
                </div>
                <div class="navbar__rightNav w-1/6 flex justify-between items-center text-2xl">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <label for="" class="rightNav_deposit flex primary-text text-lg w-28 h-9 justify-center items-center rounded-xl secondary-bg font-semibold">Desposit</label>
                    <i class="fa-solid fa-circle-user"></i>
                    <i class="fa-solid fa-moon"></i>
                    <i class="fa-solid fa-globe"></i>
                </div>
            </div>
            <div class="homepage-container__mainBlock flex h-5/6 mt-14">
                <div class="mainBlock__leftSide text-slate-400 py-8 text-xl w-1/6 flex flex-col gap-8">
                    <label for="" class="leftSide__dashboard text-white flex items-center hover:bg-[#2B3139] rounded-xl w-4/6 h-10 pl-3 cursor-pointer">Dasboard</label>
                    <label for="" class="leftSide__assets flex items-center hover:bg-[#2B3139] rounded-xl w-4/6 h-10 pl-3 cursor-pointer">Assets</label>
                    <ul class="asset__items  my-[-1rem] text-base  flex flex-col gap-4 hidden cursor-pointer">
                        <li class="hover:bg-[#2B3139] border-custom w-3/4 py-1 pl-6 ">Overview</li>
                        <li class="hover:bg-[#2B3139] border-custom w-3/4 py-1 pl-6 ">Spot</li>
                        <li class="hover:bg-[#2B3139] border-custom w-3/4 py-1 pl-6 ">Margin</li>
                    </ul>
                    <label for="" class="leftSide__orders flex items-center hover:bg-[#2B3139] rounded-xl w-4/6 h-10 pl-3 cursor-pointer">Orders</label>
                    <ul class="order__items  my-[-1rem] text-base flex flex-col gap-4 hidden cursor-pointer">
                        <li class="hover:bg-[#2B3139] border-custom w-3/4 py-1 pl-6 ">Spot Order</li>
                    </ul>
                    <label for="" class="leftSide__account flex items-center hover:bg-[#2B3139] rounded-xl w-4/6 h-10 pl-3 cursor-pointer">Account</label>
                    <ul class="account__items  my-[-1rem] text-base  flex flex-col gap-4 hidden cursor-pointer">
                        <li class="hover:bg-[#2B3139] border-custom w-3/4 py-1 pl-6 ">Identification</li>
                        <li class="hover:bg-[#2B3139] border-custom w-3/4 py-1 pl-6 ">Account Statement</li>
                        <li class="hover:bg-[#2B3139] border-custom w-3/4 py-1 pl-6 ">Financial Reports</li>
                    </ul>
                    <label for="" class="leftSide__setting flex items-center hover:bg-[#2B3139] rounded-xl w-4/6 h-10 pl-3 cursor-pointer">Setting</label>
                </div>
                
            </div>
        </div>`
}

function homeViews(){
    const newcontent = document.createElement("div");
    newcontent.classList.add('homepage');
    newcontent.innerHTML = generateHome();
    return newcontent;
}
export {homeViews};