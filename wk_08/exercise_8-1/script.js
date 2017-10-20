function laserBlast(elementID, newClass) {
	document.getElementById(elementID).setAttribute("class", newClass);
};

document.getElementById("chunk1").onclick = function() {
	laserBlast("body", "laserBlast");
  laserBlast("laserBeam", "fire");
};

document.getElementById("chunk2").onclick = function() {
	laserBlast("body", "laserBlast");
  laserBlast("laserBeam", "fire");
};

document.getElementById("chunk3").onclick = function() {
	laserBlast("body", "laserBlast");
  laserBlast("laserBeam", "fire");
};

document.getElementById("chunk4").onclick = function() {
	laserBlast("body", "laserBlast");
  laserBlast("laserBeam", "fire");
};

document.getElementById("spaceship").onclick = function() {
	laserBlast("body", "");
  laserBlast("laserBeam", "reload");
};
