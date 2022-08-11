$( document ).ready( newDeck );

//let card1 = $('#card1').attr("src","graphics/cards/card1.png");

let deck = [];

function newDeck()
{
  for(i=0;i<8;i++)
  {
    deck[i] = 'url("graphics/cards/card'+ (i+1) +'.png")';
    console.log(deck[i]);
  }
  for(i=8;i<16;i++)
  {
    deck[i] = 'url("graphics/cards/card'+ (i+1) +'.png")';
    console.log(deck[i]);
  }
}

function shuffleDeck()
{
  let temp;

}

function showCard(number)
{
  console.log($('#card1').css('background-image', deck[number]));
}
