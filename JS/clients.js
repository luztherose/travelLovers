//  Seclecting Elements
let centralImg = document.querySelector("#central-image img");
centralImg.style.filter = "grayscale(100%)";
centralImg.title = "See Life in Black & White";
let allImages = document.querySelectorAll("img");
let h2Heading = document.querySelector("h2");
let h1Heading = document.querySelector("h1");
// Add @media queries
let width = window.matchMedia("(max-width:1020px)");

// This function change the color of the images to grey and it makes the central image a bit larger in big screens and resize it in small screens
function changeImagesColorToGray() {
    h1Heading.innerHTML = "Life in Black & White!";
    h1Heading.style.fontFamily = "cursive";
    h1Heading.style.color = "black";
    h2Heading.style.color = "tomato";
    if (centralImg) {
        centralImg.style.width = "40%", height = "100%";
        centralImg.title = "Add Color to Life";
        for (let i = 0; i < allImages.length; i++) {
            allImages[i].style.filter = "grayscale(100%)";
        }
        centralImg.src = "images/rainbow-baby.jpg";
        centralImg.style.filter = "none"
    }
    if (width.matches) { // If media query matches
        centralImg.style.width = "", height = "";
    }
}

// This function turn the color of the images back
function revomeImagesFilter() {
    centralImg.title = "See Life in Black & White";
    h1Heading.innerHTML = "Life is Better with Colors!";
    h1Heading.style.fontFamily = "cursive";
    h1Heading.style.color = "red";
    h2Heading.style.color = "";
    centralImg.style.width = "", height = "";
    for (let i = 0; i < allImages.length; i++) {
        allImages[i].style.filter = "none";
    }
    centralImg.src = "images/photo8.jpg";
    centralImg.style.filter = "grayscale(100%)";
}

// Listining for events
centralImg.addEventListener("click", () => {
    if (h2Heading.style.color != "tomato") {
        changeImagesColorToGray();
    } else {
        revomeImagesFilter();
    }
});