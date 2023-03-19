document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.querySelector('.circle').style.background = 'linear-gradient(315deg, #6a95e7, #1db0c6)';
    });

    card.addEventListener('mouseleave', () => {
        card.querySelector('.circle').style.background = 'linear-gradient(135deg, #6a95e7, #1db0c6)';
    });
});
