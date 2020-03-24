$('document').ready(function () {
  $("nav button").click(function(){
    $("ul.menu, button.menu-trigger span, body").toggleClass("menu-open");
  });
})