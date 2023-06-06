/*  The below code is for the legacy club cards that were
    in place before the conveyor belt was implemented.     */

// function schoolCards() {
//     console.log("schoolcards");
//     fetch("info/clubinfo.json")
//         .then((response) => response.json())
//         .then((data) => {
//             data.shift();
//             const clubCardHolder = document.getElementById("clubcardholder");
//             clubCardHolder.innerHTML = "";
//             clubCardHolder.className = "grid-container animate-grid";
//             let clubCard,
//                 info,
//                 h2,
//                 contact,
//                 p,
//                 leaders,
//                 text,
//                 last,
//                 a,
//                 clubCardTop,
//                 img,
//                 clubLeader,
//                 clubCardBottom;

//             for (let i = 0; i < data.length; i++) {
//                 clubCard = document.createElement("div");
//                 clubCard.className = "clubcard grid-item";

//                 info = document.createElement("div");
//                 info.className = "info";

//                 h2 = document.createElement("h2");
//                 h2.innerHTML = `-EST. ${data[i].est}-`;
//                 h2.style = "padding-bottom: 0;";
//                 info.appendChild(h2);

//                 contact = data[i]["contact"];

//                 if (contact.leaders.length > 0) {
//                     p = document.createElement("p");
//                     leaders = contact.leaders;
//                     text = "";
//                     if (leaders.length === 1) {
//                         text = leaders[0];
//                     } else if (leaders.length === 2) {
//                         text = leaders.join(" and ");
//                     } else if (leaders.length > 2) {
//                         last = leaders.pop();
//                         text = `${leaders.join(", ")}, and ${last}`;
//                     }
//                     p.innerHTML = `<i class="fa-solid fa-users"></i> ${text}`;
//                     info.appendChild(p);
//                 }

//                 if (contact.email) {
//                     p = document.createElement("p");
//                     a = document.createElement("a");
//                     a.href = `mailto:${contact.email}`;
//                     a.innerHTML = `<i class="fa-solid fa-envelope"></i> Contact Us`;
//                     a.target = "_blank";
//                     a.rel = "noopener noreferrer";
//                     p.appendChild(a);
//                     info.appendChild(p);
//                 }

//                 if (contact.location) {
//                     p = document.createElement("p");
//                     p.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${contact.location}`;
//                     info.appendChild(p);
//                 }

//                 if (contact.discord) {
//                     p = document.createElement("p");
//                     a = document.createElement("a");
//                     a.href = contact.discord;
//                     a.innerHTML = `<i class="fa-brands fa-discord"></i> Discord`;
//                     a.target = "_blank";
//                     a.rel = "noopener noreferrer";
//                     p.appendChild(a);
//                     info.appendChild(p);
//                 }

//                 if (contact.instagram) {
//                     p = document.createElement("p");
//                     a = document.createElement("a");
//                     a.href = `https://instagram.com/${contact.instagram}`;
//                     a.innerHTML = `<i class="fa-brands fa-instagram"></i> Instagram`;
//                     a.target = "_blank";
//                     a.rel = "noopener noreferrer";
//                     p.appendChild(a);
//                     info.appendChild(p);
//                 }

//                 clubCard.appendChild(info);

//                 clubCardTop = document.createElement("div");
//                 clubCardTop.className = "clubcardtop";
//                 img = document.createElement("img");
//                 if (data[i].image === "") {
//                     img.src = "images/defaultclublogo.jpg";
//                 } else {
//                     img.src = data[i].image;
//                 }
//                 img.alt = data[i].name;
//                 img.width = "200";
//                 img.height = "200";
//                 clubCardTop.appendChild(img);

//                 clubLeader = document.createElement("div");
//                 clubLeader.className = "clubleader";
//                 clubCardTop.appendChild(clubLeader);
//                 clubCard.appendChild(clubCardTop);

//                 clubCardBottom = document.createElement("div");
//                 clubCardBottom.className = "clubcardbottom";

//                 h2 = document.createElement("h2");
//                 h2.innerHTML = data[i].name;
//                 clubCardBottom.appendChild(h2);
//                 clubCard.appendChild(clubCardBottom);

//                 clubCardHolder.appendChild(clubCard);
//             }
//         })
//         .catch((error) => console.log(error));
// }

// document.addEventListener("DOMContentLoaded", function () {
//     window.addEventListener("scroll", function () {
//         const grid = document.querySelector(".animate-grid");
//         const gridItems = document.querySelectorAll(".grid-item");
//         const viewportHeight = window.innerHeight;
//         const gridRect = grid.getBoundingClientRect();
//         const gridTop = gridRect.top;
//         const gridBottom = gridRect.bottom;

//         if (gridTop < viewportHeight && gridBottom > 0) {
//             grid.style.opacity = 1;
//             gridItems.forEach((item) => {
//                 const itemRect = item.getBoundingClientRect();
//                 const itemTop = itemRect.top;
//                 const itemBottom = itemRect.bottom;

//                 if (itemTop < viewportHeight && itemBottom > 0) {
//                     item.style.transform = "translateY(0)";
//                     item.style.opacity = 1;
//                 } else {
//                     item.style.transform = "translateY(100px)";
//                     item.style.opacity = 0;
//                 }
//             });
//         } else {
//             grid.style.opacity = 0;
//             gridItems.forEach((item) => {
//                 item.style.transform = "translateY(100px)";
//                 item.style.opacity = 0;
//             });
//         }
//     });
// });

function getPromiseFromEvent(item, event) {
    return new Promise((resolve) => {
        const listener = async () => {
            item.removeEventListener(event, listener);
            item.classList.add("hide");
            resolve();
            return;
        };
        item.classList.add("aboutslider");
        item.classList.remove("hide");
        item.addEventListener(event, listener);
    });
}

async function slidetextabout() {
    let slidex = document.getElementsByClassName("clubtitle");
    let slider = slidex[0].children;
    let incrementer = 0;
    const num = slider.length;
    while (true) {
        await getPromiseFromEvent(slider[incrementer], "animationend");
        incrementer++;
        incrementer %= num;
    }
}

const photobanner1 = document.getElementById("photobanner1");
const photobanner2 = document.getElementById("photobanner2");
let shuffledData1, shuffledData2;
let screenWidth, screenHeight;
let maxScreenLength, numPhotos, numLoops;
let storedData;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

fetch("info/clubinfo.json")
    .then((response) => response.json())
    .then((data) => {
        data.shift();
        storedData = data;

        shuffledData1 = shuffleArray([...data]);
        shuffledData2 = shuffleArray([...data]);

        screenWidth = window.innerWidth;
        screenHeight = window.innerHeight;

        maxScreenLength = Math.max(screenWidth, screenHeight);
        numPhotos = Math.floor(maxScreenLength / (100 + 8));
        numLoops = 2 + Math.floor(numPhotos / Math.floor(data.length / 2));
        // number to cover the screen length

        for (let x = 0; x < numLoops; x++) {
            for (let i = 0; i < data.length; i++) {
                const club1 = shuffledData1[i];
                const img1 = document.createElement("img");
                img1.src = club1.image;
                img1.alt = club1.name;
                photobanner1.appendChild(img1);

                const club2 = shuffledData2[i];
                const img2 = document.createElement("img");
                img2.src = club2.image;
                img2.alt = club2.name;
                photobanner2.appendChild(img2);
            }
        }
    });

function updatePhotoDisplay() {
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;

    maxScreenLength = Math.max(screenWidth, screenHeight);
    numPhotos = Math.floor(maxScreenLength / (100 + 8));
    numLoops = 1 + Math.floor(numPhotos / Math.floor(storedData.length / 2));

    // Clear existing photos
    photobanner1.innerHTML = "";
    photobanner2.innerHTML = "";

    for (let x = 0; x < numLoops; x++) {
        // number to cover screen length
        for (let i = 0; i < storedData.length; i++) {
            const club1 = shuffledData1[i];
            const img1 = document.createElement("img");
            img1.src = club1.image;
            img1.alt = club1.name;
            photobanner1.appendChild(img1);

            const club2 = shuffledData2[i];
            const img2 = document.createElement("img");
            img2.src = club2.image;
            img2.alt = club2.name;
            photobanner2.appendChild(img2);
        }
    }
}

window.addEventListener("resize", updatePhotoDisplay);
