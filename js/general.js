$(function () {
  $("[data-toggle='tooltip']").tooltip();
});

//MODO DO TEMA On Off
var dashboard = document.querySelector("body");
var onoff = document.querySelector(".darkmode p");
//identificar tema e mudar aparência
window.onload = function () {
  if (dashboard.classList.contains("dark-theme")) {
    onoff.classList.remove("text-danger");
    onoff.classList.add("text-warning");
    onoff.innerHTML = "On";
  }
};
//mudar tema ao click de escolha
document.querySelector(".darkmode").onclick = function () {
  if (dashboard.classList.contains("dark-theme") && onoff.classList.contains("text-warning")) {//DARK
    dashboard.classList.remove("dark-theme");
    onoff.classList.remove("text-warning");
    onoff.classList.add("text-danger");
    onoff.innerHTML = "Off";
  } else {//LIGHT
    dashboard.classList.add("dark-theme");
    onoff.classList.remove("text-danger");
    onoff.classList.add("text-warning");
    onoff.innerHTML = "On";
  }
};

//menu seleciona "ativo" ao click
var menu = document.querySelectorAll("aside ul li");
menu.forEach(function (el) {
  el.onclick = function () {
    document.querySelectorAll("aside ul li").forEach(function (all) {
      all.removeAttribute("class");
    });
    el.classList.add("ativo");
  }
});

//Topo icone-menu abrir fechar lateral
document.querySelector(".menu-icone").onclick = function () {
  this.classList.toggle("clicado");

  if (window.matchMedia("(min-width: 576px) and (max-width: 991px)").matches && document.querySelector("aside").classList.contains("menu-fechado")) {
    var showSubmenu = document.querySelectorAll("aside ul.collapse");
    showSubmenu.forEach(function (ell) {
      ell.classList.remove("show");
    });
  }

  if (document.querySelector("aside").classList.contains("menu-mobilephone")) {
    document.querySelector("aside").classList.toggle("menu-mobilephone-aberto");
  } else {
    document.querySelector("aside").classList.toggle("menu-fechado");
  }
};

//menu no TAMANHO/RESOLUÇÃO de tela (abre e fecha lateral)
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

    var showSubmenu = document.querySelectorAll("aside ul.collapse");
    showSubmenu.forEach(function (ell) {
      ell.classList.remove("show");
    });

    var submenuActive = document.querySelectorAll("aside li.active ul");
    submenuActive.forEach(function (ell) {
      ell.classList.add("show");
    });
  };

  //tablet
  if (window.matchMedia("(min-width: 576px) and (max-width: 991px)").matches) {
    document.querySelector(".busca input").classList.remove("clicado");//campo busca

    document.querySelector("aside").classList.remove("menu-mobilephone");
    document.querySelector("aside").classList.remove("menu-mobilephone-aberto");

    document.querySelector("aside").classList.add("menu-fechado");
    document.querySelector(".menu-icone").classList.add("clicado");

    document.querySelector(".desenvolvimento").classList.remove("clicado");

    var showSubmenu = document.querySelectorAll("aside ul.collapse");
    showSubmenu.forEach(function (ell) {
      ell.classList.add("show");
    });
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

    var showSubmenu = document.querySelectorAll("aside ul.collapse");
    showSubmenu.forEach(function (ell) {
      ell.classList.remove("show");
    });
    var submenuActive = document.querySelectorAll("aside li.active ul");
    submenuActive.forEach(function (ell) {
      ell.classList.add("show");
    });
  };

};

//textos desenvolvido por
document.querySelector(".desenvolvimento-mobile").onclick = function () {
  document.querySelector(".desenvolvimento").classList.toggle("clicado");
};