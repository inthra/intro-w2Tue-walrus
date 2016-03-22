$().ready(function(){
  $("h1").click(function(){
    alert("This is the header.");
  });
  $("h3").click(function(){
    alert("This is the sub header.");
  });
  $("p").click(function(){
    alert("This is the paragraph.");
  });
  $("#walrus1").click(function(){
    alert("This is an example of click.");
  });
  $("ul").click(function() {
    alert("this is a list");
  });
  $("#test").click(function() {
    alert("we are masters");
  });
  $("#walrus2").dblclick(function(){
    alert("This is an example of double click.");
  });
  $("ol").hover(function(){
    alert("This is a hover test.");
  });
});
