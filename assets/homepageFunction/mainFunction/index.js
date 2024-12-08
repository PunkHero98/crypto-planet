import dashboard from '../leftLabelNavbarFunction/dashboardRender.js';
import asset_overviewRender from '../leftLabelNavbarFunction/asset_overviewRender.js';
import asset_spotviewRender from '../leftLabelNavbarFunction/asset_spotviewRender.js';



function callConst(){
    const assetItems = document.querySelector('ul.asset__items');
    const orderItems = document.querySelector('ul.order__items');
    const accountItems = document.querySelector('ul.account__items');
    const leftSideContainer = document.querySelector('div.mainBlock__leftSide'); 
    return {assetItems , orderItems , accountItems , leftSideContainer};
}
function homepageFunction() {
    const {leftSideContainer} = callConst();
    leftSideContainer.addEventListener('click', (event) => {
        const target = event.target;

        if (target.tagName === 'LABEL') {
            checkLeftSideNavbar(target);
            renderHTMLforLabel(target);
        }
        if (target.tagName === 'LI') {
            handleLiClick(target);
        }
    });
}

function renderHTMLforLabel(obj) {
    const labelMap = {
        'Dashboard': dashboard(),
        'Setting': asset,
    };
    return labelMap[obj.innerHTML];
}

function renderHTMLforLi(obj) {
    const labelMap = {
        'Overview': asset_overviewRender(obj.innerHTML),
        'Spot': asset_spotviewRender(obj.innerHTML),
        'Margin': asset,
        'Identification': asset,
        'Account Statement': asset,
        'Financial Reports': asset,
    };
    return labelMap[obj.innerHTML];
}
function handleLiClick(li) {
    const liParent = li.parentElement;
    liParent.querySelectorAll('li').forEach((item) => {
        item.classList.remove('text-white', 'bg-[#2B3139]');
        item.classList.add('text-slate-400');
    });

    li.classList.add('text-white', 'bg-[#2B3139]');
    li.classList.remove('text-slate-400')
    if (liParent.previousElementSibling) {
        liParent.previousElementSibling.classList.remove('bg-[#2B3139]');
    }
    renderHTMLforLi(li);
    
}

function checkLeftSideNavbar(obj) {
    const {assetItems , orderItems , accountItems , leftSideContainer} = callConst();
    const state = obj.innerHTML;
    const dropdownMapping = {
        'Assets': assetItems,
        'Orders': orderItems,
        'Account': accountItems,
    };
    assetItems.classList.add('hidden');
    orderItems.classList.add('hidden');
    accountItems.classList.add('hidden');

    leftSideContainer.querySelectorAll('label').forEach((item) => {
        const isActive = item.innerHTML === state;
        item.classList.toggle('text-white', isActive);
        item.classList.toggle('bg-[#2B3139]', isActive);
        item.style.setProperty('--text-color', isActive ? 'white' : 'rgb(148 163 184)');
        item.style.setProperty('--tranformDeg', isActive ? 'rotate(135deg)' : 'rotate(45deg)');
        item.style.setProperty('--translatePos', isActive ? '0 -5px' : 'none');
    });

    leftSideContainer.querySelectorAll('li').forEach((f) => {
        f.classList.remove('text-white', 'bg-[#2B3139]');
        f.classList.add('text-slate-400');
    });

    if (dropdownMapping[state]) {
        dropdownMapping[state].classList.remove('hidden');
    }
}

export default homepageFunction;
