// BEGIN SCRIPT TO CHANGE HEADER ON SCROLL
document.addEventListener("DOMContentLoaded", function () {
    var header = document.getElementById("myHeader");

    window.onscroll = function () {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    };
});
// END SCRIPT TO CHANGE HEADER ON SCROLL

// BEGIN HEADER APPEARANCE ON HOVER
document.addEventListener("DOMContentLoaded", function () {
    var header = document.getElementById("myHeader");
    var anchorElements = header.getElementsByTagName("a");
    var barElements = document.querySelectorAll(".bar");

    // Check if the device supports touch events
    var isTouchDevice = 'ontouchstart' in document.documentElement;

    // If it's not a touch device, add mouseover and mouseout events
    if (!isTouchDevice) {
        header.addEventListener("mouseover", function () {
            // Your mouseover styles
            header.style.backgroundColor = "white";
            header.style.borderBottom = "1px solid #ececec";

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

/*
// BEGIN CALCULATE #MENU-BG HEIGHT BY REDUCING HEADER HEIGHT FROM 100VH
// Function to adjust menu-bg height based on header height
function adjustMenuBgHeight() {
    var headerHeight = document.querySelector('header').offsetHeight;
    document.getElementById('menu-bg').style.height = `calc(100vh - ${headerHeight}px)`;
}

// Call the function on page load
window.addEventListener('load', adjustMenuBgHeight);

// Call the function on window resize to handle responsive design
window.addEventListener('resize', adjustMenuBgHeight);
// END CALCULATE #MENU-BG HEIGHT BY REDUCING HEADER HEIGHT FROM 100VH
*/

// BEGIN MENU (On click) SCRIPT
function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change-nav");
    document.getElementById("menu-bg").classList.toggle("change-bg");
    document.getElementById("myHeader").classList.toggle("on-menu-click-header");

    // Toggle menu-opened class on body
    document.body.classList.toggle("menu-opened");
}
// END MENU (On click) SCRIPT

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