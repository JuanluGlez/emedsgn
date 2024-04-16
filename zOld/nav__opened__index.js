// ========================================== menu button home

desktopMenuButton.addEventListener("click", toggleDesktopMenu__Home);

function showDesktopMenu__Home() {

    document.querySelector(".step1").style.fontSize = "7vw";
    document.querySelector(".step2").style.fontSize = "7vw";
    document.querySelector(".step3").style.fontSize = "7vw";
    document.querySelector(".step1").style.marginRight = "15px";
    document.querySelector(".step2").style.marginRight = "15px";
    document.querySelector(".step3").style.marginRight = "15px";
    document.querySelector(".step__title1").style.fontSize = "1.1vw";
    document.querySelector(".step__title2").style.fontSize = "1.1vw";
    document.querySelector(".step__title3").style.fontSize = "1.1vw";
    document.querySelector(".step__decription1").style.fontSize = "1vw";
    document.querySelector(".step__decription2").style.fontSize = "1vw";
    document.querySelector(".step__decription3").style.fontSize = "1vw";

}

function hideDesktopMenu__Home() {

    document.querySelector(".step1").style.fontSize = "10vw";
    document.querySelector(".step2").style.fontSize = "10vw";
    document.querySelector(".step3").style.fontSize = "10vw";
    document.querySelector(".step1").style.marginRight = "2vw";
    document.querySelector(".step2").style.marginRight = "2vw";
    document.querySelector(".step3").style.marginRight = "2vw";
    document.querySelector(".step__title1").style.fontSize = "3vh";
    document.querySelector(".step__title2").style.fontSize = "3vh";
    document.querySelector(".step__title3").style.fontSize = "3vh";
    document.querySelector(".step__decription1").style.fontSize = "1.2vw";
    document.querySelector(".step__decription2").style.fontSize = "1.2vw";
    document.querySelector(".step__decription3").style.fontSize = "1.2vw";

}

function toggleDesktopMenu__Home() {

    if (desktopMenu.style.opacity == 0) {

        hideDesktopMenu__Home()

    } else if (!desktopMenu.style.opacity == 0) {

        showDesktopMenu__Home()

    }

}