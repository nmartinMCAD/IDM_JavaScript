//Changes background color of heading tags when hovering over individual projects
$("document").ready(function(){
      $("h2[data-type=vitamin]").css("background-color", "#3D9970");
      $("h2[data-type=mineralwater]").css("background-color", "#0074D9");
      $("h2[data-type=proteinbar]").css("background-color", "#85144b");

/*
      These were the selectors I chose on my attempt. Don't know why when I try to wrap the anchor around the li tag, they display as blocks, so I wrapped the img instead.
      $(".product-item img").wrap("<a href='product.html' target='_blank'></a>");
      $(".product-item img").on("click", productPage);
*/

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

//Video solution from Lynda course. Wow. This solution was WAAAAAYY more complex than I think my current capabilities can facilitate.
$(".product-item").each(function () {
            var prodName = encodeURIComponent($(this).children("h2").text());
            var prodID = encodeURIComponent($(this).data("prod_id"));

            var link = $("<a href='product.html?prodName=" + prodName + "&prodID=" + prodID + "'/>");
            $(this).children("img").wrap(link);
        })

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

function highlight() {
        $("#evtTarget").toggleClass("highlighted");
      }

/* my attempt at function that would grab the inner html of the sibling of the clicked image and then zap that into the inner html of the product name. Couldn't get anything to show.

function productPage() {
  alert("fingers crossed");

  var productName = $(this).next.text;
  alert(productName)
  $("span#productName").text(productName);
}

*/
