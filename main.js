console.log("Week 4 - Day 4 | Project - 1 [12:08 PM] ");

$(document).ready(function () {
  const cells = $(".cell");
  const turnSpan = $("#turn");
  // console.log(cells);
  let turn = "X";
  const O = "O";
  const X = "X";

  cells.click(cellClicked);

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
});

/*
  A. Grid Layout [HTML + CSS]
    HTML: use div with id 'board' and 9 div with class 'cell'
    CSS: style grid "board"
    CSS: style width & height "cell"
    HTML: add div id="all"
    HTML: add par "PLAYER TURN:" id='turn'
    HTML: add par "WIN" id='winner'
    HTML: add button "Play Again" id='restart'
    CSS: #all display: grid; && justify-content: center;
    CSS: p text-align: center;    

  B. When the player click on one of the cell => Show X || O
    show click X
    show click X || O (turn variable to switch between turns)
    Show the turn show turn to which player => PLAYER TURN: X || O
    Extra: 
      Invalid move => background red || can't click 
      
  NOW. when click on the button 'Play Again' the game will restart or the page will refresh

  C. When the player select 3 Win

  D. Show who win and a button to "Play Again"
*/
