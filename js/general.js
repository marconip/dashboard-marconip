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
  if (
    dashboard.classList.contains("dark-theme") &&
    onoff.classList.contains("text-warning")
  ) {
    //DARK
    dashboard.classList.remove("dark-theme");
    onoff.classList.remove("text-warning");
    onoff.classList.add("text-danger");
    onoff.innerHTML = "Off";
  } else {
    //LIGHT
    dashboard.classList.add("dark-theme");
    onoff.classList.remove("text-danger");
    onoff.classList.add("text-warning");
    onoff.innerHTML = "On";
  }
};

//Topo icone-menu abrir fechar lateral
document.querySelector(".menu-icone").onclick = function () {
  this.classList.toggle("clicado");

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
    document.querySelector(".busca input").classList.remove("clicado"); //campo busca

    document.querySelector("aside").classList.remove("menu-mobilephone");
    document.querySelector("aside").classList.remove("menu-mobilephone-aberto");

    document.querySelector("aside").classList.remove("menu-fechado");
    document.querySelector(".menu-icone").classList.remove("clicado");

    var showSubmenu = document.querySelectorAll("aside ul.collapse");
    showSubmenu.forEach(function (ell) {
      ell.classList.remove("show");
    });

    var submenuativo = document.querySelectorAll("aside li.ativo ul");
    submenuativo.forEach(function (ell) {
      ell.classList.add("show");
    });
  };

  //tablet
  if (window.matchMedia("(min-width: 768px) and (max-width: 991px)").matches) {
    document.querySelector(".busca input").classList.remove("clicado"); //campo busca

    document.querySelector("aside").classList.remove("menu-mobilephone");
    document.querySelector("aside").classList.remove("menu-mobilephone-aberto");

    document.querySelector("aside").classList.add("menu-fechado");
    document.querySelector(".menu-icone").classList.add("clicado");

    document.querySelector(".desenvolvimento").classList.remove("clicado");

    document.querySelector('aside').onclick = function () {
      if (document.querySelector('aside').classList.contains("menu-fechado")) {
        document.querySelector('aside').classList.toggle("menu-fechado");
        document.querySelector(".menu-icone").classList.toggle("clicado");
      }
    };

    document.querySelector('main').onclick = function () {
      document.querySelector('aside').classList.add("menu-fechado");
      document.querySelector(".menu-icone").classList.add("clicado");
    }
  };

  //mobilephone 0px a 767px
  if (window.matchMedia("(max-width: 767px)").matches) {
    //campo de busca
    document.querySelector(".busca button").onclick = function () {
      document
        .querySelector("aside")
        .classList.remove("menu-mobilephone-aberto");
      document.querySelector(".busca input").classList.toggle("clicado");
    };

    document.querySelector("aside").classList.remove("menu-fechado");
    document.querySelector("aside").classList.add("menu-mobilephone");

    document.querySelector(".menu-icone").classList.remove("clicado");

    document.querySelector('main').onclick = function () {
      document.querySelector('aside').classList.remove("menu-mobilephone-aberto");
      document.querySelector(".menu-icone").classList.remove("clicado");
    }
  }
};

//menu seleciona "ativo" ao click
const submenus = document.querySelectorAll(".submenu > li");
for (let li of submenus) {
  li.addEventListener("click", (e) => {
    desativarItensMenu();
    li.parentElement.parentElement.classList.add("ativo");
    li.classList.add("ativo");
    e.stopPropagation();
  });
};
function desativarItensMenu(menuPaiComFilho = true) {
  if (menuPaiComFilho) {
    const menusPais = document.querySelectorAll(".menu");
    for (let todosMenusPrincipais of menusPais) {
      todosMenusPrincipais.classList.remove("ativo");
    }
  };
  for (let li of submenus) {
    li.classList.remove("ativo");
  }
};
//menus pais
for (let menuAtivo of document.querySelectorAll(".menu")) {
  menuAtivo.addEventListener("click", (e) => {
    for (let todosMenusPai of document.querySelectorAll(".menu")) {
      todosMenusPai.classList.remove("ativo");
    }
    desativarItensMenu(false);
    menuAtivo.classList.add("ativo");
  });
};

//Parar rolagem topo
var main = document.querySelector("main");
var aside = document.querySelector("aside");
var header = document.querySelector("header");
var conteudo = document.querySelector(".conteudo");
var headerOnOff = document.querySelector(".header-fixed p");

 document.querySelector(".header-fixed").onclick = function () {
  if (
    header.classList.contains("fixed")
  ) {
    //FIXED off - acompanha a página para cima
    dashboard.style.paddingTop = "0px";
    header.style.position = "initial";
    header.style.marginBottom = "2px";
    conteudo.style.minHeight = "auto";
    main.style.height = "auto";
    aside.style.height = "auto";
    headerOnOff.classList.remove("text-warning");
    headerOnOff.classList.add("text-danger");
    headerOnOff.innerHTML = "Off";
    header.classList.remove("fixed");
    header.classList.add("no-fixed");
  } else {
    //FIXED on - fica parado no topo
    dashboard.removeAttribute("style");
    header.removeAttribute("style");
    conteudo.removeAttribute("style");
    main.removeAttribute("style");
    aside.removeAttribute("style");
    headerOnOff.classList.remove("text-danger");
    headerOnOff.classList.add("text-warning");
    headerOnOff.innerHTML = "On";
    header.classList.remove("no-fixed");
    header.classList.add("fixed");
  }
}; 