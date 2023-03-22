document.addEventListener('DOMContentLoaded', () => {
  const productImage = document.querySelector('.product-image');
  const productInfo = document.querySelector('.product-info');

  // Animation for product image
  anime({
    targets: productImage,
    translateY: [-30, 0],
    opacity: [0, 1],
    duration: 1000,
    easing: 'easeOutCubic',
  });

  // Animation for product info
  anime({
    targets: productInfo,
    translateY: [30, 0],
    opacity: [0, 1],
    duration: 1000,
    easing: 'easeOutCubic',
    delay: 500,
  });
});
