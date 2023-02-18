function letThereBeLight() {
    let icon = document.getElementById('light');
    let logo = document.getElementById('logo');
    if (icon.style.color === "white") {
        icon.style.color = "rgba(255, 240, 0, 1)";
        logo.src = "https://github.com/Ralenze/bcjca/blob/main/images/bcjcalight.png?raw=true"
    } else {
        icon.style.color = "white";
        logo.src = "https://github.com/Ralenze/bcjca/blob/main/images/bcjcalogo.png?raw=true"
    }
}

function showBtn() {
    console.log("made it here");
    let menubutton =  document.getElementById('menubtn');
    let menu = document.getElementById('menu');
    console.log(menu);
    menu.style.display = "block";
    menubutton.style.display = "none";
}

function hideBtn() {
    console.log("made it here");
    let menubutton =  document.getElementById('hidebtn');
    let menu = document.getElementById('menu');
    console.log(menu);
    menu.style.display = "none";
    let x =  document.getElementById('menubtn');
    x.style.display = "block";
}

function openExternalLink(a){
    console.log("made it here");
    switch(a){
        case 1:
            window.open('https://github.com/Ralenze/bcjca', "_blank");
            break;
        case 2:
            window.open('https://www.instagram.com/bcjrchess', "_blank");
            break; 
    }
}

function getPromiseFromEvent(item, event) {
    return new Promise( (resolve) => {
        const listener = async () => {
            item.removeEventListener(event, listener);
            item.classList.add('hide');
            resolve();
            return;
        }
        item.classList.add("aboutslider");
        item.classList.remove("hide");
        item.addEventListener(event, listener);
    })
  }

  /* 
This function selects all the span/words under our club title (BCJCA is about ). Then it selects one
to slide in and make visible. Repeats using incrementer
  */
slidetextabout = async () => {
    let slidex = document.getElementsByClassName('clubtitle');
   
    let slider = slidex[0].children;
    console.log(slider);
    let incrementer = 0;
    while(true) {
        let moduloselector = incrementer % 4;
        console.log(slider[moduloselector]);

        await getPromiseFromEvent(slider[moduloselector], "webkitAnimationEnd");
        incrementer++;
        console.log("iter finish");
    }
}

 /* 
 Basically, if we are in the about page we want some words to go in and out and we want to have 
 the orange bar underneath about... TODO that.
 */
let b = window.location.pathname;
console.log(b);
let x = b.toString();
if (x.includes("about")) 
    slidetextabout();

$(document).ready(function() {
    const calling = async() => {
        console.log("Made it!");
        console.log($(window).scrollTop());
        setTimeout(1000, calling); 
    }
    let displayCardRows = [true, true, true, true, true, true, true];
    let incrementer = 0;
    let b = window.location.pathname;
    console.log(b);
    let x = b.toString();
    const loadCards = async() => {
        if (
            $(window).scrollTop() + $(window).height() >= (1050 + 700 * incrementer) 
            && x.includes("about") 
            && displayCardRows[incrementer] == true
        ) {
            $('.clubcardrow')[incrementer].style.opacity = 1;
            $('.clubcardrow')[incrementer].style.left = 0;
            incrementer++;
            loadCards();
            console.log(incrementer);
        }
    }
    loadCards();
    $(window).scroll(loadCards); 
});

//#region HTMl components
// List total number of component need to load
let COMP_LOAD = document.querySelectorAll("[html-src]").length;
// Load all HTML using fetch
document.querySelectorAll("[html-src]").forEach(elm => {
    fetch(elm.getAttribute('html-src')).then(res => res.text())
    .then((res) => {
        elm.innerHTML = res + elm.innerHTML; // element got precedence
        compLoaded();
    });
});

function compLoaded() {
    COMP_LOAD -= 1;
    if (COMP_LOAD != 0) return; // if not done loading

    // All components looaded, recommend putting here instead of body.onload
    document.getElementById('light').style.color = 'white';
}
//#endregion