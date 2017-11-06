$("document").ready(function(){
      $("a").click(function (evt) {
        $(this).addClass("clicked");
      });

      $("h2.title").click(function (evt) {
		     $(this).detach();
         $('<img src="whaHappen.gif">').appendTo("div#content");
	});
});
