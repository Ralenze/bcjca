let galleries = document.getElementById("galleries");
let prev_img = document.getElementById("prev");
let main_img = document.getElementById("main");
let next_img = document.getElementById("next");

const default_pics = ["default_left", "default_middle", "default_right"];
default_pics.name = "default";
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
let images = default_pics;
images.name = "default";
let main = 0;
let min = 0;
let max = images.length - 1;

function setup() {
    if (images.name === "default") {
        galleries.value = "default";
        prev_img.src = `gallery/${images.name}/${images[main]}.webp`;
        main_img.src = `gallery/${images.name}/${images[main + 1]}.webp`;
        next_img.src = `gallery/${images.name}/${images[main + 2]}.webp`;
        main_img.classList.add("disable-hover");
    } else {
        main_img.src = `gallery/${images.name}/${images[main]}.webp`;
        next_img.src = `gallery/${images.name}/${images[main + 1]}.webp`;
        prev_img.src = "";
        main_img.classList.remove("disable-hover");
    }
}

function prev() {
    main = Math.max(main - 1, min);
    if (main > min) {
        prev_img.src = `gallery/${images.name}/${images[main - 1]}.webp`;
    } else {
        prev_img.src = "";
    }
    main_img.src = `gallery/${images.name}/${images[main]}.webp`;
    next_img.src = `gallery/${images.name}/${images[main + 1]}.webp`;
}

function next() {
    main = Math.min(main + 1, max);
    if (main < max) {
        next_img.src = `gallery/${images.name}/${images[main + 1]}.webp`;
    } else {
        next_img.src = "";
    }
    main_img.src = `gallery/${images.name}/${images[main]}.webp`;
    prev_img.src = `gallery/${images.name}/${images[main - 1]}.webp`;
}

const imageMapping = {
    default: default_pics,
    burnaby: burnaby_pics,
    richmond: richmond_pics,
    van_west: van_west_pics,
};

function selectChange(event) {
    images = imageMapping[event.target.value] || default_pics;
    images.name = event.target.value;
    main = 0;
    min = 0;
    max = images.length - 1;
    setup();
}
