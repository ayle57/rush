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

import TypeIt from "typeit";

new TypeIt("#typing-title", {
    strings: "Lorem ipsum dolor sit amet",
    speed: 50,
    waitUntilVisible: true,
}).go();