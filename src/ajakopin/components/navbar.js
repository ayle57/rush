const navbarLinks = document.querySelector('ul.navbar-links');
const items = navbarLinks.querySelectorAll('li');
const homeLink = document.querySelector('a.navbar-brand');

let activeIndex = -1;
let animationInProgress = false;

function setPastilleToLink(index) {
    items.forEach(i => i.classList.remove('active'));
    items[index].classList.add('active');
    activeIndex = index;

    const item = items[index];
    const itemRect = item.getBoundingClientRect();
    const navbarRect = navbarLinks.getBoundingClientRect();

    const centerX = itemRect.left - navbarRect.left + itemRect.width / 2;

    navbarLinks.style.setProperty('--active', '1');
    navbarLinks.style.setProperty('--pos-x', `${centerX}px`);
    navbarLinks.style.setProperty('--home-active', '0');
}

function animatePastilleBetweenLinks(newIndex) {
    if (animationInProgress) return;
    animationInProgress = true;
    navbarLinks.classList.add('moving');

    const currentIndex = activeIndex;
    const navbarRect = navbarLinks.getBoundingClientRect();

    let startX, endX;

    const isCta = items[newIndex].classList.contains('cta');

    if (currentIndex < 0) {
        const newRect = items[newIndex].getBoundingClientRect();
        endX = newRect.left - navbarRect.left + newRect.width / 2;

        navbarLinks.classList.remove('cta-active');

        navbarLinks.style.setProperty('--pos-x', `${endX}px`);
        navbarLinks.style.setProperty('--active', '1');
        navbarLinks.style.setProperty('--home-active', '0');

        items.forEach(i => i.classList.remove('active'));
        items[newIndex].classList.add('active');
        activeIndex = newIndex;

        animationInProgress = false;
        navbarLinks.classList.remove('moving');
        return;
    }

    const currentRect = items[currentIndex].getBoundingClientRect();
    const newRect = items[newIndex].getBoundingClientRect();

    startX = currentRect.left - navbarRect.left + currentRect.width / 2;
    endX = newRect.left - navbarRect.left + newRect.width / 2;

    if (!isCta) {
        navbarLinks.classList.remove('cta-active');
    }

    navbarLinks.style.transition = 'transform 0.15s ease, width 0.15s ease, height 0.15s ease, border-radius 0.15s ease';
    navbarLinks.style.setProperty('--pos-x', `${startX}px`);
    navbarLinks.style.setProperty('--active', '0');

    requestAnimationFrame(() => {
        if (isCta) {
            navbarLinks.classList.add('cta-active');
        }

        navbarLinks.style.transition = 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), width 0.5s cubic-bezier(0.22, 1, 0.36, 1), height 0.5s cubic-bezier(0.22, 1, 0.36, 1), border-radius 0.5s cubic-bezier(0.22, 1, 0.36, 1)';
        navbarLinks.style.setProperty('--pos-x', `${endX}px`);
        navbarLinks.style.setProperty('--active', '1');

        items.forEach(i => i.classList.remove('active'));
        items[newIndex].classList.add('active');
        activeIndex = newIndex;

        setTimeout(() => {
            animationInProgress = false;
            navbarLinks.classList.remove('moving');
        }, 500);
    });
}

function setPastilleToHome() {
    if (animationInProgress) return;

    items.forEach(i => i.classList.remove('active'));
    activeIndex = -1;
    navbarLinks.style.setProperty('--home-active', '1');
    navbarLinks.style.setProperty('--active', '0');
    navbarLinks.style.setProperty('--pos-x', '0px');
}


homeLink.addEventListener('click', e => {
    e.preventDefault();

    if (activeIndex === -1) {
        return;
    }

    setPastilleToHome();
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
        setPastilleToLink(activeIndex);
    }
});
