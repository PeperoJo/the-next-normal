

function applyHover(element) {
  // element.add('bg-white');
  console.log('hello-infunction');
  // var color = element.getAttribute('data-bg');
  // document.body.style.backgroundColor = color;
}

function removeHover(element) {
  element.add('bg-white');
  console.log('hello');
  // var color = element.getAttribute('data-bg');
  // document.body.style.backgroundColor = color;
}

var actions = document.getElementsByClassName("action");

// for (var i = 0; i < actions.length; i++) {
//   // actions[i].addEventListener("onmouseover", applyHover);
//   // actions[i].innerHTML = "something";
//   // actions[i].querySelectorAll('.subhead')[0].innerHTML = 'something';
//   console.log(actions[i].classList);
//   console.log(actions[i].onmouseover);
//   actions[i].onmouseover = "applyHover(this)";
//
//   console.log(actions[i].onmouseover);
//   // actions[i].addEventListener("mouseover", applyHover);
//   // actions[i].addEventListener("mouseout", removeHover);
//   // actions[i].onmouseover = "applyHover()";
//   // actions[i].add('bg-white');
//   console.log(actions[i]);
//   // console.log('hello');
//   console.log(actions[i].querySelectorAll('.subhead')[0].innerHTML);
// }
// console.log('hello');

// actions.addEventListener("mouseover", applyHover);


// console.log(actions);

// images.addEventListener('mouseover', changeDefOver);
// images.addEventListener('mouseout', changeDefOut);

var temp = "";

function actionHover(element) {

  temp = element.innerHTML;
  element.getElementsByClassName("container")[0].classList.remove('text-white');
  element.getElementsByClassName("container")[0].classList.remove('text-dark');

  element.classList.add('bg-neon');
  element.classList.remove('bg-black');

  console.log('hello-infunction');
  // var color = element.getAttribute('data-bg');
  // document.body.style.backgroundColor = color;
}
function exitHover(element) {

  element.innerHTML = temp;

  element.classList.add('bg-black');
  element.classList.remove('bg-neon');
  // var color = element.getAttribute('data-bg');
  // document.body.style.backgroundColor = color;
}
