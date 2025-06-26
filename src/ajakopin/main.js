const navbarLinks = document.querySelector('.navbar-links');
const home = document.querySelector('.navbar-links a.home');
const links = document.querySelectorAll('.navbar-links__list li a');
const indicator = document.querySelector('.active-indicator');

function moveIndicatorTo(element) {
    const navbarRect = navbarLinks.getBoundingClientRect();
    let elemRect;

    if (element === home) {
        elemRect = home.getBoundingClientRect();
        home.classList.add('home--active');
    } else {
        elemRect = element.parentElement.getBoundingClientRect();
        home.classList.remove('home--active');
    }

    const left = elemRect.left - navbarRect.left + navbarLinks.scrollLeft;

    indicator.style.width = `${elemRect.width}px`;
    indicator.style.height = `${elemRect.height}px`;
    indicator.style.left = `${left}px`;
    indicator.style.top = '5px';
}


moveIndicatorTo(home);

home.addEventListener('click', e => {
    e.preventDefault();
    moveIndicatorTo(home);
});

links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        moveIndicatorTo(link);
    });
});
