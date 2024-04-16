let menuButton = document.querySelector(".menu__mobile");
let menuMobile = document.getElementById("principalMenu__mobile");

menuButton.addEventListener("click", showMenuMobile);

function showMenuMobile(){

    menuMobile.style.height = "auto";
    menuMobile.style.opacity = 1;

    openPanel0__mobile()

}

let menuElement__mobile = [
    document.querySelector(".menuElement0__mobile"),
    document.querySelector(".menuElement1__mobile"),
    document.querySelector(".menuElement2__mobile"),
    document.querySelector(".menuElement3__mobile"),
    document.querySelector(".menuElement4__mobile"),
    document.querySelector(".menuElement5__mobile")
];

let menuHeader__mobile = [
    document.querySelector(".menuHeader0__mobile"),
    document.querySelector(".menuHeader1__mobile"),
    document.querySelector(".menuHeader2__mobile"),
    document.querySelector(".menuHeader3__mobile"),
    document.querySelector(".menuHeader4__mobile"),
    document.querySelector(".menuHeader5__mobile"),
];

let menuLink__mobile = [
    document.querySelector(".menuLink0__mobile"),
    document.querySelector(".menuLink1__mobile"),
    document.querySelector(".menuLink2__mobile"),
    document.querySelector(".menuLink3__mobile"),
    document.querySelector(".menuLink4__mobile"),
    document.querySelector(".menuLink5__mobile")
];

let menuContent__mobile = [
    document.querySelector(".menuContent0__mobile"),
    document.querySelector(".menuContent1__mobile"),
    document.querySelector(".menuContent2__mobile"),
    document.querySelector(".menuContent3__mobile"),
    document.querySelector(".menuContent4__mobile"),
    document.querySelector(".menuContent5__mobile")
];

let closeElement__mobile = [
    document.querySelector(".close0__mobile"),
    document.querySelector(".close1__mobile"),
    document.querySelector(".close2__mobile"),
    document.querySelector(".close3__mobile"),
    document.querySelector(".close4__mobile"),
    document.querySelector(".close5__mobile")
];

let body__mobile = document.getElementById("body");

menuHeader__mobile[0].addEventListener("click", openPanel0__mobile);
menuHeader__mobile[1].addEventListener("click", openPanel1__mobile);
menuHeader__mobile[2].addEventListener("click", openPanel2__mobile);
menuHeader__mobile[3].addEventListener("click", openPanel3__mobile);
menuHeader__mobile[4].addEventListener("click", openPanel4__mobile);
menuHeader__mobile[5].addEventListener("click", openPanel5__mobile);

closeElement__mobile[0].addEventListener("click", closePanel0__mobile);
closeElement__mobile[1].addEventListener("click", closePanel1__mobile);
closeElement__mobile[2].addEventListener("click", closePanel2__mobile);
closeElement__mobile[3].addEventListener("click", closePanel3__mobile);
closeElement__mobile[4].addEventListener("click", closePanel4__mobile);
closeElement__mobile[5].addEventListener("click", closePanel5__mobile);

function openPanel0__mobile() {

    if (!menuElement__mobile[0].classList.contains("grow")){
        
        menuElement__mobile[0].classList.add("grow");

        menuElement__mobile[1].classList.remove("grow");
        menuElement__mobile[2].classList.remove("grow");
        menuElement__mobile[3].classList.remove("grow");
        menuElement__mobile[4].classList.remove("grow");
        menuElement__mobile[5].classList.remove("grow");
        
        menuHeader__mobile[0].classList.add("hidden");

        menuHeader__mobile[1].classList.remove("hidden");
        menuHeader__mobile[2].classList.remove("hidden");
        menuHeader__mobile[3].classList.remove("hidden");
        menuHeader__mobile[4].classList.remove("hidden");
        menuHeader__mobile[5].classList.remove("hidden");

        menuContent__mobile[0].classList.remove("fade");

        menuContent__mobile[1].classList.add("fade");
        menuContent__mobile[2].classList.add("fade");
        menuContent__mobile[3].classList.add("fade");
        menuContent__mobile[4].classList.add("fade");
        menuContent__mobile[5].classList.add("fade");

        closeElement__mobile[0].classList.remove("hidden");
        
        closeElement__mobile[1].classList.add("hidden");
        closeElement__mobile[2].classList.add("hidden");
        closeElement__mobile[3].classList.add("hidden");
        closeElement__mobile[4].classList.add("hidden");
        closeElement__mobile[5].classList.add("hidden");  
        
        body__mobile.style.overflow = "hidden";

    }

}

function closePanel0__mobile() {
    if(menuElement__mobile[0].classList.contains("grow")){
       
        menuContent__mobile[0].classList.add("fade");
        menuElement__mobile[0].classList.remove("grow");
        menuHeader__mobile[0].classList.remove("hidden");
        closeElement__mobile[0].classList.toggle("hidden");
        
        body__mobile.style.overflow = "visible";

        menuMobile.style.height = 0;
        menuMobile.style.opacity = 0;
    }
}

function openPanel1__mobile() {

    if (!menuElement__mobile[1].classList.contains("grow")){
        
        menuElement__mobile[1].classList.add("grow");

        menuElement__mobile[0].classList.remove("grow");
        menuElement__mobile[2].classList.remove("grow");
        menuElement__mobile[3].classList.remove("grow");
        menuElement__mobile[4].classList.remove("grow");
        menuElement__mobile[5].classList.remove("grow");
        
        menuHeader__mobile[1].classList.add("hidden");

        menuHeader__mobile[0].classList.remove("hidden");
        menuHeader__mobile[2].classList.remove("hidden");
        menuHeader__mobile[3].classList.remove("hidden");
        menuHeader__mobile[4].classList.remove("hidden");
        menuHeader__mobile[5].classList.remove("hidden");

        menuContent__mobile[1].classList.remove("fade");

        menuContent__mobile[0].classList.add("fade");
        menuContent__mobile[2].classList.add("fade");
        menuContent__mobile[3].classList.add("fade");
        menuContent__mobile[4].classList.add("fade");
        menuContent__mobile[5].classList.add("fade");

        closeElement__mobile[1].classList.remove("hidden");
        
        closeElement__mobile[0].classList.add("hidden");
        closeElement__mobile[2].classList.add("hidden");
        closeElement__mobile[3].classList.add("hidden");
        closeElement__mobile[4].classList.add("hidden");
        closeElement__mobile[5].classList.add("hidden");

        body__mobile.style.overflow = "hidden";
         
    }
}

function closePanel1__mobile() {
    if(menuElement__mobile[1].classList.contains("grow")){
        
        menuContent__mobile[1].classList.add("fade");
        menuElement__mobile[1].classList.remove("grow");
        menuHeader__mobile[1].classList.remove("hidden");
        closeElement__mobile[1].classList.toggle("hidden");
        
        body__mobile.style.overflow = "visible";

        menuMobile.style.height = 0;
        menuMobile.style.opacity = 0;

    }
}

function openPanel2__mobile() {

    if (!menuElement__mobile[2].classList.contains("grow")){
        
        menuElement__mobile[2].classList.add("grow");

        menuElement__mobile[1].classList.remove("grow");
        menuElement__mobile[0].classList.remove("grow");
        menuElement__mobile[3].classList.remove("grow");
        menuElement__mobile[4].classList.remove("grow");
        menuElement__mobile[5].classList.remove("grow");
        
        menuHeader__mobile[2].classList.add("hidden");

        menuHeader__mobile[1].classList.remove("hidden");
        menuHeader__mobile[0].classList.remove("hidden");
        menuHeader__mobile[3].classList.remove("hidden");
        menuHeader__mobile[4].classList.remove("hidden");
        menuHeader__mobile[5].classList.remove("hidden");

        menuContent__mobile[2].classList.remove("fade");

        menuContent__mobile[1].classList.add("fade");
        menuContent__mobile[0].classList.add("fade");
        menuContent__mobile[3].classList.add("fade");
        menuContent__mobile[4].classList.add("fade");
        menuContent__mobile[5].classList.add("fade");

        closeElement__mobile[2].classList.remove("hidden");
        
        closeElement__mobile[1].classList.add("hidden");
        closeElement__mobile[0].classList.add("hidden");
        closeElement__mobile[3].classList.add("hidden");
        closeElement__mobile[4].classList.add("hidden");
        closeElement__mobile[5].classList.add("hidden");

        body__mobile.style.overflow = "hidden";

    }
}

function closePanel2__mobile() {
    if(menuElement__mobile[2].classList.contains("grow")){
       
        menuContent__mobile[2].classList.add("fade");
        menuElement__mobile[2].classList.remove("grow");
        menuHeader__mobile[2].classList.remove("hidden");
        closeElement__mobile[2].classList.toggle("hidden");
        
        body__mobile.style.overflow = "visible";

        menuMobile.style.height = 0;
        menuMobile.style.opacity = 0;

    }
}

function openPanel3__mobile() {

    if (!menuElement__mobile[3].classList.contains("grow")){
       
        menuElement__mobile[3].classList.add("grow");

        menuElement__mobile[1].classList.remove("grow");
        menuElement__mobile[2].classList.remove("grow");
        menuElement__mobile[0].classList.remove("grow");
        menuElement__mobile[4].classList.remove("grow");
        menuElement__mobile[5].classList.remove("grow");
        
        menuHeader__mobile[3].classList.add("hidden");

        menuHeader__mobile[1].classList.remove("hidden");
        menuHeader__mobile[2].classList.remove("hidden");
        menuHeader__mobile[0].classList.remove("hidden");
        menuHeader__mobile[4].classList.remove("hidden");
        menuHeader__mobile[5].classList.remove("hidden");

        menuContent__mobile[3].classList.remove("fade");

        menuContent__mobile[1].classList.add("fade");
        menuContent__mobile[2].classList.add("fade");
        menuContent__mobile[0].classList.add("fade");
        menuContent__mobile[4].classList.add("fade");
        menuContent__mobile[5].classList.add("fade");

        closeElement__mobile[3].classList.remove("hidden");
        
        closeElement__mobile[1].classList.add("hidden");
        closeElement__mobile[2].classList.add("hidden");
        closeElement__mobile[0].classList.add("hidden");
        closeElement__mobile[4].classList.add("hidden");
        closeElement__mobile[5].classList.add("hidden");  

        logoInner__mobile.classList.add("fade");
        body__mobile.style.overflow = "hidden";
         
    }
}

function closePanel3__mobile() {
    if(menuElement__mobile[3].classList.contains("grow")){
        
        menuContent__mobile[3].classList.add("fade");
        menuElement__mobile[3].classList.remove("grow");
        menuHeader__mobile[3].classList.remove("hidden");
        closeElement__mobile[3].classList.toggle("hidden");
        
        body__mobile.style.overflow = "visible";

        menuMobile.style.height = 0;
        menuMobile.style.opacity = 0;

    }
}

function openPanel4__mobile() {

    if (!menuElement__mobile[4].classList.contains("grow")){
       
        menuElement__mobile[4].classList.add("grow");

        menuElement__mobile[1].classList.remove("grow");
        menuElement__mobile[2].classList.remove("grow");
        menuElement__mobile[3].classList.remove("grow");
        menuElement__mobile[0].classList.remove("grow");
        menuElement__mobile[5].classList.remove("grow");
        
        menuHeader__mobile[4].classList.add("hidden");

        menuHeader__mobile[1].classList.remove("hidden");
        menuHeader__mobile[2].classList.remove("hidden");
        menuHeader__mobile[3].classList.remove("hidden");
        menuHeader__mobile[0].classList.remove("hidden");
        menuHeader__mobile[5].classList.remove("hidden");

        menuContent__mobile[4].classList.remove("fade");

        menuContent__mobile[1].classList.add("fade");
        menuContent__mobile[2].classList.add("fade");
        menuContent__mobile[3].classList.add("fade");
        menuContent__mobile[0].classList.add("fade");
        menuContent__mobile[5].classList.add("fade");

        closeElement__mobile[4].classList.remove("hidden");
        
        closeElement__mobile[1].classList.add("hidden");
        closeElement__mobile[2].classList.add("hidden");
        closeElement__mobile[3].classList.add("hidden");
        closeElement__mobile[0].classList.add("hidden");
        closeElement__mobile[5].classList.add("hidden");

        body__mobile.style.overflow = "hidden";
         
    }
}

function closePanel4__mobile() {
    if(menuElement__mobile[4].classList.contains("grow")){
        
        menuContent__mobile[4].classList.add("fade");
        menuElement__mobile[4].classList.remove("grow");
        menuHeader__mobile[4].classList.remove("hidden");
        closeElement__mobile[4].classList.toggle("hidden");
        
        body__mobile.style.overflow = "visible";

        menuMobile.style.height = 0;
        menuMobile.style.opacity = 0;

    }
}

function openPanel5__mobile() {

    if (!menuElement__mobile[5].classList.contains("grow")){
       
        menuElement__mobile[5].classList.add("grow");

        menuElement__mobile[1].classList.remove("grow");
        menuElement__mobile[2].classList.remove("grow");
        menuElement__mobile[3].classList.remove("grow");
        menuElement__mobile[4].classList.remove("grow");
        menuElement__mobile[0].classList.remove("grow");
        
        menuHeader__mobile[5].classList.add("hidden");

        menuHeader__mobile[1].classList.remove("hidden");
        menuHeader__mobile[2].classList.remove("hidden");
        menuHeader__mobile[3].classList.remove("hidden");
        menuHeader__mobile[4].classList.remove("hidden");
        menuHeader__mobile[0].classList.remove("hidden");

        menuContent__mobile[5].classList.remove("fade");

        menuContent__mobile[1].classList.add("fade");
        menuContent__mobile[2].classList.add("fade");
        menuContent__mobile[3].classList.add("fade");
        menuContent__mobile[4].classList.add("fade");
        menuContent__mobile[0].classList.add("fade");

        closeElement__mobile[5].classList.remove("hidden");
        
        closeElement__mobile[1].classList.add("hidden");
        closeElement__mobile[2].classList.add("hidden");
        closeElement__mobile[3].classList.add("hidden");
        closeElement__mobile[4].classList.add("hidden");
        closeElement__mobile[0].classList.add("hidden");

        body__mobile.style.overflow = "hidden";
         
    }
}

function closePanel5__mobile() {
    if(menuElement__mobile[5].classList.contains("grow")){
        
        menuContent__mobile[5].classList.add("fade");
        menuElement__mobile[5].classList.remove("grow");
        menuHeader__mobile[5].classList.remove("hidden");
        closeElement__mobile[5].classList.toggle("hidden");
        
        body__mobile.style.overflow = "visible";

        menuMobile.style.height = 0;
        menuMobile.style.opacity = 0;

    }
}

// yo haría un menuElement.some(element => element.classList ==="grow")
// https://www.w3schools.com/jsref/jsref_some.asp