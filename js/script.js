var navbar = document.getElementById("navbarid");

function myFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    navbar.style.position = "fixed";
  }
}

var an = 0;
function slidefun() {
  an = (an + 1) % 5;
  var im = document.getElementById("slideshow");
  im.src = "../img/" + an + ".jpg";
}
function scrollfun() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    butto.style.display = "block";
  } else {
    butto.style.display = "none";
  }
}
butto = document.getElementById("butto");
window.onscroll = function() {
  scrollfun();
  myFunction();
};

function topfun() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
var data = {};
function genera() {
  var fname = document.getElementById("name").value;
  var fskil = document.getElementById("skil").value;
  var flevel = document.getElementById("level").value;
  var fcomm = document.getElementById("comm").value;
  var tab = document.getElementById("lmao");
  if ("count" in localStorage) {
    var count = localStorage.getItem("count");
  } else {
    var count = 0;
  }
  localStorage.setItem(count, [fname, fskil, flevel, fcomm]);
  count++;
  localStorage.setItem("count", count);
  var tabl = document.getElementById("lmao");
  tabl.innerHTML +=
    "<tr><td>" +
    fname +
    "</td><td>" +
    fskil +
    "</td><td>" +
    flevel +
    "</td><td>" +
    fcomm +
    "</td></tr>";
  document.getElementById("name").value = "";
  document.getElementById("skil").value = "";
  document.getElementById("level").value = "Beginner";
  document.getElementById("comm").value = "";
}
function loadpage() {
  if ("count" in localStorage) {
    var count = localStorage.getItem("count");
  } else {
    var count = 0;
  }
  console.log(count);
  if (count > 0) {
    var tab = document.getElementById("lmao");
    for (i = 0; i < count; i++) {
      if (localStorage.getItem(i) === "count") continue;
      var entry = Array.from(localStorage.getItem(i).split(","));
      tab.innerHTML +=
        "<tr><td>" +
        entry[0] +
        "</td><td>" +
        entry[1] +
        "</td><td>" +
        entry[2] +
        "</td><td>" +
        entry[3] +
        "</td>";
    }
  }
}
function increment() {
  if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount) + 1;
  } else {
    localStorage.clickcount = 1;
  }
  document.getElementById("Visi").innerHTML += localStorage.clickcount;
}
