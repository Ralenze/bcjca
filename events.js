var script = document.createElement("script");
script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
document.getElementsByTagName("head")[0].appendChild(script);

$(document).ready(function () {
    let toSlide = $(".slider");
    toSlide[0].style.opacity = "1";
    toSlide[0].style.left = "35%";
});

function link() {
    window.open($(".flip-card-back").data("location"), "_blank");
}

function eventCards() {
    console.log("eventcards");
    fetch("events.json")
        .then((response) => response.json())
        .then((data) => {
            data.shift();
            const timeline = document.getElementById("timeline");
            timeline.className = "timeline";

            let card, inner, front, back, h2, p, h6, details, button;
            let cards = [];

            for (let i = 0; i < data.length; i++) {
                card = document.createElement("div");
                card.className = `container ${i % 2 === 0 ? "left" : "right"}`;

                inner = document.createElement("div");
                inner.className = "flip-card-inner";

                front = document.createElement("div");
                front.className = "content flip-card-front";

                h2 = document.createElement("h2");
                h2.innerHTML = data[i].date;
                front.appendChild(h2);

                p = document.createElement("p");
                p.innerHTML = data[i].name;
                front.appendChild(p);

                details = document.createElement("div");
                details.className = "details";

                h6 = document.createElement("h6");
                h6.innerHTML = `<i class="fa-solid fa-location-dot"></i> `;
                h6.innerHTML += data[i]["details"]["where"];
                h6.innerHTML += ` <i class="fa-solid fa-clock"></i> `;
                h6.innerHTML += data[i]["details"]["time"];
                h6.innerHTML += ` <i class="fa-solid fa-stopwatch-20"></i> `;
                h6.innerHTML += data[i]["details"]["clock"];
                details.appendChild(h6);

                front.appendChild(details);

                inner.appendChild(front);

                back = document.createElement("div");
                back.className = "flip-card-back";
                back.setAttribute("data-location", data[i].link);
                back.onclick = link;

                button = document.createElement("button");
                button.className = "eventBtn";
                button.innerHTML = "Join!";
                back.appendChild(button);

                inner.appendChild(back);

                card.appendChild(inner);

                cards.push(card);
            }
            timeline.replaceChildren(...cards);
        })
        .catch((error) => console.log(error));
}
