let gallery = [
    "images/reservation2.jpg",
    "images/franceLouvreMuseum.jpg",
    "images/eiffelTower.jpg",
    "images/espanacathe.jpg ",
    "images/amsterdamCanals.jpg"
];
let cityName = [
    "Punta Cana, RD",
    "Paris, France",
    "Paris, France",
    "Barcelona, Spain",
    "Amsterdam, the Netherlands"
];
let num = 0;
function nextButton() {
    let nextPic = document.getElementById("picGallery");
    let city = document.getElementById("cityName");
    num = num + 1;
    if (num >= gallery.length && cityName.length) {
        num = 0;
    }
    nextPic.src = gallery[num];
    city.innerHTML = cityName[num];
}
function previousButton() {
    let nextPic = document.getElementById("picGallery");
    let city = document.getElementById("cityName");
    num = num - 1;
    if (num < 0) {
        num = gallery.length -1;
        num += cityName.length -1;
        num = 0;
    }
    nextPic.src = gallery[num];
    city.innerHTML = cityName[num];
}

