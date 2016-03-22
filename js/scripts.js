$().ready(function(){

  $(".clickable").click(function(){
    $(".initially-hidden").fadeToggle();
    $(".initially-shown").fadeToggle();
  });

  $("button#green").click(function(){
    $("body").removeClass();
    $("body").addClass("background-green");
  });

  $("button#yellow").click(function(){
    $("body").removeClass();
    $("body").addClass("background-yellow");
  });

  $("button#red").click(function(){
    $("body").removeClass();
    $("body").addClass("background-red");
  });
});
