var x = document.getElementById("mySong");

function musicPlay() {
  // Click autophay
  x.autoplay = true;
  x.load();

  // Display
  document.getElementById("firework").style.display = "block";

  document.getElementById("music").style.display = "none";
}

// Display btn
function btnDisplay() {
  var x = document.getElementById("buttonBtnPlay");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
