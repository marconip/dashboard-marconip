$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

document.querySelector(".darkmode").onclick = function () {
  var dashboard = document.querySelector("body");
  var onoff = document.querySelector(".darkmode p");
  if (dashboard.classList.contains("dark-mode") || onoff.classList.contains("text-success")) {//DARK
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
