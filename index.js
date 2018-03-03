// fix margin-top of landing
let l = document.getElementById("landing");
l.setAttribute("style", "margin-top: " + ((window.innerHeight / 2) - 60) + "px");

// set up svg
const NUM_PANES = 5;
const FRAC = 4;
const svgns = "http://www.w3.org/2000/svg";
let container = document.getElementById("name-box");
let svg = document.createElementNS(svgns, "svg");
svg.setAttribute("width", container.clientWidth);
svg.setAttribute("height", container.clientHeight);
let ps = [];
container.appendChild(svg);

cs = ["#3e86b0", "#86B03E", "#b03e86", "#b0683e"];

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
r.setAttribute("height", "100%");
r.setAttribute("fill", "#fff");
r.setAttribute("x", 0);
r.setAttribute("y", 0);
m.appendChild(r);
let t = document.createElementNS(svgns, "text");
t.setAttribute("x", "50%");
t.setAttribute("y", "50%");
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
t2.innerHTML = "bookbinding &bull; conservation";
m.appendChild(t);
m.appendChild(t2);
svg.appendChild(m);

// scrolling moves colored panels up
window.addEventListener('scroll', function(e) {
  resizeRects();
});

window.addEventListener('resize', function(e) {r
  resizeRects();
});

function resizeRects() {
  for (var i = 0; i < ps.length; i++) {
    ps[i].setAttribute("y", i * (window.innerHeight / FRAC) - (scrollY / FRAC));
    ps[i].setAttribute("height", (window.innerHeight / FRAC));
  }
}