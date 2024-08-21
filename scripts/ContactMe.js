function validateName() {
  var name = document.getElementById("fullName").value;

  if (name.length < 2) {
    document.getElementById("errorMassage").innerText =
      "*Error: The name must be at least 2 characters long.";
    document.getElementById("fullName").style.border = "2px solid red";
  } else if (!isNaN(name)) {
    document.getElementById("errorMassage").innerText =
      "*Error: The name cannot be a number.";
    document.getElementById("fullName").style.border = "2px solid red";
  } else {
    document.getElementById("errorMassage").innerText = "";
    document.getElementById("fullName").style.border = "none";
  }
}
/**
 *
 */
function validateEmail() {
  var email = document.getElementById("emailAdress").value;

  // Regular expression
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    document.getElementById("errorEmail").innerText =
      " * Error: Please enter a valid email address.";
    document.getElementById("emailAdress").style.border = "2px solid red";
  } else {
    document.getElementById("errorEmail").innerText = "";
    document.getElementById("emailAdress").style.border = "none";
  }
}

function validateMobile() {
  var number = document.getElementById("mobile").value;

  if (isNaN(number)) {
    document.getElementById("errorMobile").innerText =
      " * number must be a number";
    document.getElementById("mobile").style.border = "2px solid red";
  } else if (number < 200) {
    document.getElementById("errorMobile").innerText = " * number not Accepted";
    document.getElementById("mobile").style.border = "2px solid red";
  } else {
    document.getElementById("errorMobile").innerText = " ";
    document.getElementById("mobile").style.border = "none";
  }
}

function validateSubject() {
  var subject = document.getElementById("emailSubject").value;

  if (subject.length < 2) {
    document.getElementById("errorSubject").innerText =
      "*Error: The subject must be at least 2 characters long.";
    document.getElementById("emailSubject").style.border = "2px solid red";
  } else if (!isNaN(subject)) {
    document.getElementById("errorSubject").innerText =
      "*Error: The subject cannot be a number.";
    document.getElementById("emailSubject").style.border = "2px solid red";
  } else {
    document.getElementById("emailSubject").innerText = "";
    document.getElementById("emailSubject").style.border = "none";
  }
}
function sendEmail() {
  validateName();
  validateEmail();
  validateMobile();
  validateSubject();
}

function reset() {
  document.getElementById("errorMassage").innerText = " ";
  document.getElementById("errorEmail").innerText = " ";
  document.getElementById("errorMobile").innerText = " ";
  document.getElementById("errorSubject").innerText = "";
  document.getElementById("emailSubject").style.border = "none";
  document.getElementById("mobile").style.border = "none";
  document.getElementById("emailAdress").style.border = "none";
  document.getElementById("fullName").style.border = "none";
}
document.getElementById("send").addEventListener("click", sendEmail);

document.getElementById("rest").addEventListener("click", reset);

// d
document.getElementById("fullName").addEventListener("input", validateName);

document.getElementById("emailAdress").addEventListener("input", validateEmail);
document.getElementById("mobile").addEventListener("input", validateMobile);

document
  .getElementById("emailSubject")
  .addEventListener("input", validateSubject);
