document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('[data-scroll-container]');
    if (container && typeof LocomotiveScroll !== "undefined") {
        const scroll = new LocomotiveScroll({
            el: container,
            smooth: true,
            multiplier: 0.6,
            lerp: 0.08
        });
    }

    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, i * 120);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    sections.forEach(section => observer.observe(section));
});