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

    if (newTop <= 15) {
        backImage.style.top = `${newTop}vh`;
    }
});

new TypeIt("#typing-title", {
    speed: 60,
    waitUntilVisible: true,
})
    // 1ère phrase complète
    .type("Bienvenue sur mon site web !", { delay: 200 })
    .pause(1500)
    .move(-1)
    .delete(9)
    .type("portfolio ", { delay: 300 })
    .pause(1500)
    .move(-28)
    .delete(28)
    // tape nouvelle phrase
    .type("Découvrez mes réalisations", { delay: 300 })
    .pause(1500)
    // efface "réalisations" (11 caractères)
    .move(-11)
    .delete(11)
    // remplace par "compétences"
    .type("compétences", { delay: 300 })
    .pause(1500)
    // efface tout après "Bienvenue sur mon " (18+13=31 caractères)
    .move(null, { to: "START" })
    .move(30) // position après "Bienvenue sur mon Découvrez mes "
    .delete(13) // supprime "compétences"
    // tape dernière phrase
    .type("Hésite pas à me contacter !", { delay: 300 })
    .go();

