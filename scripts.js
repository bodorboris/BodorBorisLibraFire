//buttons changing color on click event
function btnChangeColor(event) {
  const clickedBtn = event.currentTarget;
  clickedBtn.style.backgroundColor = "#EBAA3F";
}

const buttons = document.querySelectorAll(".btn");
buttons.forEach(function (button) {
  button.addEventListener("click", btnChangeColor);
});

//changing the logo image on click event screen 2
function toggleLogo(logoElement) {
  const logo = logoElement;
  const currentSrc = logo.src;
  const newSrc = logo.dataset.src;

  logo.src = newSrc;
  logo.dataset.src = currentSrc;
}

//sec5 button visibility in footer
function toggleButtonVisibility() {
  const contactUsBtn = document.querySelector(".content4 .btn");
  const currentVisibility = window.getComputedStyle(contactUsBtn).visibility;

  if (currentVisibility === "hidden") {
    contactUsBtn.style.visibility = "visible";
  } else {
    contactUsBtn.style.visibility = "hidden";
  }
}

// timed rotation of images for header in screen 1
const images = document.querySelectorAll(".image-container img");
let currentImageIndex = 0;

function rotateImages() {
  images[currentImageIndex].classList.remove("active");
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].classList.add("active");
}

setInterval(rotateImages, 1500);

// toggling the dropdown on screen 1
function toggleDropdown() {
  const optionsList = document.querySelector(".options-list");
  optionsList.style.display =
    optionsList.style.display === "none" || optionsList.style.display === ""
      ? "block"
      : "none";
}

// attempt at making a galery function for screen 3 before running out of time
// function rotate() {
//     const images = document.querySelectorAll(".img");
//     const left = document.querySelector(".left");
//     const right = document.querySelector(".right");
//     const center = document.querySelector(".center");

//     left.addEventListener("click", function () {
//         for (let i = 0; i < images.length; i++) {
//         images[i].style.display = "none";
//         }
//         images[0].style.display = "block";
//         images[1].style.display = "block";
//         images[2].style.display = "block";
//     });

//     center.addEventListener("click", function () {
//         for (let i = 0; i < images.length; i++) {
//         images[i].style.display = "none";
//         }
//         images[3].style.display = "block";
//         images[4].style.display = "block";
//         images[5].style.display = "block";
//     });

//     right.addEventListener("click", function () {
//         for (let i = 0; i < images.length; i++) {
//         images[i].style.display = "none";
//         }
//         images[6].style.display = "block";
//         images[7].style.display = "block";
//         images[8].style.display = "block";
//     });
// }

function alertSorry() {
  alert(
    "This is a premium feature. Please log in to use this feature, or hire Boris, thank you!"
  );
}
