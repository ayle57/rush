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
    const reveal = () => {
        sections.forEach((section, i) => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 80) {
                setTimeout(() => {
                    section.classList.add('visible');
                }, i * 120); // 120ms stagger
            }
        });
    };
    window.addEventListener('scroll', reveal);
    reveal();
});