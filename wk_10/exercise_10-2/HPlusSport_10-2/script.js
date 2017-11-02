//Changes background color of heading tags when hovering over individual projects
$("document").ready(function(){
      $("h2[data-type=vitamin]").css("background-color", "#3D9970");
      $("h2[data-type=mineralwater]").css("background-color", "#0074D9");
      $("h2[data-type=proteinbar]").css("background-color", "#85144b");
});



//implementing reusable function (defined below) that enters the argument of said function when clicking the relevant checkbox.
$('#vitaminsBox').click('change',function (evt) {
    modifyProductListing("vitamins", evt.target.checked)
});

$('#mineralwaterBox').click('change',function (evt) {
    modifyProductListing("mineralwater", evt.target.checked)
});

$('#proteinbarBox').click('change',function (evt) {
    modifyProductListing("proteinbar", evt.target.checked)
});

//first defines function that is reused in the above handlers. Generic base arguments are defined. Then a switch case is used to set the value of dataSelectorVal variable.
function modifyProductListing(categoryName, displayed) {

  var dataSelectorVal = "";
  switch (categoryName) {
  case "vitamins":
      dataSelectorVal = "h2[data-type='vitamin']";
      break;
  case "mineralwater":
      dataSelectorVal = "h2[data-type='mineralwater']";
      break;
  case "proteinbar":
      dataSelectorVal = "h2[data-type='proteinbar']";
      break;
  }

  //toggles display of products by detecting the current state of the dataSelectorVal as defined by the case switch.
  $(".product-item").has(dataSelectorVal).css('display', displayed ? "" : "none");
};
