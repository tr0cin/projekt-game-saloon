//change letter colours
$( document ).ready( changeColors );

function dec2Hex(dec) {
    return Math.abs(dec).toString(16);
};

function randomColor()
{
      setTimeout(2500);
      let x = Math.floor(Math.random()*16777215+1000000);
      console.log(x);
      x = "#"+dec2Hex(x);
      console.log(x);
      return x;
};

function changeColors()
{
        $('#main').css('color', randomColor());
};

window.setInterval(changeColors, 1000);
