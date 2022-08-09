var chooseGame1 = document.getElementById('game1');
var chooseGame2 = document.getElementById('game2');
var chooseGame3 = document.getElementById('game3');

chooseGame1.addEventListener("mouseover", function() { changeGraphic(1); } );
chooseGame2.addEventListener("mouseover", function() { changeGraphic(2); } );
chooseGame3.addEventListener("mouseover", function() { changeGraphic(3); } );

function changeGraphic(number)
{
  //alert(number);

  var picture = "url(graphics/template"+number+".png";

  $('#game'+number).css('background-image' , picture);

}
