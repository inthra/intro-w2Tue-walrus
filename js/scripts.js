$().ready(function(){

  $(".clickable").click(function(){
    $(".initially-hidden").toggle();
    $(".initially-shown").toggle();
  });

});
