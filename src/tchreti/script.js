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
});