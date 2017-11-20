$("document").ready(function() {
  $(".startInstructionContainer").fadeIn( 1000 , animateArrow())
});

$(".recipeButton").mouseover(function () {
  $(this).css("width", "110%");
})

$(".recipeButton").on("mouseleave", function () {
  $(this).css("width", "100%");
})

$(".recipeButton").click(function (evt) {
  $(this).css({
  "backgroundColor" : "#8C2540",
  "color" : "#fff",
  "borderColor" : "#8C2540",
  "width" : "110%",})
  $(this).off("mouseleave")
  $(".recipeButton").not(this).removeAttr("style")
  $(".startInstructionContainer").detach()
  $(".recipe").fadeOut( 1000 );
  $("#" + $(this).data("rel")).fadeIn( 1000 )
});


/*Function to move arrow icon back and forth
-Locateds icon via class name
-Moves the arrow to the left
-Moves the arrow back to the original position
-Uses the same function as a callback function once the animation is complete
-This sets the arrow in a repating loop*/
function animateArrow () {
  $(".fa-chevron-left").animate({
    marginRight: "+=20"
  }, 1000, 'linear').animate({
    marginRight: "-=20"
  }, 1000, 'linear', animateArrow);
};
