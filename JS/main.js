/**
 * Main JavaScript file for enhanced functionality and performance
 */

document.addEventListener('DOMContentLoaded', () => {
    initializeSmoothScrolling();
    initializeLazyLoading();
});

function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            try {
                const targetId = this.getAttribute('href');
                const target = document.querySelector(targetId);

                if (!target) {
                    console.warn(`Scroll target not found: ${targetId}`);
                    return;
                }

                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            } catch (error) {
                console.error('Error during smooth scroll:', error);
            }
        });
    });
}

function initializeLazyLoading() {
    // Add lazy loading for images if added in the future
    if ('loading' in HTMLImageElement.prototype) {
        document.querySelectorAll('img[data-src]').forEach(img => {
            img.src = img.dataset.src;
            img.loading = 'lazy';
        });
    } else {
        // Fallback for browsers that don't support native lazy loading
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lozad.js/1.16.0/lozad.min.js';
        script.async = true;
        script.onload = () => {
            const observer = lozad();
            observer.observe();
        };
        document.body.appendChild(script);
    }
}

// Add error tracking
window.addEventListener('error', (e) => {
    console.error('Global error:', {
        message: e.message,
        source: e.filename,
        line: e.lineno,
        column: e.colno,
        error: e.error
    });
});
