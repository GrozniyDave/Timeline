"use strict";

function showAlbum() {
  let x = document.querySelector(".absolute-nav");
  let a = document.querySelector(".trigger");
  if (x.style.display === "none") {
    x.style.display = "block";
    a.innerHTML = "Hide Albums  <i class='fa fa-close'></i> ";
  } else {
    x.style.display = "none";
    a.innerHTML = "Show Albums  <i class='fa fa-expand'></i>";
  }
}

let facts = [
  'Album "One-X" was released on June 13, 2006',
  'Release date of "Transit of Venus" is October 2, 2012',
  '"Outsider" was released on March 9, 2018',
  'The first album with Matt as a lead singer was "Human" and it was released on March 31, 2015',
  'The album "Life Starts Now" was released on September 22, 2009'
];
