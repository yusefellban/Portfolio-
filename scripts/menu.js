/****
 *   open and close menu
 */
var openMenu = document.getElementById("menu"),
  closeMenu = document.getElementById("close");

function OpenMenu() {
  document.getElementById("MenuContent").style.display = "block";
  document.getElementById("menuBg").style.display = "block";
}
function CloseMenu() {
  document.getElementById("MenuContent").style.display = "none";
  document.getElementById("menuBg").style.display = "none";
}
openMenu.addEventListener("click", OpenMenu);
closeMenu.addEventListener("click", CloseMenu);

/**
 * menu buttons
 */
  
function aa() {
  window.location.href = "/pages/content.html";

}
document.getElementById("btnAbout").addEventListener('click', aa);
document.getElementById("WorkBTN").addEventListener("click", aa);
document.getElementById("ContactBTN").addEventListener("click", aa);
document.getElementById("EducationBTN").addEventListener("click", aa);
document.getElementById("menuBg").addEventListener("click", CloseMenu);


//
// 

const typewriter = document.querySelector(".typewriter");

let text = typewriter.innerText;
let i = 0;

function typeWriter() {
  if (i < text.length) {
    typewriter.innerText = text.substring(0, i + 1);
    i++;
    setTimeout(typeWriter, 50); // Adjust speed here (optional)
  }
}

typeWriter();