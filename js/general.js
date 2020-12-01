$(function () {
  $("[data-toggle='tooltip']").tooltip();
});

//dark mode On Off
document.querySelector(".darkmode").onclick = function () {
  var dashboard = document.querySelector("body");
  var onoff = document.querySelector(".darkmode p");
  if (dashboard.classList.contains("dark-theme") && onoff.classList.contains("text-success")) {//DARK
    dashboard.classList.remove("dark-theme");
    onoff.classList.remove("text-success");
    onoff.classList.add("text-danger");
    onoff.innerHTML = "Off";
  } else {//LIGHT
    dashboard.classList.add("dark-theme");
    onoff.classList.remove("text-danger");
    onoff.classList.add("text-success");
    onoff.innerHTML = "On";
  }
};

//menu seleciona "ativo" ao click
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

//Topo icone-menu abrir fechar lateral
document.querySelector(".menu-icone").onclick = function () {
  this.classList.toggle("clicado");

  if (document.querySelector("aside").classList.contains("menu-mobilephone")) {
    document.querySelector("aside").classList.toggle("menu-mobilephone-aberto");
  } else {
    document.querySelector("aside").classList.toggle("menu-fechado");
  }

  if (document.querySelector("aside").classList.contains("menu-fechado")) {
    var showSubmenu = document.querySelectorAll("aside li ul");
    showSubmenu.forEach(function (ell) {
      ell.classList.add("show");
    });
    var submenus = document.querySelectorAll("aside li a");
    submenus.forEach(function (ele) {
      ele.removeAttribute("data-toggle");
    });
  } else {
    var showSubmenu = document.querySelectorAll("aside li ul");
    showSubmenu.forEach(function (ell) {
      ell.classList.remove("show");
      if (ell.parentElement.classList.contains("active")) {
        ell.classList.add("show");
      }
    });
    var submenus = document.querySelectorAll("aside li a");
    submenus.forEach(function (ele) {
      ele.setAttribute("data-toggle", "collapse");
    });
  }
}

//menu no tamanho de tela abre e fecha
resolucao();
window.onresize = function () {
  resolucao();
};
function resolucao(x) {
  //desktop =992px e acima
  if (window.matchMedia("(min-width: 992px)").matches) {
    document.querySelector(".busca input").classList.remove("clicado");//campo busca

    document.querySelector("aside").classList.remove("menu-mobilephone");
    document.querySelector("aside").classList.remove("menu-mobilephone-aberto");

    document.querySelector("aside").classList.remove("menu-fechado");
    document.querySelector(".menu-icone").classList.remove("clicado");

    /* var submenu = document.querySelectorAll("aside li a");
    submenu.forEach(function (el) {
      el.setAttribute("data-toggle", "collapse");
      if (el.nextElementSibling !== null) {
        el.nextElementSibling.classList.remove("show");
      }
    }) */
  };

  //tablet
  if (window.matchMedia("(min-width: 576px) and (max-width: 991px)").matches) {
    document.querySelector(".busca input").classList.remove("clicado");//campo busca

    document.querySelector("aside").classList.remove("menu-mobilephone");
    document.querySelector("aside").classList.remove("menu-mobilephone-aberto");

    document.querySelector("aside").classList.add("menu-fechado");
    document.querySelector(".menu-icone").classList.add("clicado");

    document.querySelector(".desenvolvimento").classList.remove("clicado");

    /*  var submenu = document.querySelectorAll("aside li a");
     submenu.forEach(function (el) {
       el.removeAttribute("data-toggle");
       if (el.nextElementSibling !== null) {
         el.nextElementSibling.classList.add("show");
       }
     }); */
  };

  //mobilephone 0px a 575px
  if (window.matchMedia("(max-width: 575px)").matches) {
    //campo de busca
    document.querySelector(".busca button").onclick = function () {
      document.querySelector("aside").classList.remove("menu-mobilephone-aberto");
      document.querySelector(".busca input").classList.toggle("clicado");
    };

    document.querySelector("aside").classList.remove("menu-fechado");
    document.querySelector("aside").classList.add("menu-mobilephone");
  }
};

//textos desenvolvido por
document.querySelector(".desenvolvimento-mobile").onclick = function () {
  document.querySelector(".desenvolvimento").classList.toggle("clicado");
};