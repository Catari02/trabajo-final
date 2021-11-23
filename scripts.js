// Typing effect:
var id = "lines";
var element = document.getElementById(id);
var content = ["diseñadora gráfica", "ilustradora", "diseñadora UI"];

var p = 1000;

const instance = new TypeIt("#lines", { loop: true });

for (const str of content) {
    instance
        .type(str)
        .pause(p)
        .delete(0 - str.length);
}

instance.go();




// Back to Top:
let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 80 ||
    document.documentElement.scrollTop > 80
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};




// Offcanvas menu:
(function mainScript() {
  "use strict";
  const offcanvasToggle = document.querySelector(
    '[data-bs-toggle="offcanvas"]',
  );
  const offcanvasCollapse = document.querySelector(".offcanvas-collapse");
  offcanvasToggle.addEventListener("click", function () {
    offcanvasCollapse.classList.toggle("open");
  });
})();
