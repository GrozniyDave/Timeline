"use strict";

function showAlbum() {
  let x = document.querySelector(".absolute-nav");
  let a = document.querySelector(".trigger");
  if (x.style.display === "none") {
    x.style.display = "block";
    a.innerHTML = "Hide Albums";
  } else {
    x.style.display = "none";
    a.innerHTML = "Show Albums";
  }
}
