var myDiv  = document.getElementById("aChildIsBorn");
var myNewH1 = document.createElement("h1");
var myNewParagraph = document.createElement("p");
var paragraphText = document.createTextNode("And what a beautiful child it is.")

//innerHTML approach
myNewH1.innerHTML = "Behold the child!";
myDiv.appendChild(myNewH1);


//createTextNode approach
myNewParagraph.appendChild(paragraphText);
myDiv.appendChild(myNewParagraph);

//center paragraph with JavaScript
myNewParagraph.setAttribute("align", "center");
