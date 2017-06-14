//business logic
function PlayerOne(name) {
  this.name = name;
  this.roundtally = 0;
  this.total = 0;
}

function PlayerTwo(name) {
  this.name = name;
  this.roundtally = 0;
  this.total = 0;
}

// dice:
function oneThroughSix(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

PlayerOne.prototype.addRound = function(number) {
  this.roundtally === 0;
  if (number === 1) {
    this.roundtally = 0;
  } else {
    this.roundtally += number;
  }
  return this.roundtally;
}

PlayerTwo.prototype.addRound = function(number) {
  this.roundtally === 0;
  if (number === 1) {
    this.roundtally = 0;
  } else {
    this.roundtally += number;
  }
    return this.roundtally;
}

PlayerOne.prototype.addToTotal = function() {
  this.total += this.roundtally;
  return this.total;
}

PlayerTwo.prototype.addToTotal = function() {
  this.total += this.roundtally;
  return this.total;
}

PlayerOne.prototype.checkForWin = function() {
    alert("Player 1 wins!");
  }

PlayerTwo.prototype.checkForWin = function() {
    alert("Player 2 wins!");
  }

// user interface logic
//Player 1 adds name:
$(document).ready(function() {
  $("button#player1enter").click(function(event) {
    event.preventDefault();
    var playerOneName = $("input#player1name").val();
    $("p#1name").append("<p>Name: " + playerOneName + "</p>")
    var playerOne = new PlayerOne(playerOneName);
    //Player 1 clicks 'roll':
      $("button#rollbutton1").click(function(event) {
        if (playerOne.total >= 100) {
          playerOne.checkForWin();
        };
        $(".rolled-dice1").empty();
        $(".rolled-dice1").append("<h3>You rolled a: </h3>")
        var thisClick = parseInt(oneThroughSix(1,6));
        $(".rolled-dice1").append("<h4>" + thisClick + "</h4>");

        var roll = playerOne.addRound(thisClick);
        if (roll === 0) {
          $("#1roundtally").empty();
          $("#1roundtally").append("<h5> Round Tally: " + roll + "</h5>")
          $(".rolled-dice1").append("<h5>Too bad! You lose your points. Next player's turn.</h5>");
        } else {
          $("#1roundtally").empty();
          $("#1roundtally").append("<h5> Round Tally: " + roll + "</h5>")
        };
      });
    //Player 1 clicks 'stop'
      $("button#stopbutton1").click(function(event) {
        $("#1total").empty();
        var total = playerOne.addToTotal();
        $("#1total").append("<h5> TOTAL: " + total + "</h5>");
        playerOne.roundtally = 0;
      });
  });

//Player 2 adds name:
  $(document).ready(function() {
    $("button#player2enter").click(function(event) {
      event.preventDefault();
      var playerTwoName = $("input#player2name").val();
      $("p#2name").append("<p>Name: " + playerTwoName + "</p>")
      var playerTwo = new PlayerTwo(playerTwoName);
      //Player 1 clicks 'roll':
        $("button#rollbutton2").click(function(event) {
          if (playerTwo.total >= 100) {
            playerTwo.checkForWin();
          };
          $(".rolled-dice2").empty();
          $(".rolled-dice2").append("<h3>You rolled a: </h3>")
          var thisClick = parseInt(oneThroughSix(1,6));
          $(".rolled-dice2").append("<h4>" + thisClick + "</h4>");

          var roll = playerTwo.addRound(thisClick);
          if (roll === 0) {
            $("#2roundtally").empty();
            $("#2roundtally").append("<h5> Round Tally: " + roll + "</h5>")
            $(".rolled-dice2").append("<h5>Too bad! You lose your points. Next player's turn. Hit the stop button.</h5>");
          } else {
            $("#2roundtally").empty();
            $("#2roundtally").append("<h5> Round Tally: " + roll + "</h5>")
          };
        });
        $("button#stopbutton2").click(function(event) {
          $("#2total").empty();
          var total = playerTwo.addToTotal();
          $("#2total").append("<h5> TOTAL: " + total + "</h5>");
          playerTwo.roundtally = 0;
        });
    });
  });
});
