var leftMenu = document.querySelector(".left-menu-bar");
var burgerButton = document.querySelector(".burger-menu");
let exitButton = document.querySelector(".exit-button");


function openMenu(){
   leftMenu.style.display = "block";
  leftMenu.style.width ="60%";
burgerButton.style.display = "none";
  exitButton.style.display = "block";
 
}  

function closeMenu(){
  leftMenu.style.width = "0";
  exitButton.style.display = "none";
  burgerButton.style.display = "block";
  
}