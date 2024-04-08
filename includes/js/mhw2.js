const btn_favourite = document.querySelectorAll(".favourite-product-card");
for(let btn of btn_favourite){
    //event also pass event var
    btn.addEventListener("click", handleFavourite)
}

const btn_collapse = document.querySelectorAll(".collapse");
for(let btn of btn_collapse){
    btn.addEventListener('click', collapseExpand);
}

const slider_img = document.querySelector("#slider_img");
const btn_slider_back = document.querySelector("#back");
const btn_slider_forward = document.querySelector("#forward");
btn_slider_back.addEventListener('click', slider);
btn_slider_forward.addEventListener('click', slider);

/**
 * 
 * momentaneamente implementato con 2 immagini al solo scopo di utilizzare il comando "src" per cui il funzionamento alla pressione dei due tasti risulta analogo
 * e semplicistico più avanti verranno magari gestite immaggini attraverso un array 
 */
function slider(event){
    //console.log(slider_img.src);
    if(slider_img.src.search("1.png") !== -1){
        slider_img.src = "../img/2.png";
    }else{
        slider_img.src = "../img/1.png";
    }
}

/**
 * currentTarget target of listener associated
 * target of the object fire listener
 */
function handleFavourite(event){
    const obj = event.currentTarget;
    if(obj.classList.contains("favourite-product-card-selected")){
        obj.classList.remove("favourite-product-card-selected");
        notify("Favourite", "Elemento rimosso dai preferiti");
    }else{
        obj.classList.add("favourite-product-card-selected");
        notify("Favourite", "Elemento aggiunto ai preferiti");
    }
}
//<span class="material-icons">chevron_right</span>
//.dataset accedo al dataset sfruttando il camel case posso recuperare tutti gli attributi data
function collapseExpand(event){
    //console.log(event.currentTarget);
    const obj = document.querySelector(event.currentTarget.dataset.targetId);
    //console.log(obj);
    if(obj.classList.contains("collapsed")){
        obj.classList.remove("collapsed");
    }else{
        obj.classList.add("collapsed");
    }
}

function notify(title, msg){
    const notifyElement = document.createElement("div");
    const notifyTitle = document.createElement("h3");
    const notifyMsg = document.createElement("p");
    notifyTitle.textContent = title;
    notifyMsg.textContent = msg;
    notifyElement.appendChild(notifyTitle);
    notifyElement.appendChild(notifyMsg);
    notifyElement.classList.add("notify");
    notifyRemove();
    document.body.appendChild(notifyElement);
    setTimeout(notifyRemove, 5000);
}

function notifyRemove(){
    let notify = document.querySelectorAll(".notify");
    for(let obj of notify){
        obj.remove();
    }
}