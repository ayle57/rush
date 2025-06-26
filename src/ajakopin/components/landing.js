// main.js (ou ton fichier JS principal)

import TypeIt from "typeit";

window.addEventListener('scroll', () => {
    const container = document.querySelector('.landingSection .screen-container');
    const backImage = document.querySelector(".img-container-back");
    if (!container || !backImage) return;

    const minPadding = 2.5;
    const maxPadding = 7.5;
    const scrollY = window.scrollY;
    const maxScroll = window.innerHeight;

    const scrollRatio = Math.min(scrollY / maxScroll, 1);

    const currentPadding = maxPadding - (maxPadding - minPadding) * scrollRatio;
    container.style.padding = `${currentPadding}vh`;

    const base = 20;
    const newTop = base * scrollRatio;

    if (newTop <= 10) {
        backImage.style.top = `${newTop}vh`;
    }

    if(newTop >= 10) {
        backImage.style.top = '10vh';
    }
});

new TypeIt("#typing-title", {
    speed: 60,
    waitUntilVisible: true,
})
    .type("Bienvenue sur mon site web", { delay: 300 })
    .pause(800)
    .delete(8)
    .type("portfolio", { delay: 300 })
    .delete(null)
    .type("Découvrez mes <em class='highlight'>projets</em>", { delay: 300 })
    .pause(800)
    .delete(7)
    .type("compétences", { delay: 300 })
    .pause(800)
    .delete(null)
    .type("N'hésitez pas à me contacter", { delay: 300 })
    .go();
