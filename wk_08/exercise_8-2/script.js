/* function laserBlast():
  -Accepts ID of HTML elementID
  -Accepts CSS class name to apply to HTML element
  -Locates HTML by ID
	-Changes class of target element
*/

function laserBlast(elementID, newClass) {
	document.getElementById(elementID).setAttribute("class", newClass);
};

/* function newInstruction():
  -Accepts ID of HTML elementID
  -Accepts new HTML to be applied to target element
  -Locates HTML by ID
	-Changes inner HTML
*/

function newInstruction(elementID, newInstruction) {
	document.getElementById(elementID).innerHTML = newInstruction;
};

//Click events reusing functions

document.getElementById("chunk1").onclick = function() {
	laserBlast("body", "laserBlast");
  laserBlast("laserBeam", "fire");
	newInstruction("instruction", "Click the Spaceship to Reload!")
};

document.getElementById("chunk2").onclick = function() {
	laserBlast("body", "laserBlast");
  laserBlast("laserBeam", "fire");
	newInstruction("instruction", "Click the Spaceship to Reload!")
};

document.getElementById("chunk3").onclick = function() {
	laserBlast("body", "laserBlast");
  laserBlast("laserBeam", "fire");
	newInstruction("instruction", "Click the Spaceship to Reload!")
};

document.getElementById("chunk4").onclick = function() {
	laserBlast("body", "laserBlast");
  laserBlast("laserBeam", "fire");
	newInstruction("instruction", "Click the Spaceship to Reload!")
};

document.getElementById("spaceship").onclick = function() {
	laserBlast("body", "");
  laserBlast("laserBeam", "reload");
	newInstruction("instruction", "pew! pew! pew!")
};
