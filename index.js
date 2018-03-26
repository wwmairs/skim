/////////////////////////////
// svg ish
/////////////////////////////

// set up svg
const NUM_PANES = 5;
// 4 is a good frac for desktop
const FRAC = 2;
const svgns = "http://www.w3.org/2000/svg";
let container = document.getElementById("name-box");
let svg = document.createElementNS(svgns, "svg");
svg.setAttribute("width", container.clientWidth);
svg.setAttribute("height", container.clientHeight);
let ps = [];
container.appendChild(svg);

cs = ["#7AB7CD", "#C6677E", '#CD907A', "#67C6AF", "#FFF36D"];

for (var i = 0; i < NUM_PANES; i++) {
  let p = document.createElementNS(svgns, "rect");
  p.setAttribute("fill", cs[i]);
  p.setAttribute("x", 0);
  p.setAttribute("y", i * (window.innerHeight / FRAC));
  p.setAttribute("width", container.clientWidth);
  p.setAttribute("height", (window.innerHeight / FRAC));
  ps.push(p);
  svg.appendChild(p);
}

// mask ish

let bg = document.createElementNS(svgns, "rect");
bg.setAttribute("width", "100%");
bg.setAttribute("height", "100%");
// bg.setAttribute("fill", "#f2f2f2");
bg.setAttribute("fill", "#fff");
bg.setAttribute("x", 0);
bg.setAttribute("y", 0);
bg.setAttribute("mask", "url(#text)");
svg.appendChild(bg);

let m = document.createElementNS(svgns, "mask");
m.setAttribute("id", "text");
let r = document.createElementNS(svgns, "rect");
r.setAttribute("width", "100%");
r.setAttribute("height", "110%");
r.setAttribute("fill", "#fff");
r.setAttribute("x", 0);
r.setAttribute("y", 0);
m.appendChild(r);
let t = document.createElementNS(svgns, "text");
t.setAttribute("x", "50%");
t.setAttribute("y", "55%");
t.setAttribute("text-anchor", "middle");
t.setAttribute("fill", "#000");
t.innerHTML = "skimplicity";
let t2 = document.createElementNS(svgns, "text");
t2.setAttribute("x", "50%");
t2.setAttribute("y", "80%");
t2.setAttribute("text-anchor", "middle");
t2.setAttribute("fill", "#000");
t2.setAttribute("font-size", "12px");
t2.setAttribute("letter-spacing", "5px");
t2.setAttribute("font-family", "Roboto Slab");
t2.setAttribute("font-weight", "300");
t2.setAttribute("font-style", "normal");
t2.innerHTML = "books &bull; arts";
m.appendChild(t);
m.appendChild(t2);
svg.appendChild(m);

// scrolling moves colored panels up
window.addEventListener('scroll', function(e) {
  resizeRects();
});

window.addEventListener('resize', function(e) {
  resizeRects();
});

function resizeRects() {
  for (var i = 0; i < ps.length; i++) {
    ps[i].setAttribute("y", i * (window.innerHeight / FRAC) - (scrollY / FRAC));
    ps[i].setAttribute("height", (window.innerHeight / FRAC));
  }
}

/////////////////////////////
// details
/////////////////////////////

// fix margin-top of landing
  let l = document.getElementById("landing");
  l.setAttribute("style", "margin-top: " + ((window.innerHeight / 2) - 60) + "px");

// setting dimensions of preview images and buttons
$(".preview_image").attr("height", ((window.innerHeight / 4) - (10)));
$(".button").css("width", $(".preview").innerWidth() - 5);

// setting up buttons to load modals corresponding to dataset.dir
let buttons = document.getElementsByClassName("button");
for (var i = 0; i < buttons.length; i++) {
  let b = buttons[i];
  let m = $("#" + b.dataset.dir);
  b.onclick = () => {console.log("clicked on ", m); m.css("display", "block")};
}

// esc key or x button closes modals
$(document).keyup((e) => {
  if (e.which == 27) {
    $(".modal").css("display", "none");
  }
});

$(".exit-button").click(() => {$(".modal").css("display", "none")});


if (window.innerWidth < 756) {
  // mobile
  $(".slide-img").attr("height", window.innerHeight * 3 / 10);
  $(".carousel").css("margin-top", (window.innerHeight * 7 / 20)); 
} else {
  // desktop
  // set height of slide-img
  $(".slide-img").attr("height", window.innerHeight * 4 / 5);
  $(".carousel").css("margin-top", (window.innerHeight / 10)); 
  

}

