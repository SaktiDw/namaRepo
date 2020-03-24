$('document').ready(function () {
  // open close menu
  $("nav button").click(function(){
    $("ul.menu, button.menu-trigger span, body").toggleClass("menu-open");
  });
  // open close booking
  $("section#konsul button, button.close").click(function(){
    $(".booking").toggleClass("show");
  });
})