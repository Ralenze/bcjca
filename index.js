// Cache frequently accessed DOM elements
let lightIcon, logo, menuBtn, menu;

// Toggle light/dark mode
function toggleLightMode() {
    if (lightIcon.style.color === "white") {
        lightIcon.style.color = "rgba(255, 240, 0, 1)";
        logo.src = "/images/bcjcalight.png";
    } else {
        lightIcon.style.color = "white";
        logo.src = "/images/bcjcalogo.png";
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

// Initialize the page
async function init() {
    loadComponents().then(() => {
        lightIcon = document.getElementById("light");
        logo = document.getElementById("logo");
        menuBtn = document.getElementById("menubtn");
        menu = document.getElementById("menu");

        lightIcon.style.color = "white";
        toggleLightMode(); // initialize one to change for black background
        window.scrollTo(0, 0); // scroll to top
    });
}

init();
