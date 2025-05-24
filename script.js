AOS.init();

var overlaybg = document.querySelector(".overlaybg");
var hambugerBtn = document.querySelector(".hambuger-menu");
var menu = document.querySelector("nav ul");
var menuItemLinks = document.querySelectorAll("nav ul li a");
var isShowMenuMobile = false;

function showMenu(isShow) {
  if (isShow) {
    menu.classList.add("show");
    hambugerBtn.classList.add("active");
    overlaybg.classList.add("show");
    isShowMenuMobile = true;
  } else {
    menu.classList.remove("show");
    overlaybg.classList.remove("show");
    hambugerBtn.classList.remove("active");
    isShowMenuMobile = false;
  }
}

hambugerBtn.addEventListener("click", function () {
  if (!isShowMenuMobile) {
    showMenu(true);
  } else {
    showMenu(false);
  }
});

overlaybg.addEventListener("click", function () {
  showMenu(false);
});

menuItemLinks.forEach(function (el) {
  el.addEventListener("click", function () {
    showMenu(false);
  });
});
