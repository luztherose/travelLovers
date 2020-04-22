
let centralImg = document.querySelector("#central-image img");
centralImg.title  = "See life in Black & White!";

// To make the pictures larger funtions

function firstSectionCentralImg()  {
    centralImg.style.width = "60%", height = "100%";
    let allImages = document.querySelectorAll("img");
    for(let i = 0; i < allImages.length; i++) {
        allImages[i].style.filter = "grayscale(100%)";
    }
    if (allImages) {
        let h2Heading = document.querySelector("h2");
        h2Heading.style.color ="tomato";
    }
}

// Listining for events
centralImg.addEventListener("click", () => {
    firstSectionCentralImg();
});
