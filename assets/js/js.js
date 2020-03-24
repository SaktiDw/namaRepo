$('document').ready(function () {
  $("button.menu-trigger").click(function(){
    $("ul.menu, button.menu-trigger, body").toggleClass("menu-open");
  });
})