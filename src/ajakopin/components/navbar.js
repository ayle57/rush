const navbarLinks = document.querySelector('ul.navbar-links');
const items = navbarLinks.querySelectorAll('li');
const homeLink = document.querySelector('a.navbar-brand');

let activeIndex = -1;
let animationInProgress = false;

function setPastilleToHome() {
    if (animationInProgress) return;

    items.forEach(i => i.classList.remove('active'));
    activeIndex = -1;
    navbarLinks.style.setProperty('--home-active', '1');
    navbarLinks.style.setProperty('--active', '0');
    navbarLinks.style.setProperty('--pos-x', '0px');
    navbarLinks.classList.remove('cta-active');
}

function animatePastilleBetweenLinks(newIndex) {
    if (animationInProgress) return;
    animationInProgress = true;
    navbarLinks.classList.add('moving');

    const currentIndex = activeIndex;
    const navbarRect = navbarLinks.getBoundingClientRect();

    const newItem = items[newIndex];
    const isCta = newItem.classList.contains('cta');

    let startX, endX;

    if (currentIndex < 0) {
        const newRect = newItem.getBoundingClientRect();
        endX = newRect.left - navbarRect.left + newRect.width / 2;

        navbarLinks.style.setProperty('--pos-x', `${endX}px`);
        navbarLinks.style.setProperty('--active', '1');
        navbarLinks.style.setProperty('--home-active', '0');

        items.forEach(i => i.classList.remove('active'));
        newItem.classList.add('active');
        activeIndex = newIndex;

        animationInProgress = false;
        navbarLinks.classList.remove('moving');
        return;
    }

    const currentRect = items[currentIndex].getBoundingClientRect();
    const newRect = newItem.getBoundingClientRect();

    startX = currentRect.left - navbarRect.left + currentRect.width / 2;
    endX = newRect.left - navbarRect.left + newRect.width / 2;

    if (isCta) {
        navbarLinks.classList.add('cta-active');
        newItem.classList.add('cta-transition');
        setTimeout(() => {
            newItem.classList.remove('cta-transition');
        }, 200);
    } else {
        navbarLinks.classList.remove('cta-active');
    }

    navbarLinks.style.transition = 'transform 0.15s ease, width 0.15s ease, height 0.15s ease, border-radius 0.15s ease';
    navbarLinks.style.setProperty('--pos-x', `${startX}px`);
    navbarLinks.style.setProperty('--active', '0');

    requestAnimationFrame(() => {
        navbarLinks.style.transition = 'transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), width 0.35s cubic-bezier(0.22, 1, 0.36, 1), height 0.35s cubic-bezier(0.22, 1, 0.36, 1), border-radius 0.35s cubic-bezier(0.22, 1, 0.36, 1)';
        navbarLinks.style.setProperty('--pos-x', `${endX}px`);
        navbarLinks.style.setProperty('--active', '1');

        items.forEach(i => i.classList.remove('active'));
        newItem.classList.add('active');
        activeIndex = newIndex;

        setTimeout(() => {
            animationInProgress = false;
            navbarLinks.classList.remove('moving');
        }, 350);
    });
}


homeLink.addEventListener('click', e => {
    e.preventDefault();
    if (activeIndex !== -1) setPastilleToHome();
});

items.forEach((item, index) => {
    item.addEventListener('click', e => {
        e.preventDefault();
        if (activeIndex === index) {
            setPastilleToHome();
        } else {
            animatePastilleBetweenLinks(index);
        }
    });
});

window.addEventListener('load', () => {
    setPastilleToHome();
});

window.addEventListener('resize', () => {
    if (activeIndex >= 0) {
        const evt = new Event('click');
        items[activeIndex].dispatchEvent(evt);
    }
});

