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

//textos desenvolvido por
document.querySelector(".desenvolvimento-mobile").onclick = function () {
  document.querySelector(".desenvolvimento").classList.toggle('clicado');
};

//menu icone abrir fechar
document.querySelector(".menu-icone").onclick = function () {
  this.classList.toggle('clicado');
  document.querySelector("aside").classList.toggle('menu-fechado');
  document.querySelector(".desenvolvimento").classList.remove('clicado');
}

//menu
var menu = document.querySelectorAll("aside li");
menu.forEach(function (el) {
  el.onclick = function () {
    document.querySelectorAll("aside li").forEach(function (all) {
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
  if (window.matchMedia("(min-width: 992px)").matches) {

    document.querySelector("aside").classList.remove('menu-phone');
    document.querySelector("aside").classList.remove('menu-fechado');
    document.querySelector(".menu-icone").classList.remove("clicado");

    var submenu = document.querySelectorAll("aside li a");
    submenu.forEach(function (el) {
      el.setAttribute("data-toggle", "collapse");
      if (el.nextElementSibling !== null) {
        el.nextElementSibling.classList.remove("show");
      }
    })
  };

  if (window.matchMedia("(max-width: 991px)").matches) {

    document.querySelector("aside").classList.remove('menu-phone');
    document.querySelector(".desenvolvimento").classList.remove('clicado');
    document.querySelector("aside").classList.add('menu-fechado');
    document.querySelector(".menu-icone").classList.add("clicado");

    var submenu = document.querySelectorAll("aside li a");
    submenu.forEach(function (el) {
      el.removeAttribute("data-toggle");
      if (el.nextElementSibling !== null) {
        el.nextElementSibling.classList.add("show");
      }
    })
  };

  if (window.matchMedia("(max-width: 575px)").matches) {
    document.querySelector("aside").classList.remove('menu-fechado');
    document.querySelector("aside").classList.add('menu-phone');
  }
  
};

