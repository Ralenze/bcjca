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
                img1.onclick = openPopup;
                img1.onmouseover = openPopup;
                photobanner1.appendChild(img1);

                const club2 = shuffledData2[i];
                const img2 = document.createElement("img");
                img2.src = club2.image;
                img2.alt = club2.name;
                img2.onclick = openPopup;
                img2.onmouseover = openPopup;
                photobanner2.appendChild(img2);
            }
        }
    });

function updatePhotoDisplay() {
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;

    maxScreenLength = Math.max(screenWidth, screenHeight);
    numPhotos = Math.floor(maxScreenLength / (100 + 8));
    numLoops = 2 + Math.floor(numPhotos / Math.floor(storedData.length / 2));

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
            img1.onclick = openPopup;
            img1.onmouseover = openPopup;
            photobanner1.appendChild(img1);

            const club2 = shuffledData2[i];
            const img2 = document.createElement("img");
            img2.src = club2.image;
            img2.alt = club2.name;
            img2.onclick = openPopup;
            img2.onmouseover = openPopup;
            photobanner2.appendChild(img2);
        }
    }
}

window.addEventListener("resize", updatePhotoDisplay);

function resetPopup(event) {
    const popup = document.getElementById("popup");
    console.log(event.target);
    console.log(
        popup.open,
        event.target !== popup,
        !popup.contains(event.target)
    );
    if (
        popup.open &&
        event.target !== popup &&
        !popup.contains(event.target) &&
        event.target.parentNode.className !== "photobanner" &&
        event.target.className !== "photobanner"
    ) {
        popup.close();
        popup.open = false;
        event.preventDefault();
    }
}

document.addEventListener("click", resetPopup);
document.addEventListener("mouseover", resetPopup);

function openPopup(event) {
    const popup = document.getElementById("popup");
    if (popup.open) {
        popup.open = false;
    }

    fetch("info/clubinfo.json")
        .then((response) => response.json())
        .then((data) => {
            data.shift();
            const club = data.find((club) => club.name === event.target.alt);
            const popupContent = document.getElementById("popup-content");
            popupContent.innerHTML = "";

            let h2 = document.createElement("h2");
            h2.innerHTML = club.name;
            popupContent.appendChild(h2);

            const contact = club["contact"];

            if (contact.leaders.length > 0) {
                p = document.createElement("p");
                leaders = contact.leaders;
                text = "";
                if (leaders.length === 1) {
                    text = leaders[0];
                } else if (leaders.length === 2) {
                    text = leaders.join(" and ");
                } else if (leaders.length > 2) {
                    last = leaders.pop();
                    text = `${leaders.join(", ")}, and ${last}`;
                }
                p.innerHTML = `<i class="fa-solid fa-users"></i> ${text}`;
                popupContent.appendChild(p);
            }

            if (contact.email) {
                p = document.createElement("p");
                a = document.createElement("a");
                a.href = `mailto:${contact.email}`;
                a.innerHTML = `<i class="fa-solid fa-envelope"></i> Contact Us`;
                a.target = "_blank";
                a.rel = "noopener noreferrer";
                p.appendChild(a);
                popupContent.appendChild(p);
            }

            if (contact.location) {
                p = document.createElement("p");
                p.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${contact.location}`;
                popupContent.appendChild(p);
            }

            if (contact.discord) {
                p = document.createElement("p");
                a = document.createElement("a");
                a.href = contact.discord;
                a.innerHTML = `<i class="fa-brands fa-discord"></i> Discord`;
                a.target = "_blank";
                a.rel = "noopener noreferrer";
                p.appendChild(a);
                popupContent.appendChild(p);
            }

            if (contact.instagram) {
                p = document.createElement("p");
                a = document.createElement("a");
                a.href = `https://instagram.com/${contact.instagram}`;
                a.innerHTML = `<i class="fa-brands fa-instagram"></i> Instagram`;
                a.target = "_blank";
                a.rel = "noopener noreferrer";
                p.appendChild(a);
                popupContent.appendChild(p);
            }

            clubCardTop = document.createElement("div");
            clubCardTop.className = "clubcardtop";
            const popupImage = document.getElementById("popup-image");
            if (club.image === "") {
                popupImage.src = "images/defaultclublogo.jpg";
            } else {
                popupImage.src = club.image;
            }
            img.alt = club.name;
        });

    popup.show();
}
