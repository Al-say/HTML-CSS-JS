// Main JavaScript file for cross-platform functionality

document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scrolling for better user experience
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add touch support for mobile devices
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        card.addEventListener('touchstart', () => {
            card.style.transform = 'translateY(-5px)';
        });
        card.addEventListener('touchend', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});
