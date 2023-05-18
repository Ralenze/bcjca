let galleries = document.getElementById("galleries");

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
const burnaby_pics = [
    "20230514_131321",
    "20230514_131340",
    "20230514_131401",
    "20230514_131517",
    "20230514_132707",
    "20230514_165215",
    "20230514_165436",
];
burnaby_pics.name = "burnaby";
const van_east_pics = [
    "IMG_4177",
    "IMG_4179",
    "IMG_4181",
    "IMG_4182",
    "IMG_4183",
    "IMG_4184",
    "IMG_4190",
    "IMG_4195",
];
van_east_pics.name = "van_east";
const van_west_pics = [
    "DSC_1309",
    "DSC_1324",
    "DSC_1348",
    "DSC_1365",
    "DSC_1384",
    "DSC_1403",
    "DSC_1441",
    "DSC_1446",
    "DSC_1469",
    "DSC_1475",
    "DSC_1517",
    "DSC_1521",
];
van_west_pics.name = "van_west";
const richmond_pics = [
    "IMG_0781",
    "IMG_0783",
    "IMG_0805",
    "IMG_0836",
    "IMG_0841",
    "IMG_0842",
    "IMG_0843",
    "IMG_0873",
    "IMG_0871",
];
richmond_pics.name = "richmond";
let images = burnaby_pics; // choose the latest gallery
let main = 0;
let min = 0;
let max = images.length - 1;

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
        main_img.src = `gallery/${images.name}/${images[main]}.webp`;
        next_img.src = `gallery/${images.name}/${images[main + 1]}.webp`;
        last_img.src = `gallery/${images.name}/${images[max]}.webp`;
        first_img.src = "";
        prev_img.src = "";
        first_span.hidden = true;
        prev_span.hidden = true;
        next_span.hidden = false;
        last_span.hidden = false;
        main_img.classList.remove("disable-hover");
    }
}

function first() {
    main = min;
    main_img.src = `gallery/${images.name}/${images[main]}.webp`;
    next_img.src = `gallery/${images.name}/${images[main + 1]}.webp`;
    last_img.src = `gallery/${images.name}/${images[max]}.webp`;
    first_img.src = "";
    prev_img.src = "";
    first_span.hidden = true;
    prev_span.hidden = true;
    next_span.hidden = false;
    last_span.hidden = false;
}

function prev() {
    main = Math.max(main - 1, min);
    if (main > min) {
        prev_img.src = `gallery/${images.name}/${images[main - 1]}.webp`;
        first_img.src = `gallery/${images.name}/${images[min]}.webp`;
        prev_span.hidden = false;
        first_span.hidden = false;
    } else {
        prev_img.src = "";
        first_img.src = "";
        prev_span.hidden = true;
        first_span.hidden = true;
    }
    main_img.src = `gallery/${images.name}/${images[main]}.webp`;
    next_img.src = `gallery/${images.name}/${images[main + 1]}.webp`;
    last_img.src = `gallery/${images.name}/${images[max]}.webp`;
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
    console.log(main, max);
}

function next() {
    main = Math.min(main + 1, max);
    if (main < max) {
        next_img.src = `gallery/${images.name}/${images[main + 1]}.webp`;
        last_img.src = `gallery/${images.name}/${images[max]}.webp`;
        next_span.hidden = false;
        last_span.hidden = false;
    } else {
        next_img.src = "";
        last_img.src = "";
        next_span.hidden = true;
        last_span.hidden = true;
    }
    main_img.src = `gallery/${images.name}/${images[main]}.webp`;
    first_img.src = `gallery/${images.name}/${images[min]}.webp`;
    prev_img.src = `gallery/${images.name}/${images[main - 1]}.webp`;
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
}

function last() {
    main = max;
    main_img.src = `gallery/${images.name}/${images[main]}.webp`;
    first_img.src = `gallery/${images.name}/${images[min]}.webp`;
    prev_img.src = `gallery/${images.name}/${images[main - 1]}.webp`;
    first_span.hidden = false;
    prev_span.hidden = false;
    next_img.src = "";
    last_img.src = "";
    next_span.hidden = true;
    last_span.hidden = true;
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
    max = images.length - 1;
    setup();
}
