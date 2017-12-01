$("document").ready(function() {
  $(".startInstructionContainer").fadeIn( 1000 );
  $("main").hide();
});

$(".pageTitle i").click(function (evt) {
  $(".pageTitle i").fadeOut( 300 );
  $("header").animate({
    height: "90px"
  }, 1000, 'linear');
  $(".pageTitle").animate({
    top: "-=20%",
  }, 1000, 'linear');
  $(".pageTitle").animate({
    left: "-=35%",
  }, 500, 'linear', textAnimation);
});

$(".recipeButton").click(function (evt) {
  $(this).css({})
  //$(this).off("mouseleave")
  //$(".recipeButton").not(this).removeAttr("style")
  $(".startInstructionContainer").detach()
  $(".recipe").fadeOut( 1000 );
  $("#" + $(this).data("rel")).fadeIn( 1000 )
});


// FUNCTIONS

function textAnimation () {
  $("main").fadeIn( 2000 );
  $(".recipeButton").textillate({
    in: {
      effect: 'flipInX',
      delay: 50
    }
  });
  $(".instruction").textillate({
    in: {
      effect: 'bounceInUp',
      sync: false,
      sequence: true
    }
  });
}
