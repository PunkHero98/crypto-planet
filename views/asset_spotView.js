function asset_spotHTML(){
    return `
                    <div class="rightSide__spotAssets h-44 text-white stroke rounded-2xl">
                        <div class="spotAssets__up flex justify-between items-center pl-3 pt-3">
                            <label for="" class="up__title text-2xl">Estimated Balance</label>
                            <div class="up__btn w-3/12 flex justify-between mr-12 text-center">
                                <label for="" class="up__btn_deposit lighter-bg w-24 rounded-lg">Desposit</label>
                                <label for="" class="up__btn_deposit lighter-bg w-24 rounded-lg">Withdraw</label>
                                <label for="" class="up__btn_deposit lighter-bg w-24 rounded-lg">Cash In</label>
                            </div>
                        </div>
                        <div class="spotAssets__down pl-3">
                            <label for="" class="spotAssets__down_num text-4xl font-sans mr-2">0.00</label>
                            <label for="" class="spotAssets__down_currency  stroke rounded-md pl-2 pr-5 text-base text-slate-500">BTC</label>
                        </div>
                    </div>
                    <div class="rightSide__spot text-white stroke h-96 mt-10 rounded-2xl pt-4 px-3">
                       <div class="spot__titleNav flex justify-between items-center">
                            <h2 class="text-3xl">Spot</h2>
                            <div class="titleNav_rightsideNav flex items-center gap-8">
                                <label for="" class="rightsideNav_lookupIcon"><i class="fa-solid fa-magnifying-glass text-slate-400"></i></label>
                                <label for="" class="rightsideNav_convertSmall">Convert Small Balance to BNB<i class="fa-solid fa-arrow-right-arrow-left ml-2 text-slate-400 text-xs"></i></label>
                                <div class="rightsideNav_hideAsset flex justify-center gap-2">
                                    <input type="checkbox">
                                    <label for="">Hide assets < 1 USD</label>
                                </div>
                            </div>
                       </div>
                       <div class="spot__smallNav mt-10 text-xs flex justify-between text-slate-400">
                            <label for="" class="smallNav_coin">Coin<i class="fa-solid fa-sort ml-2"></i></label>
                            <label for="" class="smallNav_amount">Amount<i class="fa-solid fa-sort ml-2" ></i></label>
                            <label for="" class="smallNav_available">Available<i class="fa-solid fa-sort ml-2"></i></label>
                            <label for="" class="smallNav_action">Action</label>
                       </div>
                       <div class="spot__container"></div>
                    </div>
                    <div class="rightSide__marketViews text-white stroke h-44 mt-10 rounded-2xl opacity-0">
                        <h2 class="marketViews__title text-3xl pl-3 pt-3">Recent Transactions</h2>
                    </div>
                `
}

function asset_spot (){
    const newcontent = document.createElement('div');
    newcontent.classList.add('mainBlock__rightSide' , 'w-11/12')
    newcontent.innerHTML = asset_spotHTML();
    return newcontent;
}

export {asset_spot};