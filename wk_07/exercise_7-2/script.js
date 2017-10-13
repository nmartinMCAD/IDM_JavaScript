var myDiv = document.getElementById("myDiv");
var h1 = document.getElementsByTagName("h1")[0];
var h2 = document.getElementsByTagName("h2")[0];
var styleButton1 = document.getElementById("button1");
var styleButton2 = document.getElementById("button2");
var styleButton3 = document.getElementById("button3");
var styleButton4 = document.getElementById("button4");
var reset = document.getElementById("resetButton");


styleButton1.onclick = function() {
  console.log("This is style one.");
  myDiv.className = "styleOne";
  headingTag.innerHTML = "Look at me changing";
  subheadingTag.innerHTML = "Keep on clicking";
};

styleButton2.onclick = function() {
  console.log("this is style two");
  myDiv.className = "styleTwo";
  headingTag.innerHTML = "The only constant is change";
  subheadingTag.innerHTML = "Clickity, click, click";
};

styleButton3.onclick = function() {
  console.log("this is style three");
  myDiv.className = "styleThree";
  headingTag.innerHTML = "I can keep this up all day";
  subheadingTag.innerHTML = "Can you?";
};

styleButton4.onclick = function() {
  console.log("what are we looking at here?");
  myDiv.className = "styleFour";
  headingTag.innerHTML = "Had enough change yet?";
  subheadingTag.innerHTML = "You know you can't get enough of this awesome JavaScript magic, so you gotta just keep on clicking. Go on, I won't judge.";
};

reset.onclick = function() {
  console.log("back to that OG style");
  myDiv.className = "";
  headingTag.innerHTML = "I can change...again, and again, and again...";
  subheadingTag.innerHTML = "You on the other hand... you might need an intervention.";
};
