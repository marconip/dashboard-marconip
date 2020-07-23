$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

//dark mode On Off
document.querySelector(".darkmode").onclick = function () {
  var dashboard = document.querySelector("body");
  var onoff = document.querySelector(".darkmode p");
  if (dashboard.classList.contains("dark-mode") && onoff.classList.contains("text-success")) {//DARK
    dashboard.classList.remove("dark-mode");
    onoff.classList.remove("text-success");
    onoff.classList.add("text-danger");
    onoff.innerHTML = "Off";
  } else {//LIGHT
    dashboard.classList.add("dark-mode");
    onoff.classList.remove("text-danger");
    onoff.classList.add("text-success");
    onoff.innerHTML = "On";
  }
};

//menu
var menu = document.querySelectorAll("aside li");
menu.forEach(function (el) {
  el.onclick = function () {
    var menus = document.querySelectorAll("aside li");
    menus.forEach(function (all) {
      all.classList.remove("active");
    });
    if (el.classList.contains("active")) {
      el.classList.remove(active);
    } else {
      el.classList.add("active")
    }
  }
});

//menu resolucao
resolucao();
window.onresize = function () {
  resolucao();
};
function resolucao(x) {
  if (window.matchMedia("(max-width: 991px)").matches) {
    var submenu = document.querySelectorAll("aside li a");
    submenu.forEach(function (el) {
      el.removeAttribute("data-toggle");
      if (el.nextElementSibling !== null) {
        el.nextElementSibling.classList.add("show");
      }
    })
  } else {
    var submenu = document.querySelectorAll("aside li a");
    submenu.forEach(function (el) {
      el.setAttribute("data-toggle", "collapse");
      if (el.nextElementSibling !== null) {
        el.nextElementSibling.classList.remove("show");
      }
    })
  }
};

