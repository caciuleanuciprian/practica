// Getting the element
const navOverlay = document.getElementById("navHamburgerOverlay");

// Open Hamburger Menu function
function openHamburger(){
    navOverlay.classList.add("active");
}

//Closing Hamburger Menu function
function closeHamburger(){
    navOverlay.classList.remove("active");
}