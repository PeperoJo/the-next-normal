function openNav() {
  document.getElementById("myNav").style.width = "300px";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
var scrolled = (winScroll / height) * 100;
document.getElementById("myBar").style.width = scrolled + "%";
}

// NAVIGATION BAR
var header = document.getElementById("navigation");
var navbar =
`
  <nav class="navbar fixed-top navbar-expand navbar-light bg-gradient" id="headerbar">
    <div class="container">
      <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <ul class="navbar-nav mr-auto"></ul>
      </div>
      <div class="mx-auto order-0">
        <a class="navbar-brand mx-auto logo text-white" href="#">Silence Speaks</a>

      </div>
      <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul class="navbar-nav  ml-auto w-100 justify-content-end">
          <li class="nav-item text-white ">
            <span style="font-size:25px;cursor:pointer" onclick="openNav()">&#9776; </span>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="progress-container body-top-pad p-1">
    <div class="progress-bar" id="myBar"></div>
  </div>
  `;
header.innerHTML = navbar + header.innerHTML;




// NAVIGATION MENU
var bodymain = document.getElementById("main");
var navmenu = `
  <div id="myNav" class="overlay">
    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">
      <span style="font-size:35px;cursor:pointer">&times; </span>
    </a>
    <div class="overlay-content">
      <a href="index.html">Home</a>
      <a href="action1.html">Action 1</a>
      <a href="action2.html">Action 2</a>
      <a href="action3.html">Action 3</a>
      <a href="pledge.html">Pledge</a>

      <a href="about.html">About</a>
    </div>
  </div>
  `;

bodymain.innerHTML = navmenu + bodymain.innerHTML;





// FOOTER
var footer = `
<div class="bg-black text-white">
<footer class="container py-5">
  <div class="row">
    <div class="col-12 col-md-5 footer-icon">
      <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="d-block mb-2"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg> -->
      Silence Speaks
    </div>
    <!-- <div class="col-6 col-md">
      <h5>Features</h5>
      <ul class="list-unstyled text-small">
        <li><a class="text-muted" href="https://getbootstrap.com/docs/4.0/examples/product/#">Cool stuff</a></li>
        <li><a class="text-muted" href="https://getbootstrap.com/docs/4.0/examples/product/#">Random feature</a></li>
        <li><a class="text-muted" href="https://getbootstrap.com/docs/4.0/examples/product/#">Team feature</a></li>
        <li><a class="text-muted" href="https://getbootstrap.com/docs/4.0/examples/product/#">Stuff for developers</a></li>
        <li><a class="text-muted" href="https://getbootstrap.com/docs/4.0/examples/product/#">Another one</a></li>
        <li><a class="text-muted" href="https://getbootstrap.com/docs/4.0/examples/product/#">Last time</a></li>
      </ul>
    </div> -->

    <div class="col-6 col-md-2">
      <!-- <h5>Resources</h5> -->
      <ul class="list-unstyled text-small">
        <li><a class="text-muted" href="https://getbootstrap.com/docs/4.0/examples/product/#">Facebook</a></li>
        <li><a class="text-muted" href="https://getbootstrap.com/docs/4.0/examples/product/#">Twitter</a></li>
        <li><a class="text-muted" href="https://getbootstrap.com/docs/4.0/examples/product/#">Instagram</a></li>
        <li><a class="text-muted" href="https://getbootstrap.com/docs/4.0/examples/product/#">Youtube</a></li>
      </ul>
    </div>
    <div class="col-6 col-md-2">
      <!-- <h5>Resources</h5> -->
      <ul class="list-unstyled text-small">
        <li><a class="text-muted" href="https://getbootstrap.com/docs/4.0/examples/product/#">About</a></li>
        <li><a class="text-muted" href="https://getbootstrap.com/docs/4.0/examples/product/#">Contact</a></li>
        <li><a class="text-muted" href="https://getbootstrap.com/docs/4.0/examples/product/#">Sign the Pledge</a></li>
        <li><a class="text-muted" href="https://getbootstrap.com/docs/4.0/examples/product/#">Hear our Voice</a></li>
      </ul>
    </div>
    <div class="col-6 col-md-2">
    </div>
    <div class="col-6 col-md-1">
      <!-- <h5>About</h5> -->
      <ul class="list-unstyled text-small">

        <li><div class="top-btn" onclick="location.href='#top';" style="cursor: pointer;">↑<br>Top</div></li>
        <!-- <li><a class="text-muted" href="https://getbootstrap.com/docs/4.0/examples/product/#">Locations</a></li>
        <li><a class="text-muted" href="https://getbootstrap.com/docs/4.0/examples/product/#">Privacy</a></li>
        <li><a class="text-muted" href="https://getbootstrap.com/docs/4.0/examples/product/#">Terms</a></li> -->
      </ul>
    </div>
  </div>
</footer>
</div>
`;
bodymain.innerHTML = bodymain.innerHTML + footer;
