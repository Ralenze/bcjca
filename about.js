function schoolCards() {
    console.log("schoolcards");
    fetch("clubinfo.json")
        .then((response) => response.json())
        .then((data) => {
            data.shift();
            const clubCardHolder = document.getElementById("clubcardholder");
            clubCardHolder.innerHTML = "";
            clubCardHolder.className = "grid-container animate-grid";

            for (let i = 0; i < data.length; i++) {
                let clubCard = document.createElement("div");
                clubCard.className = "clubcard grid-item";

                let info = document.createElement("div");
                info.className = "info";

                let h1 = document.createElement("h1");
                h1.innerHTML = `-EST. ${data[i].est}-`;
                h1.style = "padding-bottom: 0;";
                info.appendChild(h1);

                let br = document.createElement("br");
                info.appendChild(br);

                let p = document.createElement("p");
                p.innerHTML = `${data[i].description}`;
                info.appendChild(p);

                br = document.createElement("br");
                info.appendChild(br);

                const contact = data[i]["contact"];

                if (contact.leaders.length > 0) {
                    p = document.createElement("p");
                    let leaders = contact.leaders;
                    let text = "";
                    if (leaders.length === 1) {
                        text = leaders[0];
                    } else if (leaders.length === 2) {
                        text = leaders.join(" and ");
                    } else if (leaders.length > 2) {
                        const last = leaders.pop();
                        text = `${leaders.join(", ")}, and ${last}`;
                    }
                    p.innerHTML = `<i class="fa-solid fa-users"></i> ${text}`;
                    info.appendChild(p);
                }

                if (contact.email) {
                    p = document.createElement("p");
                    let a = document.createElement("a");
                    a.href = `mailto:${contact.email}`;
                    a.innerHTML = `<i class="fa-solid fa-envelope"></i> Contact Us`;
                    p.appendChild(a);
                    info.appendChild(p);
                }

                if (contact.location) {
                    p = document.createElement("p");
                    p.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${contact.location}`;
                    info.appendChild(p);
                }

                if (contact.discord) {
                    p = document.createElement("p");
                    a = document.createElement("a");
                    a.href = contact.discord;
                    a.innerHTML = `<i class="fa-brands fa-discord"></i> Discord`;
                    p.appendChild(a);
                    info.appendChild(p);
                }

                clubCard.appendChild(info);

                let clubCardTop = document.createElement("div");
                clubCardTop.className = "clubcardtop";
                let img = document.createElement("img");
                if (data[i].image === "") {
                    img.src = "images/defaultclublogo.jpg";
                } else {
                    img.src = data[i].image;
                }
                img.alt = data[i].name;
                img.style.width = "400px";
                img.style.height = "400px";
                clubCardTop.appendChild(img);
                let clubLeader = document.createElement("div");
                clubLeader.className = "clubleader";
                clubCardTop.appendChild(clubLeader);
                clubCard.appendChild(clubCardTop);

                let clubCardBottom = document.createElement("div");
                clubCardBottom.className = "clubcardbottom";
                h1 = document.createElement("h1");
                h1.innerHTML = data[i].name;
                clubCardBottom.appendChild(h1);
                clubCard.appendChild(clubCardBottom);

                clubCardHolder.appendChild(clubCard);
            }
        })
        .catch((error) => console.log(error));
}

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        const grid = document.querySelector(".animate-grid");
        const gridItems = document.querySelectorAll(".grid-item");
        const viewportHeight = window.innerHeight;
        const gridRect = grid.getBoundingClientRect();
        const gridTop = gridRect.top;
        const gridBottom = gridRect.bottom;

        if (gridTop < viewportHeight && gridBottom > 0) {
            grid.style.opacity = 1;
            gridItems.forEach((item) => {
                const itemRect = item.getBoundingClientRect();
                const itemTop = itemRect.top;
                const itemBottom = itemRect.bottom;

                if (itemTop < viewportHeight && itemBottom > 0) {
                    item.style.transform = "translateY(0)";
                    item.style.opacity = 1;
                } else {
                    item.style.transform = "translateY(100px)";
                    item.style.opacity = 0;
                }
            });
        } else {
            grid.style.opacity = 0;
            gridItems.forEach((item) => {
                item.style.transform = "translateY(100px)";
                item.style.opacity = 0;
            });
        }
    });
});
