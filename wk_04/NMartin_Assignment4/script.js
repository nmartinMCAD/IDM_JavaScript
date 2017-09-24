var speech1 = {
    author: "Winston Churchill",
    year: 1940,
    bce: false
};

var speech2 = {
    author: "Ghandi",
    year: 1942,
    bce: false
};

var speech3 = {
    author: "Demosthenes",
    year: 342,
    bce: true
};

var speeches = [
    speech1,
    speech2,
    speech3
];

var yearDifference = speech2.year - speech1.year;

console.log("Ghandi's and Churchill's speech are " + yearDifference + " years apart.");

document.getElementById('BtnDonate').addEventListener('click', function(){
  console.log("There are " + speeches.length + " speeches on this page.");
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  console.log("This speech was written by "
              + speeches[0].author + " in " + speeches[0].year + ". It is " + speeches[0].bce + " that this year is B.C.E.");
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  console.log("This speech was written by " + speeches[1].author + " in " + speeches[1].year + ". It is " + speeches[1].bce + " that this year is B.C.E.");
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  console.log("This speech was written by " + speeches[2].author + " in " + speeches[2].year + ". It is " + speeches[2].bce + " that this year is B.C.E.");
});
