$().ready(function(){

  $(".clickable").click(function(){
    $(".initially-hidden").fadeToggle();
    $(".initially-shown").fadeToggle();
  });
});
