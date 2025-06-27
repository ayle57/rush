const section = document.querySelector('.servicesSection');
const sectionInner = document.querySelector('.servicesSection-inner');
const container = document.querySelector('.servicesSection-container');
const items = document.querySelectorAll('.service-item');
const viewportWidth = window.innerWidth;
const containerScrollWidth = container.scrollWidth;
const scrollableDistance = containerScrollWidth - viewportWidth;
const scrollMultiplier = 1.8;

section.style.height = (scrollableDistance * scrollMultiplier + window.innerHeight) + 'px';

let target = 0;
let current = 0;
const ease = 0.1;

function smoothScroll() {
    current += (target - current) * ease;
    container.style.transform = `translateX(-${current}px)`;

    items.forEach((item, i) => {
        const itemCenter = i * item.offsetWidth;
        const itemDistance = Math.abs(current - itemCenter);
        const fadeZone = viewportWidth / 1.5;

        if (itemDistance < fadeZone) {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
        }
    });

    requestAnimationFrame(smoothScroll);
}

window.addEventListener('scroll', () => {
    const sectionTop = section.offsetTop;
    const scrollY = window.scrollY;

    if (scrollY >= sectionTop && scrollY <= sectionTop + scrollableDistance * scrollMultiplier) {
        target = (scrollY - sectionTop) / scrollMultiplier;
        sectionInner.classList.add('active-bg');
    } else {
        sectionInner.classList.remove('active-bg');
    }
});


smoothScroll();
