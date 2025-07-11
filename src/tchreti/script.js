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

    let burgerMenu = document.getElementById("burgerMenu");
    let openBurger = document.getElementById("openBurger");
    let closeBurger = document.getElementById("closeBurger");
    let burgerLinks = document.querySelectorAll('.burger-link');

    if (openBurger && closeBurger && burgerMenu) {
        openBurger.onclick = function() {
            burgerMenu.classList.add("active");
            openBurger.classList.add("active");
            openBurger.setAttribute("aria-expanded", "true");
            burgerMenu.setAttribute("aria-hidden", "false");
            setTimeout(() => burgerLinks[0]?.focus(), 100);
        };
        closeBurger.onclick = function() {
            burgerMenu.classList.remove("active");
            openBurger.classList.remove("active");
            openBurger.setAttribute("aria-expanded", "false");
            burgerMenu.setAttribute("aria-hidden", "true");
            openBurger.focus();
        };
        burgerLinks.forEach(function(link) {
            link.onclick = function() {
                burgerMenu.classList.remove("active");
                openBurger.classList.remove("active");
                openBurger.setAttribute("aria-expanded", "false");
                burgerMenu.setAttribute("aria-hidden", "true");
                openBurger.focus();
            };
        });
        document.addEventListener('keydown', function(e) {
            if (e.key === "Escape" && burgerMenu.classList.contains("active")) {
                burgerMenu.classList.remove("active");
                openBurger.classList.remove("active");
                openBurger.setAttribute("aria-expanded", "false");
                burgerMenu.setAttribute("aria-hidden", "true");
                openBurger.focus();
            }
        });
    };