import "./components/navbar.js"
import "./components/landing.js"
import "./components/services.js"

const linkLegal = document.querySelector(".link-legal");
const linkUtil = document.querySelector(".link-util");

linkLegal.addEventListener("click", (e) => {
    e.preventDefault();
    alert("C'est légal")
})

linkUtil.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Pas besoin de condition d'utilisation, t'as juste à scroller pour utiliser le site")
})