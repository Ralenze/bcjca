let prev_img = document.getElementById("prev");
let main_img = document.getElementById("main");
let next_img = document.getElementById("next");

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
let main = 0;
let min = 0;
let max = van_west_pics.length - 1;

function setup() {
    main_img.src = `gallery/van_west/${van_west_pics[main]}.webp`;
    next_img.src = `gallery/van_west/${van_west_pics[main + 1]}.webp`;
}

function prev() {
    console.log("prev");
    main = Math.max(main - 1, min);
    if (main > min) {
        prev_img.src = `gallery/van_west/${van_west_pics[main - 1]}.webp`;
    } else {
        prev_img.src = "";
    }
    main_img.src = `gallery/van_west/${van_west_pics[main]}.webp`;
    next_img.src = `gallery/van_west/${van_west_pics[main + 1]}.webp`;
}

function next() {
    console.log("next");
    main = Math.min(main + 1, max);
    if (main < max) {
        next_img.src = `gallery/van_west/${van_west_pics[main + 1]}.webp`;
    } else {
        next_img.src = "";
    }
    main_img.src = `gallery/van_west/${van_west_pics[main]}.webp`;
    prev_img.src = `gallery/van_west/${van_west_pics[main - 1]}.webp`;
}