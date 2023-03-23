document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".product-title");
  const image = document.querySelector(".product-image");
  const buttons = document.querySelectorAll("button");

  title.animate([{opacity: 0}, {opacity: document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".product-title");
  const image = document.querySelector(".product-image");
  const buttons = document.querySelectorAll("button");

  title.animate([{opacity: 0}, {opacity: 1}], {duration: 1000, easing: 'ease-out'});
  image.animate([{transform: 'scale(0)'}, {transform: 'scale(1)'}], {duration: 1000, easing: 'ease-out'});

  buttons.forEach((button, index) => {
    button.addEventListener("mouseover", () => {
      button.animate([{transform: 'rotate(0deg)'}, {transform: 'rotate(360deg)'}], {duration: 500, easing: 'ease-out'});
    });

    button.addEventListener("click", () => {
      button.animate([{backgroundColor: 'rgba(255, 255, 255, 0.5)'}, {backgroundColor: button.style.backgroundColor}], {duration: 200, easing: 'ease-out'});
    });

    button.animate([{opacity: 0, transform: `translateY(20px)`}, {opacity: 1, transform: `translateY(0)`}], {duration: 1000, easing: 'ease-out', delay: index * 200 + 1000});
  });
});
