$("document").ready(function() {
    $("#menu a").prepend("<img src='icon.png'>");
    $("#sidebar_content_1 ul a:first").css("color", "red");
    $("#sidebar_content_2 ul li:even").css("margin-left", "5px");
});

$("#header h1").click(function (evt) {
    $("#header").css("backgroundColor", "#F012BE");
});

$("h2.title").click(function (evt) {
    $("#content").replaceWith("<img src='greatScott.gif'>");
});

$("#sidebar_content_2 h2").click(function (evt) {
    $("#sidebar_content_2 ul").fadeToggle("slow", "linear");
});
