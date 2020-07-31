/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "300px";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

document.documentElement.style.overflow = 'hidden';
document.body.scroll = "no";

function closeSplash() {
  document.getElementById("mySplash").style.opacity ="0";
  document.getElementById("mySplash").style.visibility ="hidden";
  document.documentElement.style.overflow = 'scroll';
  document.body.scroll = "yes";
  // document.documentElement.style.overflow = 'hidden';
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
var scrolled = (winScroll / height) * 100;
document.getElementById("myBar").style.width = scrolled + "%";
}
