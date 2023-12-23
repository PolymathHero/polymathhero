// BEGIN SCRIPT TO CHANGE HEADER ON SCROLL
document.addEventListener("DOMContentLoaded", function () {
    var header = document.getElementById("myHeader");
    var headerIcons = document.querySelectorAll(".header-icon-svg");
    let headerShoppingBagCounter = document.querySelector('.header-shopping-bag-quantity-notification-span');

    window.onscroll = function () {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            header.classList.add("scrolled");
            headerIcons.forEach(function (icon) {
                icon.classList.add("scrolled");
            });
            headerShoppingBagCounter.classList.add('scrolled');
        } else {
            header.classList.remove("scrolled");
            headerIcons.forEach(function (icon) {
                icon.classList.remove("scrolled");
            });
            headerShoppingBagCounter.classList.remove('scrolled');
        }
    };
});
// END SCRIPT TO CHANGE HEADER ON SCROLL

// BEGIN HEADER APPEARANCE ON HOVER on computers
document.addEventListener("DOMContentLoaded", function () {
    var header = document.getElementById("myHeader");
    var anchorElements = header.getElementsByTagName("a");
    var barElements = document.querySelectorAll(".bar");
    var headerIcons = document.querySelectorAll(".header-icon-svg");
    let headerShoppingBagCounter = document.querySelector('.header-shopping-bag-quantity-notification-span');

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
            headerShoppingBagCounter.classList.add('on-header-hover');

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
            headerShoppingBagCounter.classList.remove('on-header-hover');

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

// END HEADER APPEARANCE ON HOVER on computers

// BEGIN hamburger menu (On click) SCRIPT
function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change-nav");
    document.getElementById("menu-bg").classList.toggle("change-bg");
    document.getElementById("myHeader").classList.toggle("on-menu-click-header");
    document.querySelector('.header-hamburger-menu-white-strip-div-for-computer').classList.toggle('after-clicking-on-hamburger-menu-icon-to-open-hamburger-menu');
    document.querySelector('.menu-bg-inside-bg-div').classList.toggle('after-clicking-on-hamburger-menu-icon-in-header');

    // Iterate over each header-icon-svg element and toggle the class
    var headerIcons = document.querySelectorAll(".header-icon-svg");
    headerIcons.forEach(function (icon) {
        icon.classList.toggle("on-menu-click-header-icon");
    });

    // Toggle the class on the header shopping bag counter
    let headerShoppingBagCounter = document.querySelector('.header-shopping-bag-quantity-notification-span');
    headerShoppingBagCounter.classList.toggle('on-menu-click');

    // Toggle menu-opened class on body
    document.body.classList.toggle("menu-opened");

    // Begin mouseout event on header if you close the menu and your mouse is under the header bar
    // Define header like the close shopping bag menu function so that we can trigger mouseout on the header when we close the menu
    const header = document.getElementById('myHeader');

    // Check if the mouse cursor is below the header offset height
    const mouseY = event.clientY || event.touches[0].clientY;
    const headerHeight = header.offsetHeight;

    // if mouse cursor is under the header offset height whatever that means then trigger a mouseout event as if the user just left the header
    if (mouseY > headerHeight) {
        // Trigger mouseout on the header
        const mouseoutEvent = new Event('mouseout');
        header.dispatchEvent(mouseoutEvent);
    }
}

// END hamburger menu (On click) SCRIPT

// BEGIN EMAIL US (On click)
function emailUsOnClick() {
    var emailUsContentDiv = document.querySelector('.email-us-content-div');
    if (emailUsContentDiv) {
        emailUsContentDiv.classList.toggle('email-us-content-div-on-email-us-click');
    }
}
// END EMAIL US (On click)

// BEGIN CALCULATE HEADER HEIGHT AND MAKE MAIN ELEMENT BELOW THAT
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

// BEGIN Add JavaScript for swipe functionality for the product page image container ??
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

// BEGIN PRODUCT CARD IMAGE BUTTONS (LEFT AND RIGHT)
document.querySelectorAll('.product-card-div').forEach((card, index) => {
    const container = card.querySelector('.product-card-img-container-div');
    const leftBtn = card.querySelector('.product-card-left-chevron-button');
    const rightBtn = card.querySelector('.product-card-right-chevron-button');
    const scrollAmount = 1;

    // Get the total width of the container
    const containerWidth = container.scrollWidth;

    leftBtn.addEventListener('click', () => {
        container.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });

        // Check if the scroll position is less than 0, then wrap to the end
        if (container.scrollLeft <= 0) {
            container.scrollLeft = containerWidth;
        }
    });

    rightBtn.addEventListener('click', () => {
        container.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });

        // Check if the scroll position is at the end, then wrap to the beginning
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
            container.scrollLeft = 0;
        }
    });
});
// END PRODUCT CARD IMAGE BUTTONS (LEFT AND RIGHT)

/* BEGIN SHOPPING BAG */
// BEGIN ADD 1 EVERY TIME YOU PRESS PLACE IN CART
// Function to add 1 to the shopping cart variable
function placeInBag() {
    // Retrieve the bagQuantity from localStorage, or default to 0 if it doesn't exist
    let bagQuantity = parseInt(localStorage.getItem('bagQuantity')) || 0;

    bagQuantity++;
    // Store the updated bagQuantity in localStorage
    localStorage.setItem('bagQuantity', bagQuantity);

    document.querySelector('.header-shopping-bag-quantity-notification-span').innerHTML = bagQuantity;
    document.querySelector('.shopping-bag-menu-on-click-title-h1-span-quantity').innerHTML = bagQuantity;
}
// END ADD 1 EVERY TIME YOU PRESS PLACE IN CART

// BEGIN UPDATE .header-shopping-bag-quantity-notification-span WITH bagQuantity from localStorage on page load
window.onload = function () {
    // Retrieve the bagQuantity from localStorage, or default to 0 if it doesn't exist
    let bagQuantity = parseInt(localStorage.getItem('bagQuantity')) || 0;

    // Set the inner HTML of the element to the bagQuantity
    document.querySelector('.header-shopping-bag-quantity-notification-span').innerHTML = bagQuantity;
    document.querySelector('.shopping-bag-menu-on-click-title-h1-span-quantity').innerHTML = bagQuantity;
}
// END UPDATE .header-shopping-bag-quantity-notification-span WITH bagQuantity from localStorage on page load

//BEGIN OPEN SHOPPING BAG MENU ON CLICKING SHOPPING BAG ICON IN HEADER
document.querySelector('.shopping-bag-icon-container-button').addEventListener('click', function () {
    document.querySelector('.shopping-bag-icon-container-div-2').classList.add('after-clicking-on-shopping-bag-icon');
    document.querySelector('.shopping-bag-white-menu-half-div-for-computer').classList.add('after-clicking-on-shopping-bag-icon');
    document.querySelector('.shopping-bag-in-page-menu-div-for-computer').classList.add('after-clicking-on-shopping-bag-icon');
    document.querySelector('.shopping-bag-dark-menu-half-div-for-computer').classList.add('after-clicking-on-shopping-bag-icon');
    // Begin keep header changed when shopping bag menu is open (not only one hover): open header classes
    document.getElementById("myHeader").classList.add("on-menu-click-header");

    // Iterate over each header-icon-svg element and toggle the class
    var headerIcons = document.querySelectorAll(".header-icon-svg");
    headerIcons.forEach(function (icon) {
        icon.classList.add("on-menu-click-header-icon");
    });

    // Toggle the class on the header shopping bag counter
    let headerShoppingBagCounter = document.querySelector('.header-shopping-bag-quantity-notification-span');
    headerShoppingBagCounter.classList.add('on-menu-click');

    // End keep header changed when shopping bag menu is open (not only one hover): open header classes
});

//END OPEN SHOPPING BAG MENU ON CLICKING SHOPPING BAG ICON IN HEADER
// BEGIN CLOSE SHOPPING BAG ICON MENU ON CLICK either the X or by clicking outisde the shopping bag (clicking the dark half)
// Function to remove classes, and trigger mouseout on the header when we close the shopping bag menu
function removeClassesAndTriggerMouseoutOnShoppingBagMenuClose(event) {

    const closeButton = document.querySelector('.close-shopping-bag-in-page-menu-div-button-for-computer');
    const darkMenu = document.querySelector('.shopping-bag-dark-menu-half-div-for-computer');
    const whiteMenu = document.querySelector('.shopping-bag-white-menu-half-div-for-computer');
    const header = document.getElementById('myHeader');

    document.querySelector('.shopping-bag-icon-container-div-2').classList.remove('after-clicking-on-shopping-bag-icon');

    /* Begin keep header changed when shopping bag menu is open (not only on hover): close header classes
     because this function is for when the shopping bag menu is closed */
    document.getElementById("myHeader").classList.remove("on-menu-click-header");

    // Iterate over each header-icon-svg element and toggle the class
    var headerIcons = document.querySelectorAll(".header-icon-svg");
    headerIcons.forEach(function (icon) {
        icon.classList.remove("on-menu-click-header-icon");
    });

    // Toggle the class on the header shopping bag counter
    let headerShoppingBagCounter = document.querySelector('.header-shopping-bag-quantity-notification-span');
    headerShoppingBagCounter.classList.remove('on-menu-click');

    /* End keep header changed when shopping bag menu is open (not only one hover): close header classes
     because this function is for when the shopping bag menu is closed */

    // Remove classes on shopping bag menu close
    whiteMenu.classList.remove('after-clicking-on-shopping-bag-icon');
    darkMenu.classList.remove('after-clicking-on-shopping-bag-icon');

    // Check if the mouse cursor is below the header offset height
    const mouseY = event.clientY || event.touches[0].clientY;
    const headerHeight = header.offsetHeight;

    // if mouse cursor is under the header offset height whatever that means then trigger a mouseout event as if the user just left the header
    if (mouseY > headerHeight) {
        // Trigger mouseout on the header
        const mouseoutEvent = new Event('mouseout');
        header.dispatchEvent(mouseoutEvent);
    }
}

// Add the event listeners so that the function is called when the user clicks the close button or the dark half
document.querySelector('.close-shopping-bag-in-page-menu-div-button-for-computer').addEventListener('click', removeClassesAndTriggerMouseoutOnShoppingBagMenuClose);
document.querySelector('.shopping-bag-dark-menu-half-div-for-computer').addEventListener('click', removeClassesAndTriggerMouseoutOnShoppingBagMenuClose);

// END CLOSE SHOPPING BAG ICON ON CLICK either the X or by clicking outisde the shopping bag (clicking the dark half)
/* END SHOPPING BAG */