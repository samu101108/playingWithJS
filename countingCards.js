/*In the casino game Blackjack, a player can gain an advantage over the house
by keeping track of the relative number of high and low cards remaining in the
 deck. This is called Card Counting.

Having more high cards remaining in the deck favors the player. Each card is
assigned a value according to the table below. When the count is positive, the
player should bet high. When the count is zero or negative, the player should bet low.

Count Change	 Cards
+1	           2, 3, 4, 5, 6
0	             7, 8, 9
-1	           10, 'J', 'Q', 'K', 'A'
You will write a card counting function. It will receive a card parameter and
increment or decrement the global count variable according to the card's value
(see table). The function will then return a string with the current count and
the string "Bet" if the count is positive, or "Hold" if the count is zero or
negative. The current count and the player's decision ("Bet" or "Hold") should
be separated by a single space.

Example Output
"-3 Hold"
"5 Bet"

Hint
Do NOT reset count to 0 when value is 7, 8, or 9.
*/
//GIVEN TESTS
/*
Cards Sequence 2, 3, 4, 5, 6 should return "5 Bet"
Cards Sequence 7, 8, 9 should return "0 Hold"
Cards Sequence 10, J, Q, K, A should return "-5 Hold"
Cards Sequence 3, 7, Q, 8, A should return "-1 Hold"
Cards Sequence 2, J, 9, 2, 7 should return "1 Bet"
Cards Sequence 2, 2, 10 should return "1 Bet"
Cards Sequence 3, 2, A, 10, K should return "-1 Hold"
*/
//Here is my solution:
var count = 0; // this variable is initializide
function cc(card) {
  switch(card){
    case 2: case 3: case 4: case 5: case 6:
    //case 2, 3, 4, 5 or 6, increment count by one.
      count += 1;
    break;
    case 7: case 8: case 9:
    //case 7, 8 or 9, do nothing
      count += 0;
    break;
    case 10: case 'J': case 'Q': case 'K': case 'A':
    //case  10, 'J', 'Q', 'K' or 'A', decrement by 1
      count -= 1;
    break;
  }
  return count + (count>=1 ? " Bet" : " Hold");
  //this ternary operator works evaluatin the condition (if count is >= 1)
  //if so, it returns ' Bet', else, it retuns ' Hold'
cc(2); cc(3); cc(7); cc('K'); cc('A');
//The function is called a few times to test the increment of the variable
//count.
