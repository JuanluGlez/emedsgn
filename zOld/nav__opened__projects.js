// ========================================== menu button projects

desktopMenuButton.addEventListener("click", toggleDesktopMenuProjects);

function showDesktopMenuProjects() {

    document.querySelector(".animation__typing").style.fontSize = "3.5vw";

}

function hideDesktopMenuProjects() {

    document.querySelector (".animation__typing").style.fontSize = "4.65vw";

}

function toggleDesktopMenuProjects() {

    if (desktopMenu.style.opacity == 0) {

        hideDesktopMenuProjects();

    } else if (!desktopMenu.style.opacity == 0) {

        showDesktopMenuProjects();
        console.log("lo lee");

    }

}