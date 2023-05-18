let galleries = document.getElementById("galleries");
let imageDescriptions = document.getElementById("imageDescriptions");

let first_img = document.getElementById("first");
let prev_img = document.getElementById("prev");
let main_img = document.getElementById("main");
let next_img = document.getElementById("next");
let last_img = document.getElementById("last");

let first_span = document.getElementById("firstSpan");
let prev_span = document.getElementById("prevSpan");
let next_span = document.getElementById("nextSpan");
let last_span = document.getElementById("lastSpan");

const default_pics = ["default_left", "default_middle", "default_right"];
default_pics.name = "default";
const burnaby_pics = {
    "20230514_131321": "1. Front view of the matches",
    "20230514_131340": "2. Back view of the matches",
    "20230514_131401": "3. Side view of the matches",
    "20230514_131517": "4. Trophy",
    "20230514_132707": "5. POV of the matches",
    "20230514_165215": "6. All of the participants",
    "20230514_165436": "7. The winning team",
};
burnaby_pics.name = "burnaby";
const van_east_pics = {
    IMG_4177: "1. Overview of the matches",
    IMG_4179: "2. Trophy",
    IMG_4181: "3. Matches",
    IMG_4182: "4. Matches",
    IMG_4183: "5. Matches",
    IMG_4184: "6. Matches",
    IMG_4190: "7. The winning team",
    IMG_4195: "8. All the participants",
};
van_east_pics.name = "van_east";
const van_west_pics = {
    DSC_1309: "1. The venue",
    DSC_1324: "2. Overview of the matches",
    DSC_1348: "3. Matches",
    DSC_1365: "4. Matches",
    DSC_1384: "5. Matches",
    DSC_1403: "6. Matches",
    DSC_1441: "7. Matches",
    DSC_1446: "8. Matches",
    DSC_1469: "9. Trophy",
    DSC_1475: "10. Matches",
    DSC_1517: "11. The winning team",
    DSC_1521: "12. All the participants",
};
van_west_pics.name = "van_west";
const richmond_pics = {
    IMG_0781: "1. Overview of the matches",
    IMG_0783: "2. Different angle of the matches",
    IMG_0805: "3. Trophy",
    IMG_0836: "4. Matches",
    IMG_0841: "5. Matches",
    IMG_0842: "6. Matches",
    IMG_0843: "7. Matches",
    IMG_0873: "8. The winning team",
    IMG_0871: "9. All the participants",
};
richmond_pics.name = "richmond";
let images = burnaby_pics; // choose the latest gallery
let main = 0;
let min = 0;
let max = Object.keys(images).length - 2; // not '- 1' because of the 'name' property

function updateSelect() {
    imageDescriptions.innerHTML = "";
    for (let image of Object.keys(images)) {
        if (image === "name") continue;
        let option = document.createElement("option");
        option.value = image;
        option.text = images[image];
        option.selected = image === Object.keys(images)[main];
        imageDescriptions.appendChild(option);
    }
}

function setup() {
    if (images.name === "default") {
        galleries.value = "default";
        first_img.src = ``;
        prev_img.src = ``;
        main_img.src = ``;
        next_img.src = ``;
        last_img.src = ``;
        first_span.hidden = true;
        prev_span.hidden = true;
        next_span.hidden = true;
        last_span.hidden = true;
        main_img.classList.add("disable-hover");
    } else {
        first_img.src = `gallery/${images.name}/${
            Object.keys(images)[min]
        }.webp`;
        prev_img.src = `gallery/${images.name}/${
            Object.keys(images)[main - 1]
        }.webp`;
        next_img.src = `gallery/${images.name}/${
            Object.keys(images)[main + 1]
        }.webp`;
        last_img.src = `gallery/${images.name}/${
            Object.keys(images)[max]
        }.webp`;
        first_span.hidden = false;
        prev_span.hidden = false;
        next_span.hidden = false;
        last_span.hidden = false;
        if (main === min) {
            first_img.src = ``;
            prev_img.src = ``;
            first_span.hidden = true;
            prev_span.hidden = true;
        } else if (main === max) {
            next_img.src = ``;
            last_img.src = ``;
            next_span.hidden = true;
            last_span.hidden = true;
        }
        if (main === min + 1) {
            prev_img.src = ``;
            prev_span.hidden = true;
        } else if (main === max - 1) {
            next_img.src = ``;
            next_span.hidden = true;
        }
        main_img.src = `gallery/${images.name}/${
            Object.keys(images)[main]
        }.webp`;
        main_img.classList.remove("disable-hover");
    }
    updateSelect();
}

function first() {
    main = min;
    main_img.src = `gallery/${images.name}/${Object.keys(images)[main]}.webp`;
    next_img.src = `gallery/${images.name}/${
        Object.keys(images)[main + 1]
    }.webp`;
    last_img.src = `gallery/${images.name}/${Object.keys(images)[max]}.webp`;
    first_img.src = "";
    prev_img.src = "";
    first_span.hidden = true;
    prev_span.hidden = true;
    next_span.hidden = false;
    last_span.hidden = false;
    updateSelect();
}

function prev() {
    main = Math.max(main - 1, min);
    if (main > min) {
        prev_img.src = `gallery/${images.name}/${
            Object.keys(images)[main - 1]
        }.webp`;
        first_img.src = `gallery/${images.name}/${
            Object.keys(images)[min]
        }.webp`;
        prev_span.hidden = false;
        first_span.hidden = false;
    } else {
        prev_img.src = "";
        first_img.src = "";
        prev_span.hidden = true;
        first_span.hidden = true;
    }
    main_img.src = `gallery/${images.name}/${Object.keys(images)[main]}.webp`;
    next_img.src = `gallery/${images.name}/${
        Object.keys(images)[main + 1]
    }.webp`;
    last_img.src = `gallery/${images.name}/${Object.keys(images)[max]}.webp`;
    next_span.hidden = false;
    last_span.hidden = false;
    if (main === min + 1) {
        prev_img.src = "";
        prev_span.hidden = true;
    }
    if (main === max - 1) {
        next_img.src = "";
        next_span.hidden = true;
    }
    updateSelect();
}

function next() {
    main = Math.min(main + 1, max);
    if (main < max) {
        next_img.src = `gallery/${images.name}/${
            Object.keys(images)[main + 1]
        }.webp`;
        last_img.src = `gallery/${images.name}/${
            Object.keys(images)[max]
        }.webp`;
        next_span.hidden = false;
        last_span.hidden = false;
    } else {
        next_img.src = "";
        last_img.src = "";
        next_span.hidden = true;
        last_span.hidden = true;
    }
    main_img.src = `gallery/${images.name}/${Object.keys(images)[main]}.webp`;
    first_img.src = `gallery/${images.name}/${Object.keys(images)[min]}.webp`;
    prev_img.src = `gallery/${images.name}/${
        Object.keys(images)[main - 1]
    }.webp`;
    first_span.hidden = false;
    prev_span.hidden = false;
    if (main === min + 1) {
        prev_img.src = "";
        prev_span.hidden = true;
    }
    if (main === max - 1) {
        next_img.src = "";
        next_span.hidden = true;
    }
    updateSelect();
}

function last() {
    main = max;
    main_img.src = `gallery/${images.name}/${Object.keys(images)[main]}.webp`;
    first_img.src = `gallery/${images.name}/${Object.keys(images)[min]}.webp`;
    prev_img.src = `gallery/${images.name}/${
        Object.keys(images)[main - 1]
    }.webp`;
    first_span.hidden = false;
    prev_span.hidden = false;
    next_img.src = "";
    last_img.src = "";
    next_span.hidden = true;
    last_span.hidden = true;
    updateSelect();
}

const imageMapping = {
    default: default_pics,
    burnaby: burnaby_pics,
    richmond: richmond_pics,
    van_west: van_west_pics,
    van_east: van_east_pics,
};

function selectChange(event) {
    images = imageMapping[event.target.value] || default_pics;
    images.name = event.target.value;
    main = 0;
    min = 0;
    max = Object.keys(images).length - 2;
    setup();
}

function imageDescChange(event) {
    main = Object.keys(images).indexOf(event.target.value);
    setup();
}
