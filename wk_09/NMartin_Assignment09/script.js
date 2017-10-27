$("document").ready(function () {
    $("#box").html("a logical universe that makes sense.");

    $("#button").one('click', function() {
      $("#box").animate({width: 1000}, 500)
               .animate({height: 350}, 300)
      $("#box").prepend("Deep in the human unconscious is a pervasive need for ");
      $("#box").append(" But the real universe is always one step beyond logic.");
      $("#box").append("<br>-Frank Herbert, Dune");
      $("#button").html("refresh page to do it again").css("background-color", "black");
    });
});
/*
Quote that is added to the DOM using jQuery

“Deep in the human unconscious is a pervasive need for a logical
universe that makes sense. But the real universe is always one step beyond logic.”

― Frank Herbert, Dune
*/
