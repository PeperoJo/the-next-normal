/* Open when someone clicks on the span element */


document.documentElement.style.overflow = 'hidden';
document.body.scroll = "no";

function closeSplash() {
  document.getElementById("mySplash").style.opacity ="0";
  document.getElementById("mySplash").style.top ="-850px";
  document.getElementById("mySplash").style.visibility ="hidden";
  document.documentElement.style.overflow = 'scroll';
  document.body.scroll = "yes";
  // document.documentElement.style.overflow = 'hidden';
}

// check close window parameter
const queryString = window.location.search;
// console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const noSplash = urlParams.get('home');
if (noSplash == 'true'){
  closeSplash();
}
