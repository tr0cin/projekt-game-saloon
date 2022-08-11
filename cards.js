$( document ).ready( newDeck );

let deck = [];

function newDeck()
{
  for(i=0;i<8;i++)
  {
    console.log(i);
    deck[i] = 'url("graphics/cards/card'+ (i+1) +'.png")';
    console.log(deck[i]);
  }
  for(i=8;i<16;i++)
  {
    console.log(i);
    deck[i] = 'url("graphics/cards/card'+ (i+1) +'.png")';
    console.log(deck[i]);
  }
  shuffleDeck();
}

function shuffleDeck()
{
  let temp;
  let random1;
  let random2;
  for(i=0;i<6;i++)
  {
    random1 = Math.floor(Math.random()*8);
    random2 = Math.floor(Math.random()*16);
    console.log(random1);
    console.log(random2);
    while(random2<8)
      random2 = Math.floor(Math.random()*16);
    while(random1==random2)
      random1 = Math.floor(Math.random()*8);
    temp = deck[random1];
    deck[random1]=deck[random2];
    deck[random2]=temp;
    console.log(deck[random1]);
    console.log(deck[random2]);
  }
  getElement();
}

//reveal card on click
let c1 = document.getElementById("card1");
console.log(c1);
c1.addEventListener("onclick", showCard(0));


function showCard(number)
{
  console.log($("#card1").css('background-image', deck[number]));
}
