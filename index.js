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
