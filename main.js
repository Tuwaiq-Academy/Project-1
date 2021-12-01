console.log("Week 4 - Day 4 | Project - 1 [12:28 PM] ");

$(document).ready(function () {
  const cells = $(".cell");
  const turnSpan = $("#turn");

  const restart=$('#restart')
  // console.log(cells);
  let turn = "X";
  const O = "O";
  const X = "X";

  cells.click(cellClicked);
  restart.click(restartTheGame)

  function cellClicked() {
    // console.log(this);
    // this => DOM
    if ($(this).text() === "") {
      if (turn === X) {
        $(this).text(X);
        turnSpan.text(O);
        turn = O;
      } else {
        $(this).text(O);
        turnSpan.text(X);
        turn = X;
      }
    } else {
      $(this).css("background-color", "red");
      setTimeout(()=>{
        $(this).css("background-color", "white");
      },250)
    }
  }

  function restartTheGame() { 
    console.log('restart called');
    location.reload()
   }
});

/*
  STEP 1: Grid Layout [HTML + CSS]
    HTML: use div with id 'board' and 9 div with class 'cell'
    CSS: style grid "board"
    CSS: style width & height "cell"
    HTML: add div id="all"
    HTML: add par "PLAYER TURN:" id='turn'
    HTML: add par "WIN" id='winner'
    HTML: add button "Play Again" id='restart'
    CSS: #all display: grid; && justify-content: center;
    CSS: p text-align: center;    

  STEP 2: When the player click on one of the cell => Show X || O
    show click X
    show click X || O (turn variable to switch between turns)
    Show the turn show turn to which player => PLAYER TURN: X || O
    Extra: 
      Invalid move => background red || can't click 

  NOW. when click on the button 'Play Again' the game will restart or the page will refresh (restart the game)

  STEP 3: When the player select 3 Win (check the winner)
    Build the logic to check if a player win or not
    horizontal, vertical, or diagonal

  STEP 4: When a player win 
    Show who is the winner
    Hide the 'turn' p
    Show button say "Play Again" (restart the game)
    Make this button restart the game (refresh the page)

    Extra:
      Block clicked on the cell after a player win
*/
