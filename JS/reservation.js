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
let nextDestination = [
    "Life Is Better at the Beach!",
    "Explore the City of Love ...",
    "Enjoy Paris' museums, classical bistros and boutiques!",
    "An enchanting seaside city with boundless culture!",
    "Traditional architecture, canals, and many coffeeshops..."
];

let num = 0;
function nextButton() {
    let nextPic = document.getElementById("picGallery");
    let city = document.getElementById("cityName");
    let destination = document.getElementById("nextDestination");
    num = num + 1;
    if (num >= gallery.length && cityName.length && nextDestination.length) {
        num = 0;
    }
    nextPic.src = gallery[num];
    city.innerHTML = cityName[num];
    destination.innerHTML = nextDestination[num];

    //Adding a class with the setAttribute method, changing color in CSS
    destination.setAttribute("class", "changeColor");
}
function previousButton() {
    let nextPic = document.getElementById("picGallery");
    let city = document.getElementById("cityName");
    let destination = document.getElementById("nextDestination");
    num = num - 1;
    if (num < 0) {
        num = gallery.length -1;
        num += cityName.length -1;
        num += nextDestination.length -1;
        num = 0;
    }
    nextPic.src = gallery[num];
    city.innerHTML = cityName[num];
    destination.innerHTML = nextDestination[num];
}
//Interacting with the DOM
let payment = document.getElementById("payment");
payment.innerHTML = "Make your payment!";

// Hide Reservation Form

const buttonHideForm = document.getElementById("hideForm");
const reservationForm = document.querySelector("form");
const buttonShowForm =  document.getElementById("showForm");

buttonHideForm.addEventListener("click", () => {
    reservationForm.style.display = "none";
    buttonShowForm.style.display = "block";
    buttonHideForm.style.display = "none"
});

// Show Reservation Form 
buttonShowForm.addEventListener("click", () => {
    reservationForm.style.display = "block";
    buttonShowForm.style.display = "none";
    buttonHideForm.style.display = "block"
});