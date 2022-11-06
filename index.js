var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script);
// ... give time for script to load, then type (or see below for non wait option)

function showBtn(){
    console.log("made it here");
   let menubutton =  document.getElementById('menubtn');
   let menu = document.getElementById('menu');
   console.log(menu);
   menu.style.display = "block";
   menubutton.style.display = "none";
}

function hideBtn(){
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
let b = window.location.pathname;
console.log(b);
let x = b.toString();

function getPromiseFromEvent(item, event) {
    return new Promise( (resolve) => {
      const listener = async () => {
        
        item.removeEventListener(event, listener);
        item.classList.add('hide')
        resolve();
        return;
       

       
      }
      item.classList.add("aboutslider");
      item.classList.remove("hide")
      item.addEventListener(event, listener)
    
      
    })
  }

  /* 
This function selects all the span/words under our club title (BCJCA is about ). Then it selects one
to slide in and make visible. Repeats using incrementer
  */
 const slidetextabout = async () => {
    let slidex = document.getElementsByClassName('clubtitle');
   
    let slider = slidex[0].children;
    console.log(slider);
    let incrementer = 0;
    while(true){
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
 if (x.includes("about")){
   
     slidetextabout();
     
}

$(document).ready(function(){

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
const loadCards = async() => {if(($(window).scrollTop() + $(window).height() >= (1050 + 700 * incrementer) && x.includes("about") &&  displayCardRows[incrementer] == true)) {

  $('.clubcardrow')[incrementer].style.opacity = 1;
  $('.clubcardrow')[incrementer].style.left = 0;
  incrementer++;
  loadCards();
  console.log(incrementer);
}}
loadCards();
$(window).scroll(loadCards); 
} 
);

