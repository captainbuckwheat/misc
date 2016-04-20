/* The battle is between any number of dice greater then 1. 
Each dice can have any positive number of faces. Each face can have any number of eyes.
Count the probability of wins for n battles for each dice. Return them in the order as dice were presented.
(Aksana & Josh)
*/

var dice_battle = function(a,n) {  //!! works only for dice with individule numbers of faces
	var i, j, roll, wins, result, max, numeral, dice, tie; 
	wins = []; //will register the wins after each n win[k] = number of wins for player k 
	roll = []; //will show the sides for all the dice after each roll roll[k] is what player k rolled
	result = []; // will show the probability for each dice in order: result[k] shows the probability for dice k to beat the other dice.
	for (i = 0; i < a.length; i++) wins[i] = 0; //list of wins is initialized to zeroes per each dice in a bottle
	for (i = 0; i < n; i++) {
		for (j = 0; j < a.length; j++) {
			numeral = Math.floor(Math.random()*(a[j].length));
	 		roll[j] = a[j][numeral];
		}
		max = -1; 
		tie = false;
		for (j = 0; j < a.length; j++) {
			if (roll[j] > max) {
				tie = false;
				max = roll[j];
				dice = j; 
			} else if (max === roll[j]) {
				tie = true; 
			}
		}
		if (tie === false) wins[dice]++; 
	}	
	max = 0;	
	for (i = 0; i < a.length; i++) {
		if (wins[i] > max) {
			max = wins[i]; 
			dice = i;
		}
	}
	for (i = 0; i < a.length; i++) result[i] = wins[i]/n;
	return result; 
}
