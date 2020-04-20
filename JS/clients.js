let blockCenterImg1 = document.querySelectorAll(".blockCenter img")[0];
let blockCenterImg2 = document.querySelectorAll(".blockCenter img")[1];
let blockCenterImg3 = document.querySelectorAll(".blockCenter img")[2];
let centralImg = document.querySelector("#central-image img");

// To make the pictures larger funtions
function firstSectionImg1() {
    blockCenterImg1.style.width = "60%", height = "100%";
    blockCenterImg1.style.filter = "drop-shadow(8px 8px 30px gray)";
}
function firstSectionImg2()  {
    blockCenterImg2.style.width = "60%", height = "100%";
    document.querySelectorAll(".blockCenter img")[0].style.width = "400px", height = "380px";
}
function firstSectionImg3()  {
    blockCenterImg3.style.width = "60%", height = "100%";
    document.querySelectorAll(".blockCenter img")[0].style.width = "400px", height = "380px";
    document.querySelectorAll(".blockCenter img")[1].style.display = "none";
}
function firstSectionCentralImg()  {
    centralImg.style.width = "60%", height = "100%";
    document.querySelectorAll(".blockCenter img")[0].style.filter = "grayscale(100%)";
    document.querySelectorAll(".blockCenter img")[1].style.filter = "grayscale(100%)";
    document.querySelectorAll(".blockCenter img")[2].style.filter = "grayscale(100%)";
    document.querySelectorAll(".firstSectionSecondBlockImgs img")[0].style.filter = "grayscale(100%)";
    document.querySelectorAll(".firstSectionSecondBlockImgs img")[1].style.filter = "grayscale(100%)";
    document.querySelectorAll(".firstSectionSecondBlockImgs img")[2].style.filter = "grayscale(100%)";
}
// Listining for events
blockCenterImg1.addEventListener("click", () => {
    firstSectionImg1();
});
blockCenterImg2.addEventListener("click", () => {
    firstSectionImg2();
});
blockCenterImg3.addEventListener("click", () => {
    firstSectionImg3();
});
centralImg.addEventListener("click", () => {
    firstSectionCentralImg();
});
