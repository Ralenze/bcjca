// Cache frequently accessed DOM elements
let lightIcon, logo, menuBtn, menu, nav, img;

// Toggle light/dark mode
function toggleLightMode() {
    if (lightIcon.style.color === "white") {
        lightIcon.style.color = "rgba(255, 240, 0, 1)";
        logo.src = "images/bcjcalight.webp";
    } else {
        lightIcon.style.color = "white";
        logo.src = "images/bcjcalogo.webp";
    }
}

// Toggle menu visibility
function showBtn() {
    menu.style.display = "block";
    menuBtn.style.display = "none";
}

async function loadComponents() {
    const components = document.querySelectorAll("[html-src]");
    const promises = [];

    for (const component of components) {
        const promise = fetch(component.getAttribute("html-src"))
            .then((res) => res.text())
            .then((html) => {
                component.innerHTML = html + component.innerHTML;
            });

        promises.push(promise);
    }

    await Promise.all(promises);
}

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        if (nav === undefined || img === undefined) return;
        if (window.scrollY > 0) {
            nav.style.position = "fixed";
            nav.style.top = "0";
            nav.style.left = "0";
            nav.style.right = "0";
            nav.style.zIndex = "100000";
            nav.style.padding = "0.1em 1em";
            nav.style.backgroundColor = "rgba(4, 8, 27, 0.8)";
            img.style.width = "50px";
            img.style.height = "50px";
        } else {
            nav.style.position = "relative";
            nav.style.top = "0";
            nav.style.left = "0";
            nav.style.right = "0";
            nav.style.padding = "1em 3em";
            nav.style.backgroundColor = "transparent";
            img.style.width = "120px";
            img.style.height = "120px";
        }
    });
});

// Initialize the page
async function init() {
    // loadComponents().then(() => {
    lightIcon = document.getElementById("light");
    logo = document.getElementById("logo");
    menuBtn = document.getElementById("menubtn");
    menu = document.getElementById("menu");
    nav = document.querySelector("nav");
    img = nav.children[0].children[0];

    // lightIcon.style.color = "white";
    // toggleLightMode(); // initialize one to change for black background
    window.scrollTo(0, 0); // scroll to top
    // });
}

init();
