import { asset_spot } from "../../../views/asset_spotView.js";

function asset_spotviewRender(obj){
    const mainContentArea = document.querySelector('.homepage div.homepage-container__mainBlock');
    if(obj !== 'Spot' ) return;
    mainContentArea.children[1].remove();
    mainContentArea.appendChild(asset_spot());
}

export default asset_spotviewRender;