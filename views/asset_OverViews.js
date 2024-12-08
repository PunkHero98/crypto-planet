function asset_overViewHTML(){
    return `
                    <div class="rightSide__personalAsset h-44 text-white stroke rounded-2xl">
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
                    <div class="rightSide__myAssets text-white stroke h-96 mt-10 rounded-2xl px-3">
                        <div class="myAssets__title flex  justify-between items-center pt-3 ">
                            <h2 class="text-3xl">My Assets</h2>
                            <label class="text-sm" for="">View All 350+ Coins</label>
                        </div>
                        <div class="myAssets__navbar flex items-center justify-between pt-8 text-lg text-slate-400">
                            <div class="navbar_leftmenu">
                                <label for="" class="navbar_Coinview">Coin View</label>
                                <label for="" class="navbar_Walletview ml-20" >Wallet View</label>
                            </div>
                            <div class="navbar_rightmenu ">
                                <label for="" class="navbar_lookupIcon mr-20"><i class="fa-solid fa-magnifying-glass"></i></label>
                                <input type="checkbox" id="navbar_hideCoins" class="mr-2">
                                <label for="navbar_hideCoins">Hide assets < 1 USD</label>
                            </div>
                        </div>
                        <div class="myAssets__smallNavbar flex justify-between pt-4 text-xs text-slate-400">
                            <div class="smallNavbar__coin">Coin <i class="fa-solid fa-sort"></i></div>
                            <div class="smallNavbar__amount ml-96">Amount <i class="fa-solid fa-sort"></i></div>
                            <div class="smallNavbar__coinPrice">Coin Price <i class="fa-solid fa-sort"></i></div>
                            <div class="smallNavbar__action">Action</div>
                        </div>
                        <div class="myAssets__contentArea"></div>
                    </div>
                    <div class="rightSide__marketViews text-white stroke h-44 mt-10 rounded-2xl">
                        <h2 class="marketViews__title text-3xl pl-3 pt-3">Recent Transactions</h2>
                    </div>
                `
}

function asset_overview (){
    const newcontent = document.createElement('div');
    newcontent.classList.add('mainBlock__rightSide' , 'w-11/12')
    newcontent.innerHTML = asset_overViewHTML();
    return newcontent;
}

export {asset_overview};