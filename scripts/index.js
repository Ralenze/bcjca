// Cache frequently accessed DOM elements
let logo, menuBtn, menu, nav, img;

window.addEventListener("load", function () {
    window.scrollTo(0, 0);
});

// Toggle menu visibility
function showBtn() {
    menu.style.display = "block";
    menuBtn.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        if (nav === undefined || img === undefined) return;
        if (window.scrollY > 250) {
            if (nav.style.position === "fixed") return;
            nav.style.position = "fixed";
            nav.style.top = "0";
            nav.style.left = "0";
            nav.style.right = "0";
            nav.style.zIndex = "100000";
            nav.style.padding = "0.1em 1em";
            nav.style.backgroundColor = "rgba(4, 8, 27, 0.6)";
            nav.style.backdropFilter = "blur(4px)";
            img.style.width = "50px";
            img.style.height = "50px";
        } else {
            if (nav.style.position === "relative" || window.scrollY > 0) return;
            nav.style.position = "relative";
            nav.style.top = "0";
            nav.style.left = "0";
            nav.style.right = "0";
            nav.style.padding = "1em 3em";
            nav.style.backgroundColor = "transparent";
            nav.style.backdropFilter = "none";
            img.style.width = "120px";
            img.style.height = "120px";
        }
    });
});

logo = document.getElementById("logo");
menuBtn = document.getElementById("menubtn");
menu = document.getElementById("menu");
nav = document.querySelector("nav");
img = nav.children[0].children[0];

// Home page only:
function scrollToElement(elementId) {
    const targetElement = document.getElementById(elementId);
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
        });
    }
}

document
    .querySelector(".has-submenu a")
    .addEventListener("click", function (e) {
        e.preventDefault();
        const submenu = this.parentNode.querySelector(".submenu");
        if (submenu.style.display === "block") {
            submenu.style.display = "none";
            this.parentNode.classList.remove("active-submenu");
        } else {
            submenu.style.display = "block";
            this.parentNode.classList.add("active-submenu");
        }
    });
