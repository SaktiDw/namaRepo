$('document').ready(function () {
  $("button.menu-trigger").click(function(){
    $("ul.menu, button.menu-trigger span, body").toggleClass("menu-open");
  });
})