const navOverlay = document.getElementById("navHamburgerOverlay");

function openHamburger(){
    navOverlay.classList.add("active");
}

function closeHamburger(){
    navOverlay.classList.remove("active");
}