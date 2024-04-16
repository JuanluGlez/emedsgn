// ========================================== menu button

let desktopMenuButton = document.getElementById("menuProjects");
let desktopMenuButtonAfter = document.getElementById("closeIcon");
let desktopMenu = document.getElementById("principalMenu");

let content = document.querySelector(".section__main");

desktopMenuButton.addEventListener("click", toggleDesktopMenu);

function showDesktopMenu() {

    desktopMenu.style.width = "300px";
    desktopMenu.style.opacity = 1;
    content.style.width = "calc(100vw - 300px)";
    desktopMenuButtonAfter.style.opacity = 1;

}

function hideDesktopMenu() {

    desktopMenu.style.width = 0;
    desktopMenu.style.opacity = 0;
    content.style.width = "100%";
    desktopMenuButtonAfter.style.opacity = 0;

}

function toggleDesktopMenu() {

    if (desktopMenu.style.opacity == 0) {

        showDesktopMenu()

    } else if (!desktopMenu.style.opacity == 0) {

        hideDesktopMenu()

    }

}

// ========================================== menu function

let menuElement = [
    document.querySelector(".menuElement0"),
    document.querySelector(".menuElement1"),
    document.querySelector(".menuElement2"),
    document.querySelector(".menuElement3"),
    document.querySelector(".menuElement4"),
    document.querySelector(".menuElement5")
];

let menuHeader = [
    document.querySelector(".menuHeader0"),
    document.querySelector(".menuHeader1"),
    document.querySelector(".menuHeader2"),
    document.querySelector(".menuHeader3"),
    document.querySelector(".menuHeader4"),
    document.querySelector(".menuHeader5"),
];

let menuLink = [
    document.querySelector(".menuLink0"),
    document.querySelector(".menuLink1"),
    document.querySelector(".menuLink2"),
    document.querySelector(".menuLink3"),
    document.querySelector(".menuLink4"),
    document.querySelector(".menuLink5")
];

let menuContent = [
    document.querySelector(".menuContent0"),
    document.querySelector(".menuContent1"),
    document.querySelector(".menuContent2"),
    document.querySelector(".menuContent3"),
    document.querySelector(".menuContent4"),
    document.querySelector(".menuContent5")
];

let closeElement = [
    document.querySelector(".close0"),
    document.querySelector(".close1"),
    document.querySelector(".close2"),
    document.querySelector(".close3"),
    document.querySelector(".close4"),
    document.querySelector(".close5")
];

let body = document.getElementById("body");

menuHeader[0].addEventListener("click", openPanel0);
menuHeader[1].addEventListener("click", openPanel1);
menuHeader[2].addEventListener("click", openPanel2);
menuHeader[3].addEventListener("click", openPanel3);
menuHeader[4].addEventListener("click", openPanel4);
menuHeader[5].addEventListener("click", openPanel5);

closeElement[0].addEventListener("click", closePanel0);
closeElement[1].addEventListener("click", closePanel1);
closeElement[2].addEventListener("click", closePanel2);
closeElement[3].addEventListener("click", closePanel3);
closeElement[4].addEventListener("click", closePanel4);
closeElement[5].addEventListener("click", closePanel5);

function openPanel0() {

    if (!menuElement[0].classList.contains("grow")){
        
        menuElement[0].classList.add("grow");

        menuElement[1].classList.remove("grow");
        menuElement[2].classList.remove("grow");
        menuElement[3].classList.remove("grow");
        menuElement[4].classList.remove("grow");
        menuElement[5].classList.remove("grow");
        
        menuHeader[0].classList.add("hidden");

        menuHeader[1].classList.remove("hidden");
        menuHeader[2].classList.remove("hidden");
        menuHeader[3].classList.remove("hidden");
        menuHeader[4].classList.remove("hidden");
        menuHeader[5].classList.remove("hidden");

        menuContent[0].classList.remove("fade");

        menuContent[1].classList.add("fade");
        menuContent[2].classList.add("fade");
        menuContent[3].classList.add("fade");
        menuContent[4].classList.add("fade");
        menuContent[5].classList.add("fade");

        closeElement[0].classList.remove("hidden");
        
        closeElement[1].classList.add("hidden");
        closeElement[2].classList.add("hidden");
        closeElement[3].classList.add("hidden");
        closeElement[4].classList.add("hidden");
        closeElement[5].classList.add("hidden");   
        
        body.style.overflow = "hidden";

        desktopMenu.style.width = "auto";

    }

}

function closePanel0() {
    if(menuElement[0].classList.contains("grow")){
       
        menuContent[0].classList.add("fade");
        menuElement[0].classList.remove("grow");
        menuHeader[0].classList.remove("hidden");
        closeElement[0].classList.toggle("hidden");
        
        body.style.overflow = "visible";

        desktopMenu.style.width = "300px";
    }
}

function openPanel1() {

    if (!menuElement[1].classList.contains("grow")){
        
        menuElement[1].classList.add("grow");

        menuElement[0].classList.remove("grow");
        menuElement[2].classList.remove("grow");
        menuElement[3].classList.remove("grow");
        menuElement[4].classList.remove("grow");
        menuElement[5].classList.remove("grow");
        
        menuHeader[1].classList.add("hidden");

        menuHeader[0].classList.remove("hidden");
        menuHeader[2].classList.remove("hidden");
        menuHeader[3].classList.remove("hidden");
        menuHeader[4].classList.remove("hidden");
        menuHeader[5].classList.remove("hidden");

        menuContent[1].classList.remove("fade");

        menuContent[0].classList.add("fade");
        menuContent[2].classList.add("fade");
        menuContent[3].classList.add("fade");
        menuContent[4].classList.add("fade");
        menuContent[5].classList.add("fade");

        closeElement[1].classList.remove("hidden");
        
        closeElement[0].classList.add("hidden");
        closeElement[2].classList.add("hidden");
        closeElement[3].classList.add("hidden");
        closeElement[4].classList.add("hidden");
        closeElement[5].classList.add("hidden");  

        body.style.overflow = "hidden";

        desktopMenu.style.width = "auto";
         
    }
}

function closePanel1() {
    if(menuElement[1].classList.contains("grow")){
        
        menuContent[1].classList.add("fade");
        menuElement[1].classList.remove("grow");
        menuHeader[1].classList.remove("hidden");
        closeElement[1].classList.toggle("hidden");
        
        body.style.overflow = "visible";

        desktopMenu.style.width = "300px";
    }
}

function openPanel2() {

    if (!menuElement[2].classList.contains("grow")){
        
        menuElement[2].classList.add("grow");

        menuElement[1].classList.remove("grow");
        menuElement[0].classList.remove("grow");
        menuElement[3].classList.remove("grow");
        menuElement[4].classList.remove("grow");
        menuElement[5].classList.remove("grow");
        
        menuHeader[2].classList.add("hidden");

        menuHeader[1].classList.remove("hidden");
        menuHeader[0].classList.remove("hidden");
        menuHeader[3].classList.remove("hidden");
        menuHeader[4].classList.remove("hidden");
        menuHeader[5].classList.remove("hidden");

        menuContent[2].classList.remove("fade");

        menuContent[1].classList.add("fade");
        menuContent[0].classList.add("fade");
        menuContent[3].classList.add("fade");
        menuContent[4].classList.add("fade");
        menuContent[5].classList.add("fade");

        closeElement[2].classList.remove("hidden");
        
        closeElement[1].classList.add("hidden");
        closeElement[0].classList.add("hidden");
        closeElement[3].classList.add("hidden");
        closeElement[4].classList.add("hidden");
        closeElement[5].classList.add("hidden"); 

        desktopMenu.style.width = "auto";

    }
}

function closePanel2() {
    if(menuElement[2].classList.contains("grow")){
       
        menuContent[2].classList.add("fade");
        menuElement[2].classList.remove("grow");
        menuHeader[2].classList.remove("hidden");
        closeElement[2].classList.toggle("hidden");
        
        body.style.overflow = "visible";

        desktopMenu.style.width = "300px";
    }
}

function openPanel3() {

    if (!menuElement[3].classList.contains("grow")){
       
        menuElement[3].classList.add("grow");

        menuElement[1].classList.remove("grow");
        menuElement[2].classList.remove("grow");
        menuElement[0].classList.remove("grow");
        menuElement[4].classList.remove("grow");
        menuElement[5].classList.remove("grow");
        
        menuHeader[3].classList.add("hidden");

        menuHeader[1].classList.remove("hidden");
        menuHeader[2].classList.remove("hidden");
        menuHeader[0].classList.remove("hidden");
        menuHeader[4].classList.remove("hidden");
        menuHeader[5].classList.remove("hidden");

        menuContent[3].classList.remove("fade");

        menuContent[1].classList.add("fade");
        menuContent[2].classList.add("fade");
        menuContent[0].classList.add("fade");
        menuContent[4].classList.add("fade");
        menuContent[5].classList.add("fade");

        closeElement[3].classList.remove("hidden");
        
        closeElement[1].classList.add("hidden");
        closeElement[2].classList.add("hidden");
        closeElement[0].classList.add("hidden");
        closeElement[4].classList.add("hidden");
        closeElement[5].classList.add("hidden");  

        desktopMenu.style.width = "auto";
         
    }
}

function closePanel3() {
    if(menuElement[3].classList.contains("grow")){
        
        menuContent[3].classList.add("fade");
        menuElement[3].classList.remove("grow");
        menuHeader[3].classList.remove("hidden");
        closeElement[3].classList.toggle("hidden");
        
        body.style.overflow = "visible";

        desktopMenu.style.width = "300px";
    }
}

function openPanel4() {

    if (!menuElement[4].classList.contains("grow")){
       
        menuElement[4].classList.add("grow");

        menuElement[1].classList.remove("grow");
        menuElement[2].classList.remove("grow");
        menuElement[3].classList.remove("grow");
        menuElement[0].classList.remove("grow");
        menuElement[5].classList.remove("grow");
        
        menuHeader[4].classList.add("hidden");

        menuHeader[1].classList.remove("hidden");
        menuHeader[2].classList.remove("hidden");
        menuHeader[3].classList.remove("hidden");
        menuHeader[0].classList.remove("hidden");
        menuHeader[5].classList.remove("hidden");

        menuContent[4].classList.remove("fade");

        menuContent[1].classList.add("fade");
        menuContent[2].classList.add("fade");
        menuContent[3].classList.add("fade");
        menuContent[0].classList.add("fade");
        menuContent[5].classList.add("fade");

        closeElement[4].classList.remove("hidden");
        
        closeElement[1].classList.add("hidden");
        closeElement[2].classList.add("hidden");
        closeElement[3].classList.add("hidden");
        closeElement[0].classList.add("hidden");
        closeElement[5].classList.add("hidden");

        desktopMenu.style.width = "auto";

    }
}

function closePanel4() {
    if(menuElement[4].classList.contains("grow")){
        
        menuContent[4].classList.add("fade");
        menuElement[4].classList.remove("grow");
        menuHeader[4].classList.remove("hidden");
        closeElement[4].classList.toggle("hidden");
        
        body.style.overflow = "visible";

        desktopMenu.style.width = "300px";
    }
}

function openPanel5() {

    if (!menuElement[5].classList.contains("grow")){
       
        menuElement[5].classList.add("grow");

        menuElement[1].classList.remove("grow");
        menuElement[2].classList.remove("grow");
        menuElement[3].classList.remove("grow");
        menuElement[4].classList.remove("grow");
        menuElement[0].classList.remove("grow");
        
        menuHeader[5].classList.add("hidden");

        menuHeader[1].classList.remove("hidden");
        menuHeader[2].classList.remove("hidden");
        menuHeader[3].classList.remove("hidden");
        menuHeader[4].classList.remove("hidden");
        menuHeader[0].classList.remove("hidden");

        menuContent[5].classList.remove("fade");

        menuContent[1].classList.add("fade");
        menuContent[2].classList.add("fade");
        menuContent[3].classList.add("fade");
        menuContent[4].classList.add("fade");
        menuContent[0].classList.add("fade");

        closeElement[5].classList.remove("hidden");
        
        closeElement[1].classList.add("hidden");
        closeElement[2].classList.add("hidden");
        closeElement[3].classList.add("hidden");
        closeElement[4].classList.add("hidden");
        closeElement[0].classList.add("hidden");

        desktopMenu.style.width = "auto";
         
    }
}

function closePanel5() {
    if(menuElement[5].classList.contains("grow")){
        
        menuContent[5].classList.add("fade");
        menuElement[5].classList.remove("grow");
        menuHeader[5].classList.remove("hidden");
        closeElement[5].classList.toggle("hidden");
        
        body.style.overflow = "visible";

        desktopMenu.style.width = "300px";
    }
}

// yo haría un menuElement.some(element => element.classList ==="grow")
// https://www.w3schools.com/jsref/jsref_some.asp