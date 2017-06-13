## SPECS:
0. Write out how to play for users.
1. Program prompts users to enter their name in a form.
2. Program creates 2 objects, one for each player, with their name and a total starting at 0.
3. Program has 'roll' and 'stop' buttons available for Player 1
4. Player one can press 'roll', behind the scenes random function will run
  5a. If number === 1, player 1's turn is over. Their round_count is 0. Now player 2's turn.
  5b. If number > 1, player 1 can choose between 'roll' and 'stop' button.
    5b1. If player 1 chooses 'roll': Repeat steps 5a-5b.
    5b2: If player chooses 'stop': round_count is added to total. Now player 2's turn.
6. If object's total >= 40, game over, that object's name wins!







GENERATE RANDOM NUMBER BETWEEN 1-6:
// function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
