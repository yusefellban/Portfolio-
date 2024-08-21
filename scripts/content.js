/******
 * this script to handel why hire me page
 */
let experience = document.getElementById("myExperience"),
  education = document.getElementById("myEducation"),
  skills = document.getElementById("skillsSection"),
  about = document.getElementById("aboutMe");
/**
 * set the buttons color
 */
let ExperienceBTN = document.getElementById("Experience"),
  EducationBTN = document.getElementById("Education"),
  SkillsBTN = document.getElementById("Skills"),
  AboutmeBTN = document.getElementById("Aboutme");
/**
 * funcrions
 */
function Experience() {
  experience.style.display = "block";
  ExperienceBTN.style.backgroundColor = "#5b99c2";
  EducationBTN.style.backgroundColor = "#1a4870";
  SkillsBTN.style.backgroundColor = "#1a4870";
  AboutmeBTN.style.backgroundColor = "#1a4870";
  education.style.display = "none";
  skills.style.display = "none";
  about.style.display = "none";
}

function Education() {
  education.style.display = "block";
  ExperienceBTN.style.backgroundColor = "#1a4870";
  EducationBTN.style.backgroundColor = "#5b99c2";
  SkillsBTN.style.backgroundColor = "#1a4870";
  AboutmeBTN.style.backgroundColor = "#1a4870";
  skills.style.display = "none";
  about.style.display = "none";
  experience.style.display = "none";
}
function Skills() {
  skills.style.display = "block";
  ExperienceBTN.style.backgroundColor = "#1a4870";
  EducationBTN.style.backgroundColor = "#1a4870";
  SkillsBTN.style.backgroundColor = "#5b99c2";
  AboutmeBTN.style.backgroundColor = "#1a4870";
  education.style.display = "none";
  about.style.display = "none";
  experience.style.display = "none";
}
function Aboutme() {
  about.style.display = "block";
  ExperienceBTN.style.backgroundColor = "#1a4870";
  EducationBTN.style.backgroundColor = "#1a4870";
  SkillsBTN.style.backgroundColor = "#1a4870";
  AboutmeBTN.style.backgroundColor = "#5b99c2";
  education.style.display = "none";
  skills.style.display = "none";
  experience.style.display = "none";
}
/**
 * add action listeners
 *
 */
ExperienceBTN.addEventListener("click", Experience);
EducationBTN.addEventListener("click", Education);
SkillsBTN.addEventListener("click", Skills);
AboutmeBTN.addEventListener("click", Aboutme);

/****
 *   open and close menu
 */
let oopenMenu = document.getElementById("menu"),
  ccloseMenu = document.getElementById("close");

function OpenMenu() {
  document.getElementById("MenuContent").style.display = "block";
  document.getElementById("menuBg").style.display = "block";
}
function CloseMenu() {
  document.getElementById("MenuContent").style.display = "none";
  document.getElementById("menuBg").style.display = "none";
}
oopenMenu.addEventListener("click", OpenMenu);
ccloseMenu.addEventListener("click", CloseMenu);

/**
 * menu buttons
 */

function btnAbout() {
  CloseMenu();

  Aboutme();
}

function btnWork() {
  CloseMenu();
  Experience();
}
function btnEducation() {
  CloseMenu();
  Education();
}

document.getElementById("aboutBTN").addEventListener("click", btnAbout);
document.getElementById("work").addEventListener("click", btnWork);
document.getElementById("btnContact").addEventListener("click", btnAbout);
document.getElementById("btnEducation").addEventListener("click", btnEducation);
document.getElementById("Fabout").addEventListener("click", btnAbout);
document.getElementById("Fcontct").addEventListener("click", btnAbout);
document.getElementById("Fprojects").addEventListener("click", Experience);
document.getElementById("menuBg").addEventListener("click", CloseMenu);

