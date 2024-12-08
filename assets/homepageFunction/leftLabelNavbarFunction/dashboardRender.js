import { dashboard } from "../../../views/dashboardViews.js";


function dashboardRender(){
    const mainContentArea = document.querySelector('.homepage div.homepage-container__mainBlock');
    if(mainContentArea.children[1]){
        mainContentArea.children[1].remove();
        mainContentArea.appendChild(dashboard());
        return;
    }
    mainContentArea.appendChild(dashboard());
}

export default dashboardRender;