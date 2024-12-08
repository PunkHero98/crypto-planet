function dashboardHTML(){
    return `  <div class="rightSide__personalInfo text-white flex items-center">
                        <img src="./img/cat.jpg" class="w-24 h-24 rounded-2xl" alt="">
                        <div class="personalInfo_name h-24 flex flex-col justify-between ml-10 pb-2">
                            <label for="" class="name__title text-2xl">Name</label>
                            <label for="" class="name__actualName">Lam Quang Huy</label>
                        </div>
                        <div class="personalInfo__otherInfo flex h-24 pl-20">
                            <div class="otherInfo_uid h-18 flex flex-col pt-1 pl-20 gap-2">
                                <label for="" class="uid_up text-slate-500">UID</label>
                                <label for="" class="uid_down ">12341231</label>
                            </div>
                            <div class="otherInfo_vip h-18 flex flex-col pt-1 pl-20 gap-2">
                                <label for="" class="vip_up text-slate-500">VIP Level</label>
                                <label for="" class="vip_down ">2</label>
                            </div>
                            <div class="otherInfo_following h-18 flex flex-col pt-1 pl-20 gap-2">
                                <label for="" class="following_up text-slate-500">Following</label>
                                <label for="" class="following_down ">0</label>
                            </div>
                            <div class="otherInfo_follower h-18 flex flex-col pt-1 pl-20 gap-2">
                                <label for="" class="follower_up text-slate-500">Follower</label>
                                <label for="" class="follower_down ">0</label>
                            </div>
                        </div>
                    </div>
                    <div class="rightSide__personalAsset h-44 mt-10 text-white stroke rounded-2xl">
                        <div class="personalAsset__up flex justify-between items-center pl-3 pt-3">
                            <label for="" class="up__title text-2xl">Estimated Balance</label>
                            <div class="up__btn w-3/12 flex justify-between mr-12 text-center">
                                <label for="" class="up__btn_deposit lighter-bg w-24 rounded-lg">Desposit</label>
                                <label for="" class="up__btn_deposit lighter-bg w-24 rounded-lg">Withdraw</label>
                                <label for="" class="up__btn_deposit lighter-bg w-24 rounded-lg">Cash In</label>
                            </div>
                        </div>
                        <div class="personalAsset__down pl-3">
                            <label for="" class="personalAsset__down_num text-4xl font-sans mr-2">0.00</label>
                            <label for="" class="personalAsset__down_currency  stroke rounded-md pl-2 pr-5 text-base text-slate-500">BTC</label>
                        </div>
                    </div>
                    <div class="rightSide__marketViews text-white stroke h-96 mt-10 rounded-2xl">
                        <h2 class="marketViews__title text-4xl pl-3 pt-3">Markets</h2>
                        <div class="marketViews__navbar pl-3 pt-2 text-lg flex justify-between w-2/3 text-slate-400">
                            <label for="" class="navbar__holding flex hover:text-white">Holding</label>
                            <label for="" class="navbar__hot flex hover:text-white">Hot</label>
                            <label for="" class="navbar__new flex hover:text-white">New Listing</label>
                            <label for="" class="navbar__favorite flex hover:text-white">Favorite</label>
                            <label for="" class="navbar__top flex hover:text-white">Top Gainers</label>
                        </div>
                        <div class="marketViews__lowernavbar text-xs text-slate-400 pl-3 pr-8 pt-4 flex justify-between">
                            <label for="" class="lowernavbar__popular hover:text-white ">Popular Coins<i class="fa-solid fa-sort ml-2 cursor-pointer hover:text-white"></i></label>
                            <label for="" class="lowernavbar__amount hover:text-white">Amount<i class="fa-solid fa-sort ml-2 cursor-pointer hover:text-white"></i></label>
                            <label for="" class="lowernavbar__coin hover:text-white">Coin Price<i class="fa-solid fa-sort ml-2 cursor-pointer hover:text-white"></i></label>
                            <label for="" class="lowernavbar__growth hover:text-white">Growth (last 3 year)<i class="fa-solid fa-sort ml-2 cursor-pointer hover:text-white"></i></label>
                            <label for="" class="lowernavbar__popular hover:text-white">Action<i class="fa-solid fa-sort ml-2 cursor-pointer hover:text-white"></i></label>
                        </div>
                    </div>
                    <div class="rightSide__bottom text-white flex flex-row mt-10 gap-12">
                        <div class="bottom__Square stroke flex flex-col rounded-2xl w-2/5 h-auto flex-1">
                            <h2 class="Square__title text-5xl ml-4 mt-4">Square</h2>
                            <div class="Square__main mt-4 ">
                                <div class="main__person flex justify-between items-center m-4 px-4 py-4 stroke rounded-2xl">
                                    <img src="./img/cat.jpg" class="w-32 h-32 rounded-3xl" alt="">
                                    <div class="person_name flex flex-col mr-80 h-32 justify-between">
                                        <label for="" class="text-2xl">Huy Lam</label>
                                        <label for="">Trader</label>
                                    </div>
                                    <label for="" class="w-20 rounded-xl stroke-bg text-center text-sm py-1">follow</label>
                                </div>
                            </div>
                        </div>
                        <div class="bottom__announc w-3/5 stroke rounded-2xl h-auto flex-1">
                            <h2>Announcements</h2>
                        </div>
                    </div>
                `
}

function dashboard (){
    const newcontent = document.createElement('div');
    newcontent.classList.add('mainBlock__rightSide' , 'w-11/12')
    newcontent.innerHTML = dashboardHTML();
    return newcontent;
}

export {dashboard};