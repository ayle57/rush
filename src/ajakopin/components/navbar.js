const navbarLinks = document.querySelector('ul.navbar-links');
const items = navbarLinks.querySelectorAll('li');
const homeLink = document.querySelector('a.navbar-brand');

let activeIndex = -1;

function setPastilleToHome() {
    items.forEach(i => i.classList.remove('active'));
    activeIndex = -1;

    navbarLinks.style.setProperty('--active', 0);
    navbarLinks.style.setProperty('--pos-x', '0px');
}

function setPastilleToLink(index) {
    items.forEach(i => i.classList.remove('active'));
    items[index].classList.add('active');

    activeIndex = index;

    const liRect = items[index].getBoundingClientRect();
    const ulRect = navbarLinks.getBoundingClientRect();

    const paddingLeft = 5;

    const posX = liRect.left - ulRect.left + liRect.width / 2 - 10 - paddingLeft;

    navbarLinks.style.setProperty('--active', 1);
    navbarLinks.style.setProperty('--pos-x', `${posX}px`);
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
            setPastilleToLink(index);
        }
    });
});

window.addEventListener('load', () => {
    setPastilleToHome();
});
