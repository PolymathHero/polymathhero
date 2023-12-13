// BEGIN SCRIPT TO CHANGE HEADER ON SCROLL
document.addEventListener("DOMContentLoaded", function () {
    var header = document.getElementById("myHeader");
    var headerIcons = document.querySelectorAll(".header-icon-img");

    window.onscroll = function () {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            header.classList.add("scrolled");
            headerIcons.forEach(function (icon) {
                icon.classList.add("scrolled");
            });
        } else {
            header.classList.remove("scrolled");
            headerIcons.forEach(function (icon) {
                icon.classList.remove("scrolled");
            });
        }
    };
});
// END SCRIPT TO CHANGE HEADER ON SCROLL

// BEGIN HEADER APPEARANCE ON HOVER
document.addEventListener("DOMContentLoaded", function () {
    var header = document.getElementById("myHeader");
    var anchorElements = header.getElementsByTagName("a");
    var barElements = document.querySelectorAll(".bar");
    var headerIcons = document.querySelectorAll(".header-icon-img");

    // Check if the device supports touch events
    var isTouchDevice = 'ontouchstart' in document.documentElement;

    // If it's not a touch device, add mouseover and mouseout events
    if (!isTouchDevice) {
        header.addEventListener("mouseover", function () {
            // Your mouseover styles
            header.style.backgroundColor = "white";
            header.style.borderBottom = "1px solid #ececec";
            headerIcons.forEach(function (icon) {
                icon.classList.add("on-header-hover");
            });

            // Change color of anchor elements inside the header
            for (var i = 0; i < anchorElements.length; i++) {
                anchorElements[i].style.color = "black";
            }

            // Loop through each bar element and update its color
            barElements.forEach(function (bar) {
                bar.style.backgroundColor = "black";
            });
        });

        header.addEventListener("mouseout", function () {
            // Your mouseout styles
            header.style.backgroundColor = "";
            header.style.borderBottom = "";
            headerIcons.forEach(function (icon) {
                icon.classList.remove("on-header-hover");
            });

            // Reset anchor element colors
            for (var i = 0; i < anchorElements.length; i++) {
                anchorElements[i].style.color = "";
            }

            // Reset bar colors
            barElements.forEach(function (bar) {
                bar.style.backgroundColor = "";
            });
        });
    }
});
// END HEADER APPEARANCE ON HOVER

// BEGIN MENU (On click) SCRIPT
function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change-nav");
    document.getElementById("menu-bg").classList.toggle("change-bg");
    document.getElementById("myHeader").classList.toggle("on-menu-click-header");

    // Iterate over each header-icon-img element and toggle the class
    var headerIcons = document.querySelectorAll(".header-icon-img");
    headerIcons.forEach(function (icon) {
        icon.classList.toggle("on-menu-click-header-icon");
    });

    // Toggle menu-opened class on body
    document.body.classList.toggle("menu-opened");
}
// END MENU (On click) SCRIPT

// BEGIN EMAIL US (On click)
function emailUsOnClick() {
    var emailUsContentDiv = document.querySelector('.email-us-content-div');
    if (emailUsContentDiv) {
        emailUsContentDiv.classList.toggle('email-us-content-div-on-email-us-click');
    }
}
// END EMAIL US (On click)

//MAIN ELEMENT TOP MARGIN = HEADER HEIGHT (FOR NON-INDEX-PAGES)
document.addEventListener('DOMContentLoaded', function () {
    var nonIndexHeader = document.querySelector('.non-index-header');
    var mainElement = document.querySelector('main');

    // Set initial margin for main element based on header height
    mainElement.style.marginTop = nonIndexHeader.offsetHeight + 'px';

    // Update margin if the window is resized
    window.addEventListener('resize', function () {
        mainElement.style.marginTop = nonIndexHeader.offsetHeight + 'px';
    });
});
// END CALCULATE HEADER HEIGHT AND MAKE MAIN ELEMENT BELOW THAT

// BEGIN VIDEO PLAY PAUSE BUTTON
function togglePlayPause() {
    var video = document.getElementById("myVideo");
    if (video.paused) {
        video.play();
        document.getElementById("playPauseBtn").innerHTML = "⏸"; // Pause symbol
    } else {
        video.pause();
        document.getElementById("playPauseBtn").innerHTML = "▶️"; // Play symbol
    }
}
// END VIDEO PLAY PAUSE BUTTON

// Add JavaScript for swipe functionality
document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.querySelector(".product-page-image-container");

    let isScrolling = false;

    imageContainer.addEventListener("scroll", function () {
        if (!isScrolling) {
            window.requestAnimationFrame(function () {
                // Add logic for updating UI or performing actions based on scroll position
                isScrolling = false;
            });

            isScrolling = true;
        }
    });
});


// Loop through each product card
document.querySelectorAll('.product-card-div').forEach((card, index) => {
    const container = card.querySelector('.product-card-img-container-div');
    const leftBtn = card.querySelector('.product-card-left-chevron-button');
    const rightBtn = card.querySelector('.product-card-right-chevron-button');

    let scrollAmount = 150;

    leftBtn.addEventListener('click', () => {
        container.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    rightBtn.addEventListener('click', () => {
        container.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
});
