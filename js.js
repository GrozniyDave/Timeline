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

function showQuotes() {
  let right = document.querySelector(".rightbar");
  let left = document.querySelector(".leftbar");
  let button2 = document.querySelector(".trigger1");

  if (right.style.display === "") {
    right.style.display = "none";
    left.style.display = "none";
    button2.style.display = "none";
    console.log("You've just hidden the Quotes!");
  } else {
    console.log("Nothing to Hide)");
  }
}

let facts = [
  "Three Days Grace are Neil Sanderson (drums, piano, backing vocals), Brad Walst (bass guitar), and Barry Stock (lead guitar). Matt Walst (lead vocals)",
  "The group has sold more than 6 million records in the United States",
  "The band holds the record for the most #1 songs at Active Rock Radio – thirteen",
  "The band’s first and second singles with new singer Matt Walst, “Painkiller” and “I Am Machine” respectively, reached #1 at Active Rock (6/9/14 & 1/26/15)",
  "Transit of Venus debuted at #5 on Billboard Chart first week (2012)",
  "The first single from Transit Of Venus, “Chalk Outline”, reached #1 at Active Rock (9/17/12) and remained #1 for 10 weeks, making it the most weeks at #1 for the year 2012",
  "The second single from Transit of Venus, “High Road”, AND third single “Misery Loves My Company” reached #1 at Active Rock",
  "Life Starts Now debuted at #3 on Billboard Chart with 79,000 copies sold first week (2009)",
  "The first single from Life Starts Now, “Break”, reached #1 at Active Rock (11/30/09) and spent a total of 8 weeks at #1",
  "The second single from Life Starts Now, “The Good Life”, reached #1 at Active Rock (5/17/10) and spent a total of 6 weeks at #1",
  "The third single from Life Starts Now, “World So Cold”, reached #1 at Active Rock (11/22/10)",
  "“Break” was the #1 most played song at Active Rock in 2010",
  "“The Good Life” was the #2 most played song at Active Rock in 2010",
  "“Never Too Late” reached #1 on both Active and Rock formats (2007)",
  "ONE-X debuted at #5 on Billboard chart with 78,000 copies sold the first week (2006)",
  "“Animal I’ve Become” reached #1 on all rock formats (Alternative, Active & Mainstream) for 9 weeks (2006)",
  "“Pain” went to #1 on the Modern Rock chart for 4 weeks, and #1 on Active Rock for 10 weeks (2006)",
  "Received 2 BMI Awards for “Animal I’ve Become” and “Pain” (2006)",
  "“I Hate Everything About You” peaked at #2 on Modern and Active chart for 47 weeks (2003)"
];
