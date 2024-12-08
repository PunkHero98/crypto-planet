import { asset_overview } from "../../../views/asset_OverViews.js";

function asset_overviewRender(obj){
    const mainContentArea = document.querySelector('.homepage div.homepage-container__mainBlock');
    if(obj !== "Overview") return;
    mainContentArea.children[1].remove();
    mainContentArea.appendChild(asset_overview());
}

export default asset_overviewRender;