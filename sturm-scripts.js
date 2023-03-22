// Simple animation to fade in the title
document.addEventListener('DOMContentLoaded', function() {
  const title = document.getElementById('animated-title');
  let opacity = 0;
  const fadeIn = setInterval(function() {
    if (opacity >= 1) {
      clearInterval(fadeIn);
    } else {
      opacity += 0.1;
      title.style.opacity = opacity;
    }
  }, 100);
});
