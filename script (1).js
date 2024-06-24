// script.js
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'linear-gradient(90deg, #005, #0055aa)';
        } else {
            navbar.style.background = 'linear-gradient(90deg, #00f, #00a)';
        }
    });
});
